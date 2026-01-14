import { SVGProps } from "react";

const ArrowRightIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      {/* Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE */}
      <path fill="currentColor" d="M6.4 18L5 16.6L14.6 7H6V5h12v12h-2V8.4z" />
    </svg>
  );
};

export default ArrowRightIcon;
