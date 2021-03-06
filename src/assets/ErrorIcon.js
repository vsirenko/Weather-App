import React from "react";

function ErrorIcon() {
  return (
    <svg
    className='error-icon'
      xmlns="http://www.w3.org/2000/svg"
    
      viewBox="0 0 24 24"
    >
      <g  fillRule="evenodd" stroke="none" strokeWidth="1">
        <g >
          <path d="M12 2c5.523 0 10 4.478 10 10s-4.477 10-10 10S2 17.522 2 12 6.477 2 12 2zm0 1.667c-4.595 0-8.333 3.738-8.333 8.333 0 4.595 3.738 8.333 8.333 8.333 4.595 0 8.333-3.738 8.333-8.333 0-4.595-3.738-8.333-8.333-8.333zm-.001 10.835a.999.999 0 110 1.998.999.999 0 010-1.998zM11.994 7a.75.75 0 01.744.648l.007.101.004 4.502a.75.75 0 01-1.493.103l-.007-.102-.004-4.501a.75.75 0 01.75-.751z"></path>
        </g>
      </g>
    </svg>
  );
}

export default ErrorIcon;