export default function Head({ title }) {
  return (
    <>
      {" "}
      <div className="main-sub-title">ĐĂNG KÝ</div>
      <h1 className="main-title">{title}</h1>
      <div className="main-info">
        <div className="date">
          <strong>Khai giảng:</strong> 15/11/2020
        </div>
        <div className="time">
          <strong>Thời lượng:</strong> 18 buổi
        </div>
        <div className="time">
          <strong>Học phí:</strong> 6.000.000 VND
        </div>
      </div>
    </>
  );
}
