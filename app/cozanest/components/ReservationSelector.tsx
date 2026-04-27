"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Widget = "resort" | "dates" | "guests" | "promo" | null;

const formatDate = (d: Date | null) =>
  d
    ? d.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : "";

const toInputValue = (d: Date | null) =>
  d ? d.toISOString().slice(0, 10) : "";

const Counter = ({
  value,
  onChange,
  min = 0,
  max = 6,
}: {
  value: number;
  onChange: (v: number) => void;
  min?: number;
  max?: number;
}) => (
  <div className="flex items-center gap-3">
    <button
      type="button"
      onClick={() => onChange(Math.max(min, value - 1))}
      disabled={value <= min}
      className="counter-btn"
      aria-label="Decrease"
    >
      −
    </button>
    <span className="w-6 text-center font-serif text-[18px] text-background">
      {value}
    </span>
    <button
      type="button"
      onClick={() => onChange(Math.min(max, value + 1))}
      disabled={value >= max}
      className="counter-btn"
      aria-label="Increase"
    >
      +
    </button>
  </div>
);

export const ReservationSelector = () => {
  const [active, setActive] = useState<Widget>(null);
  const [checkIn, setCheckIn] = useState<Date | null>(
    new Date(2026, 4, 8),
  );
  const [checkOut, setCheckOut] = useState<Date | null>(
    new Date(2026, 4, 10),
  );
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [memberCard, setMemberCard] = useState("");
  const [promoCode, setPromoCode] = useState("");

  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setActive(null);
      }
    };
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  const toggle = (w: Widget) => setActive((cur) => (cur === w ? null : w));

  const guestSummary = `${rooms} ${rooms === 1 ? "Room" : "Rooms"} · ${
    adults + children
  } ${adults + children === 1 ? "Guest" : "Guests"}`;

  const datesSummary =
    checkIn && checkOut
      ? `${formatDate(checkIn)} - ${formatDate(checkOut)}`
      : "Select dates";

  const promoSummary =
    memberCard || promoCode
      ? promoCode || `Card ····${memberCard.slice(-4)}`
      : "Choose rate or code";

  return (
    <div ref={wrapperRef} className="reservation-selector">
      <div className="reservation-bar">
        <button
          type="button"
          onClick={() => toggle("resort")}
          className={cn("reservation-field", active === "resort" && "is-active")}
        >
          <span className="reservation-label">Destination</span>
          <span className="reservation-value">CozaNest Langkawi</span>
        </button>

        <button
          type="button"
          onClick={() => toggle("dates")}
          className={cn("reservation-field", active === "dates" && "is-active")}
        >
          <span className="reservation-label">Check-in - Check-out</span>
          <span className="reservation-value">{datesSummary}</span>
        </button>

        <button
          type="button"
          onClick={() => toggle("guests")}
          className={cn(
            "reservation-field",
            active === "guests" && "is-active",
          )}
        >
          <span className="reservation-label">Guests</span>
          <span className="reservation-value">{guestSummary}</span>
        </button>

        <button
          type="button"
          onClick={() => toggle("promo")}
          className={cn("reservation-field", active === "promo" && "is-active")}
        >
          <span className="reservation-label">Special rate</span>
          <span className="reservation-value">{promoSummary}</span>
        </button>

        <button type="button" className="reservation-submit" aria-label="Check availability">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
          <span>Check availability</span>
        </button>
      </div>

      {active && (
        <div className="reservation-dropdown" role="dialog" aria-modal="false">
          {active === "resort" && (
            <div className="dropdown-body">
              <p className="dropdown-title">Your stay</p>
              <ul className="resort-list">
                <li className="resort-option is-selected">
                  <span className="font-serif text-[20px] text-background">
                    CozaNest Langkawi
                  </span>
                  <span className="resort-meta">Malaysia · Tropical Resort</span>
                </li>
              </ul>
            </div>
          )}

          {active === "dates" && (
            <div className="dropdown-body">
              <p className="dropdown-title">Select your dates</p>
              <div className="grid grid-cols-2 gap-5">
                <label className="field-stack">
                  <span className="field-label">Check-in</span>
                  <input
                    type="date"
                    value={toInputValue(checkIn)}
                    onChange={(e) =>
                      setCheckIn(
                        e.target.value ? new Date(e.target.value) : null,
                      )
                    }
                    className="field-input"
                  />
                </label>
                <label className="field-stack">
                  <span className="field-label">Check-out</span>
                  <input
                    type="date"
                    value={toInputValue(checkOut)}
                    onChange={(e) =>
                      setCheckOut(
                        e.target.value ? new Date(e.target.value) : null,
                      )
                    }
                    className="field-input"
                  />
                </label>
              </div>
            </div>
          )}

          {active === "guests" && (
            <div className="dropdown-body">
              <p className="dropdown-title">Rooms &amp; Guests</p>
              <div className="counter-row">
                <div>
                  <p className="font-serif text-[18px] text-background">Rooms</p>
                  <p className="counter-hint">Up to 6 rooms per booking</p>
                </div>
                <Counter value={rooms} onChange={setRooms} min={1} max={6} />
              </div>
              <div className="counter-row">
                <div>
                  <p className="font-serif text-[18px] text-background">Adults</p>
                  <p className="counter-hint">Ages 16 and older</p>
                </div>
                <Counter value={adults} onChange={setAdults} min={1} max={6} />
              </div>
              <div className="counter-row">
                <div>
                  <p className="font-serif text-[18px] text-background">Children</p>
                  <p className="counter-hint">Ages 0 - 15</p>
                </div>
                <Counter
                  value={children}
                  onChange={setChildren}
                  min={0}
                  max={6}
                />
              </div>
            </div>
          )}

          {active === "promo" && (
            <div className="dropdown-body">
              <p className="dropdown-title">Special rate</p>
              <label className="field-stack">
                <span className="field-label">Member card number</span>
                <span className="field-hint">16 digits on your card</span>
                <input
                  type="text"
                  value={memberCard}
                  onChange={(e) => setMemberCard(e.target.value)}
                  placeholder="•••• •••• •••• ••••"
                  className="field-input"
                />
              </label>
              <label className="field-stack">
                <span className="field-label">Preferred code</span>
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="e.g. COZA20"
                  className="field-input"
                />
              </label>
            </div>
          )}

          <div className="dropdown-footer">
            <button
              type="button"
              onClick={() => {
                if (active === "dates") {
                  setCheckIn(null);
                  setCheckOut(null);
                }
                if (active === "guests") {
                  setRooms(1);
                  setAdults(2);
                  setChildren(0);
                }
                if (active === "promo") {
                  setMemberCard("");
                  setPromoCode("");
                }
              }}
              className="btn-clear"
            >
              Clear
            </button>
            <button
              type="button"
              onClick={() => setActive(null)}
              className="btn-confirm"
            >
              Confirm
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
