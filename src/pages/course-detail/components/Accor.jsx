import { useEffect, useRef } from "react";
import $ from "jquery";

export default function Accor({ content, title, index, active, handleClick }) {
  const ref = useRef();
  useEffect(() => {
    if (active) {
      $(ref.current).slideDown(200);
    } else {
      $(ref.current).slideUp(200);
    }
  }, [active]);
  return (
    <div className={`accordion ${active ? "active" : ""} `}>
      <div className="accordion__title" onClick={handleClick}>
        <div className="date">Ngày {index}</div>
        <h3>{title}</h3>
      </div>
      <div className="content" ref={ref}>
        {content}
      </div>
    </div>
  );
}
