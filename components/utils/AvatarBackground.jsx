import * as React from "react"
const AvatarBackground = (props) => (
  <svg aria-hidden="true" className="size-full" {...props}>
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
        <path fill="none" stroke="currentColor" d="M0 128V.5h128" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#a)" />
  </svg>
)
export default AvatarBackground
