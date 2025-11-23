import * as React from "react"
import { SVGProps } from "react"
const LinesIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={26}
    fill="none"
    {...props}
  >
    <path
      stroke="#EDE5DB"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3.056}
      d="M2.197 16.014c0-2.292 2.292-6.875 0-13.75m5.73 16.423C11.236 15.504 18.01 7.764 18.62 2.264m-8.403 21.77c2.037 0 7.486-1.069 12.986-5.347"
    />
  </svg>
)
export default LinesIcon
