import ReactDOM from "react-dom";
export default function PopUpVideo() {
  return ReactDOM.createPortal(
    <div className="popup-video" style={{ display: "none" }}>
      <div className="wrap">
        <div className="video-src" />
      </div>
      <div className="close" />
    </div>,
    document.getElementById("root2")
  );
}
