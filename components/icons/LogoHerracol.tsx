import * as React from 'react'

const LogoHerracol = ({ ...props }) => {
  return (
    <svg width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" { ...props }>
      <rect x="3" y="24.5" width="31.8198" height="31.8198" transform="rotate(-45 3 24.5)" fill="#100952"/>
      <rect x="4.27301" y="24.5" width="30.0197" height="30.0197" transform="rotate(-45 4.27301 24.5)" fill="#E8DC00"/>
      <g filter="url(#filter0_d_59_388)">
        <path d="M26.7823 38.4117V27.8421L24.1332 27.8188V38.2253H13.7966V31.5927H15.7002V17.1793H13.7966V14.3738L17.474 10.6964H24.1332V21.266L26.7823 21.2926V10.8861H37.119V17.5154H35.2154V31.9321H37.119V34.7376L33.4449 38.4117H26.7823Z" fill="url(#paint0_linear_59_388)"/>
        <path d="M23.6333 11.1975V21.7638L27.294 21.7971V11.3938H36.6323V17.0181H34.7287V32.4299H36.6323V34.5332L33.2511 37.9144H27.294V27.3681L23.6333 27.3315V37.7447H14.295V32.0938H16.1986V16.682H14.295V14.582L17.6796 11.1975H23.6333ZM24.6317 10.1991H17.2636L16.974 10.492L13.5895 13.8765L13.2966 14.166V17.6804H15.2002V31.0954H13.2966V38.7264H24.6317V28.3232H26.2957V38.8961H33.6638L33.9566 38.6066L37.6307 34.9292V31.4315H35.7271V18.0165H37.6307V10.3954H26.2823V20.7887H24.6184V10.1991H24.6317Z" fill="#100953"/>
      </g>
      <path fillRule="evenodd" clipRule="evenodd" d="M13.4874 13.9173L17.0149 10.3898V11.4122L14.473 13.9173H13.4874Z" fill="white"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M38.2519 34.5817L33.3544 39.4483L33.3543 37.938L36.6328 34.5817L38.2519 34.5817Z" fill="white"/>
      <defs>
      <filter id="filter0_d_59_388" x="7.20967" y="7.76431" width="34.0732" height="38.4362" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="-1.21739" dy="2.43478"/>
        <feGaussianBlur stdDeviation="2.43478"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_59_388"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_59_388" result="shape"/>
      </filter>
      <linearGradient id="paint0_linear_59_388" x1="25.4637" y1="10.1991" x2="25.4637" y2="38.8961" gradientUnits="userSpaceOnUse">
        <stop stopColor="#100952"/>
        <stop offset="0.213542" stopColor="#5A5685"/>
        <stop offset="0.5" stopColor="#E1E1E1"/>
        <stop offset="0.828125" stopColor="#5A5685"/>
        <stop offset="1" stopColor="#100952"/>
        <stop offset="1" stopColor="#100952"/>
      </linearGradient>
      </defs>
    </svg>
  )
}

export default LogoHerracol