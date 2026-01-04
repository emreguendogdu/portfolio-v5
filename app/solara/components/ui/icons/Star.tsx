import { type SVGProps } from "react";

function Star(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20.0982 17.6987L22.6532 25.5644L14.0047 19.2784L20.0982 17.6987ZM28 9.11213H17.3075L14.0058 -1.06238L10.6925 9.11445L0 9.10045L8.659 15.397L5.34572 25.5632L14.0047 19.2784L19.3515 15.397L28 9.11213Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default Star;
