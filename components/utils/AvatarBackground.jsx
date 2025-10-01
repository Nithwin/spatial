import * as React from 'react';


const AvatarBackground = (({ className, ...props }, ref) => (
  <svg
    ref={ref}
    aria-hidden="true"
    className={`size-full ${className || ''}`}
    {...props}
  >
    <title>Geometric Background Pattern</title>
    <defs>
      <pattern
        id="a"
        width={56}
        height={65}
        x="100%"
        y="100%"
        patternTransform="translate(112 72)"
        patternUnits="userSpaceOnUse"
      >
        <path
          stroke="currentColor"
          fill="none"
          d="M0 128V.5h128"
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#a)" />
  </svg>
));

AvatarBackground.displayName = 'AvatarBackground';

export default AvatarBackground;