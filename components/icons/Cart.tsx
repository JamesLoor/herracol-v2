import * as React from 'react'

const Cart = ({ ...props }) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      { ...props }
    >
      <path
        d="M5 8.4L8.3 4H21.5L24.8 8.4M5 8.4V23.8C5 24.3834 5.23178 24.943 5.64437 25.3556C6.05695 25.7682 6.61653 26 7.2 26H22.6C23.1834 26 23.743 25.7682 24.1556 25.3556C24.5682 24.943 24.8 24.3834 24.8 23.8V8.4M5 8.4H24.8M19.3 12.8C19.3 13.967 18.8365 15.0861 18.0112 15.9112C17.1861 16.7365 16.067 17.2 14.9 17.2C13.733 17.2 12.6139 16.7365 11.7887 15.9112C10.9636 15.0861 10.5 13.967 10.5 12.8"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Cart