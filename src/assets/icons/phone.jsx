export default function Phone() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="800"
      height="800"
      fill="none"
      viewBox="0 -1 34 34"
    >
      <path
        fill="url(#a)"
        d="M1.027 7.273c-.179 3.116.388 6.215 1.646 9.296 1.257 3.081 3.094 5.83 5.51 8.246 2.416 2.416 5.164 4.252 8.245 5.51 3.081 1.257 6.18 1.807 9.297 1.648l-.112-7.038c-4.706 0-8.722-1.663-12.05-4.99-3.327-3.328-4.99-7.345-4.99-12.05l-7.546-.622Z"
      />
      <path
        fill="url(#b)"
        d="M25.73 32a7.273 7.273 0 1 0 0-14.546 7.273 7.273 0 0 0 0 14.546Z"
      />
      <path
        fill="url(#c)"
        d="M8.275 14.546A7.273 7.273 0 1 0 8.275 0a7.273 7.273 0 0 0 0 14.546Z"
      />
      <defs>
        <radialGradient
          id="b"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(78.477 -.913 24.635) scale(11.6255)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#00EE7A" />
          <stop offset="1" stop-color="#00C853" />
        </radialGradient>
        <radialGradient
          id="c"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="rotate(78.477 1.045 5.221) scale(11.6255)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#00EE7A" />
          <stop offset="1" stop-color="#00C853" />
        </radialGradient>
        <linearGradient
          id="a"
          x1="13.36"
          x2="13.36"
          y1="7.273"
          y2="32"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#00EE7A" />
          <stop offset="1" stop-color="#00C853" />
        </linearGradient>
      </defs>
    </svg>
  );
}
