import { useState } from "react";
export default function MessageForm({ message, handleClose }) {
  const [visible, setVisible] = useState(true);
  handleClose = () => {
    setVisible(!visible);
  };
  return (
    <>
      {visible ? (
        <>
          <div className="message show">
            <p>{message}</p>
            <button className="btn" onClick={handleClose}>
              oke
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="message hide">
            <p>{message}</p>
            <button className="btn" onClick={handleClose}>
              oke
            </button>
          </div>
        </>
      )}
    </>
  );
}
