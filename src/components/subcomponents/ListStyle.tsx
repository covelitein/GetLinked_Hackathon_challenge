/* eslint-disable @typescript-eslint/no-explicit-any */

const ListStyle = ({ className } : any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      className={className}
      viewBox="0 0 17 17"
      fill="none"
    >
      <circle cx="8.5" cy="8.5" r="8.5" fill="#2DE100" />
      <path d="M5 8L7 10.5L13.5 6" stroke="white" stroke-width="2" />
    </svg>
  );
}

export default ListStyle
