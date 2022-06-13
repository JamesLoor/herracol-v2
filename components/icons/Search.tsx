const Search = ({ ...props }) => {
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
        d="M24 24L17.25 17.25M12.75 6C13.6364 6 14.5142 6.17459 15.3331 6.51381C16.1521 6.85303 16.8962 7.35023 17.523 7.97703C18.1498 8.60382 18.647 9.34794 18.9862 10.1669C19.3254 10.9858 19.5 11.8636 19.5 12.75C19.5 13.6364 19.3254 14.5142 18.9862 15.3331C18.647 16.1521 18.1498 16.8962 17.523 17.523C16.8962 18.1498 16.1521 18.647 15.3331 18.9862C14.5142 19.3254 13.6364 19.5 12.75 19.5C11.8636 19.5 10.9858 19.3254 10.1669 18.9862C9.34794 18.647 8.60383 18.1498 7.97703 17.523C7.35023 16.8962 6.85303 16.1521 6.51381 15.3331C6.17459 14.5142 6 13.6364 6 12.75C6 11.8636 6.17459 10.9858 6.51381 10.1669C6.85303 9.34794 7.35023 8.60382 7.97703 7.97703C8.60383 7.35023 9.34794 6.85303 10.1669 6.51381C10.9858 6.17459 11.8636 6 12.75 6V6Z"
        stroke="black"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
    </svg>
  )
}

export default Search