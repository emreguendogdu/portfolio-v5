'use client';

import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import RotatingSalutation from './RotatingSalutation';

gsap.registerPlugin(SplitText);

// ─── World country calling codes ────────────────────────────────────────────

interface Country {
  code: string; // calling code e.g. "1"
  iso: string;  // ISO 3166-1 alpha-2 e.g. "US"
  name: string;
}

const flag = (iso: string) =>
  iso
    .toUpperCase()
    .split('')
    .map((c) => String.fromCodePoint(0x1f1e6 + c.charCodeAt(0) - 65))
    .join('');

const ALL_COUNTRIES: Country[] = [
  { code: '93', iso: 'AF', name: 'Afghanistan' },
  { code: '358', iso: 'AX', name: 'Åland Islands' },
  { code: '355', iso: 'AL', name: 'Albania' },
  { code: '213', iso: 'DZ', name: 'Algeria' },
  { code: '1684', iso: 'AS', name: 'American Samoa' },
  { code: '376', iso: 'AD', name: 'Andorra' },
  { code: '244', iso: 'AO', name: 'Angola' },
  { code: '1264', iso: 'AI', name: 'Anguilla' },
  { code: '672', iso: 'AQ', name: 'Antarctica' },
  { code: '1268', iso: 'AG', name: 'Antigua & Barbuda' },
  { code: '54', iso: 'AR', name: 'Argentina' },
  { code: '374', iso: 'AM', name: 'Armenia' },
  { code: '297', iso: 'AW', name: 'Aruba' },
  { code: '61', iso: 'AU', name: 'Australia' },
  { code: '43', iso: 'AT', name: 'Austria' },
  { code: '994', iso: 'AZ', name: 'Azerbaijan' },
  { code: '1242', iso: 'BS', name: 'Bahamas' },
  { code: '973', iso: 'BH', name: 'Bahrain' },
  { code: '880', iso: 'BD', name: 'Bangladesh' },
  { code: '1246', iso: 'BB', name: 'Barbados' },
  { code: '375', iso: 'BY', name: 'Belarus' },
  { code: '32', iso: 'BE', name: 'Belgium' },
  { code: '501', iso: 'BZ', name: 'Belize' },
  { code: '229', iso: 'BJ', name: 'Benin' },
  { code: '1441', iso: 'BM', name: 'Bermuda' },
  { code: '975', iso: 'BT', name: 'Bhutan' },
  { code: '591', iso: 'BO', name: 'Bolivia' },
  { code: '387', iso: 'BA', name: 'Bosnia & Herzegovina' },
  { code: '267', iso: 'BW', name: 'Botswana' },
  { code: '55', iso: 'BR', name: 'Brazil' },
  { code: '246', iso: 'IO', name: 'British Indian Ocean Territory' },
  { code: '1284', iso: 'VG', name: 'British Virgin Islands' },
  { code: '673', iso: 'BN', name: 'Brunei' },
  { code: '359', iso: 'BG', name: 'Bulgaria' },
  { code: '226', iso: 'BF', name: 'Burkina Faso' },
  { code: '257', iso: 'BI', name: 'Burundi' },
  { code: '855', iso: 'KH', name: 'Cambodia' },
  { code: '237', iso: 'CM', name: 'Cameroon' },
  { code: '1', iso: 'CA', name: 'Canada' },
  { code: '238', iso: 'CV', name: 'Cape Verde' },
  { code: '1345', iso: 'KY', name: 'Cayman Islands' },
  { code: '236', iso: 'CF', name: 'Central African Republic' },
  { code: '235', iso: 'TD', name: 'Chad' },
  { code: '56', iso: 'CL', name: 'Chile' },
  { code: '86', iso: 'CN', name: 'China' },
  { code: '61', iso: 'CX', name: 'Christmas Island' },
  { code: '61', iso: 'CC', name: 'Cocos Islands' },
  { code: '57', iso: 'CO', name: 'Colombia' },
  { code: '269', iso: 'KM', name: 'Comoros' },
  { code: '243', iso: 'CD', name: 'Congo (DRC)' },
  { code: '242', iso: 'CG', name: 'Congo (Republic)' },
  { code: '682', iso: 'CK', name: 'Cook Islands' },
  { code: '506', iso: 'CR', name: 'Costa Rica' },
  { code: '225', iso: 'CI', name: "Côte d'Ivoire" },
  { code: '385', iso: 'HR', name: 'Croatia' },
  { code: '53', iso: 'CU', name: 'Cuba' },
  { code: '599', iso: 'CW', name: 'Curaçao' },
  { code: '357', iso: 'CY', name: 'Cyprus' },
  { code: '420', iso: 'CZ', name: 'Czech Republic' },
  { code: '45', iso: 'DK', name: 'Denmark' },
  { code: '253', iso: 'DJ', name: 'Djibouti' },
  { code: '1767', iso: 'DM', name: 'Dominica' },
  { code: '1809', iso: 'DO', name: 'Dominican Republic' },
  { code: '593', iso: 'EC', name: 'Ecuador' },
  { code: '20', iso: 'EG', name: 'Egypt' },
  { code: '503', iso: 'SV', name: 'El Salvador' },
  { code: '240', iso: 'GQ', name: 'Equatorial Guinea' },
  { code: '291', iso: 'ER', name: 'Eritrea' },
  { code: '372', iso: 'EE', name: 'Estonia' },
  { code: '268', iso: 'SZ', name: 'Eswatini' },
  { code: '251', iso: 'ET', name: 'Ethiopia' },
  { code: '500', iso: 'FK', name: 'Falkland Islands' },
  { code: '298', iso: 'FO', name: 'Faroe Islands' },
  { code: '679', iso: 'FJ', name: 'Fiji' },
  { code: '358', iso: 'FI', name: 'Finland' },
  { code: '33', iso: 'FR', name: 'France' },
  { code: '594', iso: 'GF', name: 'French Guiana' },
  { code: '689', iso: 'PF', name: 'French Polynesia' },
  { code: '241', iso: 'GA', name: 'Gabon' },
  { code: '220', iso: 'GM', name: 'Gambia' },
  { code: '995', iso: 'GE', name: 'Georgia' },
  { code: '49', iso: 'DE', name: 'Germany' },
  { code: '233', iso: 'GH', name: 'Ghana' },
  { code: '350', iso: 'GI', name: 'Gibraltar' },
  { code: '30', iso: 'GR', name: 'Greece' },
  { code: '299', iso: 'GL', name: 'Greenland' },
  { code: '1473', iso: 'GD', name: 'Grenada' },
  { code: '590', iso: 'GP', name: 'Guadeloupe' },
  { code: '1671', iso: 'GU', name: 'Guam' },
  { code: '502', iso: 'GT', name: 'Guatemala' },
  { code: '44', iso: 'GG', name: 'Guernsey' },
  { code: '224', iso: 'GN', name: 'Guinea' },
  { code: '245', iso: 'GW', name: 'Guinea-Bissau' },
  { code: '592', iso: 'GY', name: 'Guyana' },
  { code: '509', iso: 'HT', name: 'Haiti' },
  { code: '504', iso: 'HN', name: 'Honduras' },
  { code: '852', iso: 'HK', name: 'Hong Kong' },
  { code: '36', iso: 'HU', name: 'Hungary' },
  { code: '354', iso: 'IS', name: 'Iceland' },
  { code: '91', iso: 'IN', name: 'India' },
  { code: '62', iso: 'ID', name: 'Indonesia' },
  { code: '98', iso: 'IR', name: 'Iran' },
  { code: '964', iso: 'IQ', name: 'Iraq' },
  { code: '353', iso: 'IE', name: 'Ireland' },
  { code: '44', iso: 'IM', name: 'Isle of Man' },
  { code: '972', iso: 'IL', name: 'Israel' },
  { code: '39', iso: 'IT', name: 'Italy' },
  { code: '1876', iso: 'JM', name: 'Jamaica' },
  { code: '81', iso: 'JP', name: 'Japan' },
  { code: '44', iso: 'JE', name: 'Jersey' },
  { code: '962', iso: 'JO', name: 'Jordan' },
  { code: '7', iso: 'KZ', name: 'Kazakhstan' },
  { code: '254', iso: 'KE', name: 'Kenya' },
  { code: '686', iso: 'KI', name: 'Kiribati' },
  { code: '965', iso: 'KW', name: 'Kuwait' },
  { code: '996', iso: 'KG', name: 'Kyrgyzstan' },
  { code: '856', iso: 'LA', name: 'Laos' },
  { code: '371', iso: 'LV', name: 'Latvia' },
  { code: '961', iso: 'LB', name: 'Lebanon' },
  { code: '266', iso: 'LS', name: 'Lesotho' },
  { code: '231', iso: 'LR', name: 'Liberia' },
  { code: '218', iso: 'LY', name: 'Libya' },
  { code: '423', iso: 'LI', name: 'Liechtenstein' },
  { code: '370', iso: 'LT', name: 'Lithuania' },
  { code: '352', iso: 'LU', name: 'Luxembourg' },
  { code: '853', iso: 'MO', name: 'Macao' },
  { code: '261', iso: 'MG', name: 'Madagascar' },
  { code: '265', iso: 'MW', name: 'Malawi' },
  { code: '60', iso: 'MY', name: 'Malaysia' },
  { code: '960', iso: 'MV', name: 'Maldives' },
  { code: '223', iso: 'ML', name: 'Mali' },
  { code: '356', iso: 'MT', name: 'Malta' },
  { code: '692', iso: 'MH', name: 'Marshall Islands' },
  { code: '596', iso: 'MQ', name: 'Martinique' },
  { code: '222', iso: 'MR', name: 'Mauritania' },
  { code: '230', iso: 'MU', name: 'Mauritius' },
  { code: '262', iso: 'YT', name: 'Mayotte' },
  { code: '52', iso: 'MX', name: 'Mexico' },
  { code: '691', iso: 'FM', name: 'Micronesia' },
  { code: '373', iso: 'MD', name: 'Moldova' },
  { code: '377', iso: 'MC', name: 'Monaco' },
  { code: '976', iso: 'MN', name: 'Mongolia' },
  { code: '382', iso: 'ME', name: 'Montenegro' },
  { code: '1664', iso: 'MS', name: 'Montserrat' },
  { code: '212', iso: 'MA', name: 'Morocco' },
  { code: '258', iso: 'MZ', name: 'Mozambique' },
  { code: '95', iso: 'MM', name: 'Myanmar' },
  { code: '264', iso: 'NA', name: 'Namibia' },
  { code: '674', iso: 'NR', name: 'Nauru' },
  { code: '977', iso: 'NP', name: 'Nepal' },
  { code: '31', iso: 'NL', name: 'Netherlands' },
  { code: '687', iso: 'NC', name: 'New Caledonia' },
  { code: '64', iso: 'NZ', name: 'New Zealand' },
  { code: '505', iso: 'NI', name: 'Nicaragua' },
  { code: '227', iso: 'NE', name: 'Niger' },
  { code: '234', iso: 'NG', name: 'Nigeria' },
  { code: '683', iso: 'NU', name: 'Niue' },
  { code: '672', iso: 'NF', name: 'Norfolk Island' },
  { code: '850', iso: 'KP', name: 'North Korea' },
  { code: '389', iso: 'MK', name: 'North Macedonia' },
  { code: '1670', iso: 'MP', name: 'Northern Mariana Islands' },
  { code: '47', iso: 'NO', name: 'Norway' },
  { code: '968', iso: 'OM', name: 'Oman' },
  { code: '92', iso: 'PK', name: 'Pakistan' },
  { code: '680', iso: 'PW', name: 'Palau' },
  { code: '970', iso: 'PS', name: 'Palestine' },
  { code: '507', iso: 'PA', name: 'Panama' },
  { code: '675', iso: 'PG', name: 'Papua New Guinea' },
  { code: '595', iso: 'PY', name: 'Paraguay' },
  { code: '51', iso: 'PE', name: 'Peru' },
  { code: '63', iso: 'PH', name: 'Philippines' },
  { code: '48', iso: 'PL', name: 'Poland' },
  { code: '351', iso: 'PT', name: 'Portugal' },
  { code: '1787', iso: 'PR', name: 'Puerto Rico' },
  { code: '974', iso: 'QA', name: 'Qatar' },
  { code: '262', iso: 'RE', name: 'Réunion' },
  { code: '40', iso: 'RO', name: 'Romania' },
  { code: '7', iso: 'RU', name: 'Russia' },
  { code: '250', iso: 'RW', name: 'Rwanda' },
  { code: '290', iso: 'SH', name: 'Saint Helena' },
  { code: '1869', iso: 'KN', name: 'Saint Kitts & Nevis' },
  { code: '1758', iso: 'LC', name: 'Saint Lucia' },
  { code: '590', iso: 'MF', name: 'Saint Martin' },
  { code: '508', iso: 'PM', name: 'Saint Pierre & Miquelon' },
  { code: '1784', iso: 'VC', name: 'Saint Vincent' },
  { code: '685', iso: 'WS', name: 'Samoa' },
  { code: '378', iso: 'SM', name: 'San Marino' },
  { code: '239', iso: 'ST', name: 'São Tomé & Príncipe' },
  { code: '966', iso: 'SA', name: 'Saudi Arabia' },
  { code: '221', iso: 'SN', name: 'Senegal' },
  { code: '381', iso: 'RS', name: 'Serbia' },
  { code: '248', iso: 'SC', name: 'Seychelles' },
  { code: '232', iso: 'SL', name: 'Sierra Leone' },
  { code: '65', iso: 'SG', name: 'Singapore' },
  { code: '1721', iso: 'SX', name: 'Sint Maarten' },
  { code: '421', iso: 'SK', name: 'Slovakia' },
  { code: '386', iso: 'SI', name: 'Slovenia' },
  { code: '677', iso: 'SB', name: 'Solomon Islands' },
  { code: '252', iso: 'SO', name: 'Somalia' },
  { code: '27', iso: 'ZA', name: 'South Africa' },
  { code: '82', iso: 'KR', name: 'South Korea' },
  { code: '211', iso: 'SS', name: 'South Sudan' },
  { code: '34', iso: 'ES', name: 'Spain' },
  { code: '94', iso: 'LK', name: 'Sri Lanka' },
  { code: '249', iso: 'SD', name: 'Sudan' },
  { code: '597', iso: 'SR', name: 'Suriname' },
  { code: '47', iso: 'SJ', name: 'Svalbard & Jan Mayen' },
  { code: '46', iso: 'SE', name: 'Sweden' },
  { code: '41', iso: 'CH', name: 'Switzerland' },
  { code: '963', iso: 'SY', name: 'Syria' },
  { code: '886', iso: 'TW', name: 'Taiwan' },
  { code: '992', iso: 'TJ', name: 'Tajikistan' },
  { code: '255', iso: 'TZ', name: 'Tanzania' },
  { code: '66', iso: 'TH', name: 'Thailand' },
  { code: '670', iso: 'TL', name: 'Timor-Leste' },
  { code: '228', iso: 'TG', name: 'Togo' },
  { code: '690', iso: 'TK', name: 'Tokelau' },
  { code: '676', iso: 'TO', name: 'Tonga' },
  { code: '1868', iso: 'TT', name: 'Trinidad & Tobago' },
  { code: '216', iso: 'TN', name: 'Tunisia' },
  { code: '90', iso: 'TR', name: 'Turkey' },
  { code: '993', iso: 'TM', name: 'Turkmenistan' },
  { code: '1649', iso: 'TC', name: 'Turks & Caicos Islands' },
  { code: '688', iso: 'TV', name: 'Tuvalu' },
  { code: '1340', iso: 'VI', name: 'U.S. Virgin Islands' },
  { code: '256', iso: 'UG', name: 'Uganda' },
  { code: '380', iso: 'UA', name: 'Ukraine' },
  { code: '971', iso: 'AE', name: 'United Arab Emirates' },
  { code: '44', iso: 'GB', name: 'United Kingdom' },
  { code: '1', iso: 'US', name: 'United States' },
  { code: '598', iso: 'UY', name: 'Uruguay' },
  { code: '998', iso: 'UZ', name: 'Uzbekistan' },
  { code: '678', iso: 'VU', name: 'Vanuatu' },
  { code: '39', iso: 'VA', name: 'Vatican City' },
  { code: '58', iso: 'VE', name: 'Venezuela' },
  { code: '84', iso: 'VN', name: 'Vietnam' },
  { code: '681', iso: 'WF', name: 'Wallis & Futuna' },
  { code: '967', iso: 'YE', name: 'Yemen' },
  { code: '260', iso: 'ZM', name: 'Zambia' },
  { code: '263', iso: 'ZW', name: 'Zimbabwe' },
];

// ─── Shortcuts ──────────────────────────────────────────────────────────────

const SHORTCUTS = { web: 'W', app: 'A', copy: 'C' } as const;

// ─── Country Dropdown ────────────────────────────────────────────────────────

interface DropdownPos {
  top: number;
  left: number;
  width: number;
}

function CountryDropdown({
  open,
  onClose,
  onSelect,
  selected,
  pos,
}: {
  open: boolean;
  onClose: () => void;
  onSelect: (code: string) => void;
  selected: string;
  pos: DropdownPos;
}) {
  const [query, setQuery] = useState('');
  const [activeIdx, setActiveIdx] = useState(0);
  const searchRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    if (!q) return ALL_COUNTRIES;
    return ALL_COUNTRIES.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.code.includes(q) ||
        c.iso.toLowerCase().includes(q),
    );
  }, [query]);

  // Reset & focus when opening
  useEffect(() => {
    if (open) {
      setQuery('');
      setActiveIdx(0);
      setTimeout(() => searchRef.current?.focus(), 30);
    }
  }, [open]);

  // Scroll active item into view
  useEffect(() => {
    const el = listRef.current?.children[activeIdx] as HTMLElement | undefined;
    el?.scrollIntoView({ block: 'nearest' });
  }, [activeIdx]);

  // Close on Escape / click-outside handled in parent
  const handleKey = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Escape') { onClose(); return; }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveIdx((i) => Math.min(i + 1, filtered.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveIdx((i) => Math.max(i - 1, 0));
      } else if (e.key === 'Enter' && filtered[activeIdx]) {
        e.preventDefault();
        onSelect(filtered[activeIdx].code);
        onClose();
      }
    },
    [filtered, activeIdx, onSelect, onClose],
  );

  if (!open) return null;

  return (
    <div
      className="country-dropdown"
      style={{ top: pos.top, left: pos.left, width: pos.width }}
      onKeyDown={handleKey}
    >
      {/* Search */}
      <div className="country-search-wrap">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
          style={{ opacity: 0.4, flexShrink: 0 }}
        >
          <circle cx="6" cy="6" r="4.5" />
          <line x1="9.5" y1="9.5" x2="13" y2="13" />
        </svg>
        <input
          ref={searchRef}
          type="text"
          value={query}
          onChange={(e) => { setQuery(e.target.value); setActiveIdx(0); }}
          placeholder="Search country…"
          className="country-search-input"
          aria-label="Search countries"
          autoComplete="off"
        />
        {query && (
          <button
            className="country-search-clear"
            onClick={() => { setQuery(''); searchRef.current?.focus(); }}
            aria-label="Clear search"
          >
            ×
          </button>
        )}
      </div>

      {/* List */}
      <ul
        ref={listRef}
        className="country-list"
        role="listbox"
        aria-label="Countries"
      >
        {filtered.length === 0 && (
          <li className="country-empty">No results</li>
        )}
        {filtered.map((c, i) => (
          <li
            key={`${c.iso}-${c.code}`}
            role="option"
            aria-selected={c.code === selected}
            className={cn(
              'country-item',
              i === activeIdx && 'country-item-active',
              c.code === selected && 'country-item-selected',
            )}
            onMouseEnter={() => setActiveIdx(i)}
            onClick={() => { onSelect(c.code); onClose(); }}
          >
            <span className="country-flag" aria-hidden>{flag(c.iso)}</span>
            <span className="country-name">{c.name}</span>
            <span className="country-code">+{c.code}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─── Main component ──────────────────────────────────────────────────────────

export default function ClickToChat() {
  const [prefix, setPrefix] = useState('1');
  const [number, setNumber] = useState('');
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [modKey, setModKey] = useState<string>('Alt+');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownPos, setDropdownPos] = useState<DropdownPos>({ top: 0, left: 0, width: 320 });
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  const numberRef = useRef<HTMLInputElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLElement>(null);

  const cleanNumber = number.replace(/^0+/, '').replace(/[^\d]/g, '');
  const cleanPrefix = prefix.replace(/^\+/, '');
  const fullNumber = cleanPrefix + cleanNumber;
  const isValid = cleanNumber.length > 0 && cleanPrefix.length > 0;
  const maxNumberDigits = Math.max(1, 15 - cleanPrefix.length);

  const waWebUrl = `https://web.whatsapp.com/send?phone=${fullNumber}`;
  const waAppUrl = `https://wa.me/${fullNumber}`;

  // Persist prefix + detect OS modifier key + sync theme from html
  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('ctc_prefix');
    if (saved) setPrefix(saved);
    const isMac = /Mac|iPhone|iPad|iPod/.test(navigator.platform);
    setModKey(isMac ? '⌥' : 'Alt');
    const initial = (document.documentElement.dataset.theme as 'light' | 'dark') || 'dark';
    setTheme(initial);
  }, []);

  // Cleanup theme attr when leaving route
  useEffect(() => {
    return () => {
      delete document.documentElement.dataset.theme;
    };
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((t) => {
      const next = t === 'dark' ? 'light' : 'dark';
      if (next === 'light') {
        document.documentElement.dataset.theme = 'light';
      } else {
        delete document.documentElement.dataset.theme;
      }
      try { localStorage.setItem('ctc_theme', next); } catch {}
      return next;
    });
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem('ctc_prefix', prefix);
    const max = Math.max(1, 15 - prefix.length);
    const digits = number.replace(/[^\d]/g, '');
    if (digits.length > max) setNumber(digits.slice(0, max));
  }, [prefix, mounted]);

  // Close dropdown on outside click
  useEffect(() => {
    if (!dropdownOpen) return;
    const handler = (e: MouseEvent) => {
      if (
        triggerRef.current &&
        !triggerRef.current.contains(e.target as Node) &&
        !(e.target as HTMLElement).closest('.country-dropdown')
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [dropdownOpen]);

  // Copy / share handler
  const handleCopy = useCallback(async () => {
    if (!isValid) return;
    try {
      if (navigator.share) {
        await navigator.share({ url: waAppUrl, title: 'WhatsApp Chat Link' });
      } else {
        await navigator.clipboard.writeText(waAppUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      // User cancelled or clipboard unavailable
    }
  }, [isValid, waAppUrl]);

  // Global keyboard shortcuts
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (!e.altKey || !isValid) return;
      switch (e.code) {
        case 'KeyW':
          e.preventDefault();
          window.open(waWebUrl, '_blank', 'noopener,noreferrer');
          break;
        case 'KeyA':
          e.preventDefault();
          window.open(waAppUrl, '_blank', 'noopener,noreferrer');
          break;
        case 'KeyC':
          e.preventDefault();
          handleCopy();
          break;
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isValid, waWebUrl, waAppUrl, handleCopy]);

  // GSAP entrance
  useGSAP(
    () => {
      const titleEl = document.getElementById('ctc-title');
      if (!titleEl) return;

      const titleSplit = SplitText.create(titleEl, { type: 'lines', mask: 'lines' });

      gsap.set('#ctc-nav', { opacity: 0, y: -20 });
      gsap.set('#ctc-footer', { opacity: 0 });
      gsap.set('#ctc-eyebrow', { opacity: 0, y: 12 });
      gsap.set(
        ['#ctc-divider-1', '#ctc-divider-2', '.input-underline'],
        { scaleX: 0, transformOrigin: 'left' },
      );
      gsap.set(
        ['#ctc-desc', '#ctc-input-label', '#ctc-actions'],
        { opacity: 0, y: 16 },
      );
      gsap.set('#ctc-input-area', { opacity: 0, y: 24 });

      const tl = gsap.timeline({
        defaults: { ease: 'power4.out', duration: 1.2 },
        delay: 0.1,
      });

      tl.to('#ctc-eyebrow', { opacity: 1, y: 0, duration: 0.6 })
        .from(titleSplit.lines, { y: '110%', stagger: 0.07 }, '<0.05')
        .to('#ctc-nav', { opacity: 1, y: 0, duration: 0.8 }, '<0.15')
        .to('#ctc-divider-1', { scaleX: 1, duration: 1, ease: 'expo.inOut' }, '<0.25')
        .to('#ctc-desc', { opacity: 1, y: 0, duration: 0.7 }, '<0.15')
        .to('#ctc-input-label', { opacity: 1, y: 0, duration: 0.6 }, '<0.15')
        .to('#ctc-input-area', { opacity: 1, y: 0, duration: 0.8 }, '<0.1')
        .to('.input-underline', { scaleX: 1, duration: 0.9, ease: 'expo.inOut' }, '<0.2')
        .to('#ctc-divider-2', { scaleX: 1, duration: 0.8, ease: 'expo.inOut' }, '<0.3')
        .to('#ctc-actions', { opacity: 1, y: 0, duration: 0.7 }, '<0.2')
        .to('#ctc-footer', { opacity: 0.7, duration: 0.6 }, '<0.3');
    },
    { scope: containerRef },
  );

  // Number: Enter → open WhatsApp Web; Escape → clear
  const handleNumberKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && isValid) {
        window.open(waWebUrl, '_blank', 'noopener,noreferrer');
      }
      if (e.key === 'Escape') {
        setNumber('');
      }
    },
    [isValid, waWebUrl],
  );

  const openDropdown = useCallback(() => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setDropdownPos({
        top: rect.bottom + 10,
        left: Math.max(8, rect.left),
        width: 320,
      });
    }
    setDropdownOpen((o) => !o);
  }, []);

  const selectCode = useCallback((code: string) => {
    setPrefix(code);
    setTimeout(() => numberRef.current?.focus(), 0);
  }, []);

  return (
    <>
      <main ref={containerRef} className="min-h-svh flex flex-col px-4 sm:px-10">
        {/* Nav */}
        <nav
          id="ctc-nav"
          className="relative flex items-center justify-between py-4 sm:py-6 w-full"
        >
          <Link
            href="/"
            className="dim-chrome hover:opacity-100 transition-opacity duration-200"
            aria-label="Back to portfolio"
          >
            EMREGND
          </Link>

          <span className="hidden sm:block absolute left-1/2 -translate-x-1/2 dim-chrome">
            Open Source
          </span>

          <div className="flex items-center gap-3 sm:gap-4">
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
            <RotatingSalutation />
          </div>
        </nav>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-center gap-4 sm:gap-5 py-6 sm:py-8">
          {/* Eyebrow tag — primary keyword for SEO/GEO */}
          <span id="ctc-eyebrow" className="ctc-eyebrow" aria-hidden="true">
            <span className="ctc-eyebrow-dot" />
            WhatsApp
          </span>

          {/* Title */}
          <div className="overflow-hidden">
            <h1
              id="ctc-title"
              className="h0"
              aria-label="WhatsApp Click To Chat"
            >
              Click
              <br />
              To Chat
            </h1>
          </div>

          <div id="ctc-divider-1" className="ctc-divider" />

          <p id="ctc-desc" className="dim max-w-xs leading-relaxed">
            Start a WhatsApp conversation without
            <br />
            saving the contact.
          </p>

          {/* Phone input */}
          <div className="flex flex-col gap-4 sm:gap-5">
            <label
              id="ctc-input-label"
              htmlFor="phone-number"
              className="dim tracking-widest text-xs"
            >
              Phone Number
            </label>

            <div id="ctc-input-area" className="input-area flex flex-col">
              <div className="flex items-baseline gap-2 sm:gap-4 w-full">
                {/* Country code trigger */}
                <button
                  ref={triggerRef}
                  onClick={openDropdown}
                  className="prefix-trigger"
                  aria-label="Select country code"
                  aria-haspopup="listbox"
                  aria-expanded={dropdownOpen}
                  type="button"
                >
                  <span className="phone-display" aria-hidden style={{ pointerEvents: 'none' }}>
                    +{prefix}
                  </span>
                  <svg
                    className="prefix-chevron"
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                    style={{
                      transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease',
                    }}
                  >
                    <path d="M1 1l4 4 4-4" />
                  </svg>
                </button>

                <span className="phone-display flex-shrink-0" style={{ opacity: 0.2 }} aria-hidden>|</span>

                <input
                  ref={numberRef}
                  id="phone-number"
                  type="text"
                  inputMode="tel"
                  value={number}
                  onChange={(e) => {
                    const raw = e.target.value.replace(/[^\d\s]/g, '');
                    if (raw.replace(/\s/g, '').length > maxNumberDigits) return;
                    setNumber(raw);
                  }}
                  onKeyDown={handleNumberKeyDown}
                  placeholder="000 000 00 00"
                  className="phone-input flex-1 min-w-0"
                  aria-label="Phone number"
                  autoComplete="tel-national"
                />
              </div>

              <div className="input-underline" />
            </div>
          </div>

          <div id="ctc-divider-2" className="ctc-divider" />

          {/* Actions */}
          <div id="ctc-actions" className="flex flex-col sm:flex-row gap-3">
            <ActionButton
              href={waWebUrl}
              disabled={!isValid}
              label="WhatsApp Web"
              shortcut={`${modKey} + ${SHORTCUTS.web}`}
            />
            <ActionButton
              href={waAppUrl}
              disabled={!isValid}
              label="Open App"
              shortcut={`${modKey} + ${SHORTCUTS.app}`}
            />
            <button
              onClick={handleCopy}
              disabled={!isValid}
              className={cn('action-btn', !isValid && 'action-btn-disabled')}
              aria-label={`Copy WhatsApp link — shortcut: ${modKey} + ${SHORTCUTS.copy}`}
            >
              <span className="flex items-center gap-2">
                {copied ? 'Copied ✓' : 'Copy Link'}
                <kbd className="dim text-[0.75em]">({modKey} + {SHORTCUTS.copy})</kbd>
              </span>
              <span aria-hidden>↗</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer
          id="ctc-footer"
          className="flex items-center justify-between w-full py-4 sm:py-6 dim-chrome"
        >
          <span>No account required</span>
          <span className="hidden sm:block">No cookies · No tracking</span>
          <span>© 2026</span>
        </footer>
      </main>

      {/* Dropdown portal — fixed so it never affects layout */}
      <CountryDropdown
        open={dropdownOpen}
        onClose={() => setDropdownOpen(false)}
        onSelect={selectCode}
        selected={prefix}
        pos={dropdownPos}
      />
    </>
  );
}

function ActionButton({
  href,
  disabled,
  label,
  shortcut,
}: {
  href: string;
  disabled: boolean;
  label: string;
  shortcut: string;
}) {
  const inner = (
    <>
      <span className="flex items-center gap-2">
        {label}
        <kbd className="dim text-[0.75em]">({shortcut})</kbd>
      </span>
      <span aria-hidden>↗</span>
    </>
  );

  if (disabled) {
    return (
      <span className="action-btn action-btn-disabled" aria-disabled>
        {inner}
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="action-btn"
      aria-label={`${label} — shortcut: ${shortcut}`}
    >
      {inner}
    </a>
  );
}

function ThemeToggle({
  theme,
  onToggle,
}: {
  theme: 'dark' | 'light';
  onToggle: () => void;
}) {
  const isDark = theme === 'dark';
  return (
    <button
      type="button"
      onClick={onToggle}
      className="theme-toggle"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {isDark ? (
        // Moon
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M13.5 9.5A5.5 5.5 0 1 1 6.5 2.5a4.5 4.5 0 0 0 7 7z" />
        </svg>
      ) : (
        // Sun
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <circle cx="8" cy="8" r="3" />
          <line x1="8" y1="1.5" x2="8" y2="3" />
          <line x1="8" y1="13" x2="8" y2="14.5" />
          <line x1="1.5" y1="8" x2="3" y2="8" />
          <line x1="13" y1="8" x2="14.5" y2="8" />
          <line x1="3.4" y1="3.4" x2="4.5" y2="4.5" />
          <line x1="11.5" y1="11.5" x2="12.6" y2="12.6" />
          <line x1="3.4" y1="12.6" x2="4.5" y2="11.5" />
          <line x1="11.5" y1="4.5" x2="12.6" y2="3.4" />
        </svg>
      )}
    </button>
  );
}
