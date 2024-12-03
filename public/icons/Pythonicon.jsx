import React from 'react';

export default function PythonIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 120 120" // 修正后的 viewBox
      aria-hidden="true"
      {...props}
    >
      <title>Python Icon</title>
      
      {/* 使用 <g> 元素包裹所有内容，并应用缩放和平移 */}
      <g transform="scale(1.1) translate(0,0,0,0)"> {/* 缩放为40%，并平移以居中 */}
        
        <linearGradient
          id="deviconPython0"
          x1="70.252"
          x2="170.659"
          y1="1237.476"
          y2="1151.089"
          gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#5a9fd4" />
          <stop offset="1" stopColor="#306998" />
        </linearGradient>
        
        <linearGradient
          id="deviconPython1"
          x1="209.474"
          x2="173.62"
          y1="1098.811"
          y2="1149.537"
          gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#ffd43b" />
          <stop offset="1" stopColor="#ffe873" />
        </linearGradient>
        
        <path
          fill="url(#deviconPython0)"
          d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007c-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521c-2.268 9.405-2.368 15.275 0 25.096c1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837c-4.244-.706-8.645-1.027-12.866-1.008M50.037 9.557c2.55 0 4.634 2.117 4.634 4.721c0 2.593-2.083 4.69-4.634 4.69c-2.56 0-4.633-2.097-4.633-4.69c-.001-2.604 2.073-4.721 4.633-4.721"
          transform="translate(0 10.26)"
        />
        
        <path
          fill="url(#deviconPython1)"
          d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547c7.816 2.297 15.312 2.713 24.665 0c6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519c2.578-7.735 2.467-15.174 0-25.096c-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692c0 2.602-2.074 4.719-4.634 4.719c-2.55 0-4.633-2.117-4.633-4.719c0-2.595 2.083-4.692 4.633-4.692"
          transform="translate(0 10.26)"
        />
        
        <radialGradient
          id="deviconPython2"
          cx="1825.678"
          cy="444.45"
          r="26.743"
          gradientTransform="matrix(0 -.24 -1.055 0 532.979 557.576)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#b8b8b8" stopOpacity="0.498" />
          <stop offset="1" stopColor="#7f7f7f" stopOpacity="0" />
        </radialGradient>
        
        <path
          fill="url(#deviconPython2)"
          d="M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416c-18.276 0-33.092-2.873-33.092-6.416s14.815-6.417 33.092-6.417c18.275 0 33.091 2.872 33.091 6.417"
          opacity="0.444"
        />
      </g>
    </svg>
  );
}
