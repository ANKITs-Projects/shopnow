import React from 'react'

const Logo = ({w,h}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={w} height={h} viewBox="0 0 300 100">
  <g>
    
    <rect x="10" y="30" width="50" height="50" rx="8" ry="8" fill="#E53935"/>
    <circle cx="20" cy="30" r="5" fill="white"/>
    <circle cx="50" cy="30" r="5" fill="white"/>
    <path d="M20,30 Q30,10 50,30" stroke="#E53935" stroke-width="5" fill="none"/>

    
    <text x="80" y="50" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="#000000">SHOP</text>
    <text x="80" y="80" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="#000000">NOW</text>
  </g>
</svg>
  )
}

export default Logo