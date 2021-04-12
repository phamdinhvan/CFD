import { useSelector } from "react-redux";

export default function TopInfo() {
  const { dataUser } = useSelector((state) => state.user);

  return (
    <div className="top-info">
      <div className="avatar">
        {/* <span class="text">H</span> */}
        <img src={dataUser.avatar || "/img/logo192.png"} alt="" />
        <div className="camera" />
      </div>
      <div className="name">{dataUser.name}</div>
      <p className="des">Thành viên của team CFD1-OFFLINE</p>
    </div>
  );
}
