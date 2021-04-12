import { numberWithCommas } from "../../../utils/format";
export default function Banner({ title, money, count_video, opening_time }) {
  return (
    <section className="banner style2" style={{ background: "#d0f9ff" }}>
      <div className="container">
        <div className="info">
          <h1>{title}</h1>
          <div className="row">
            <div className="date">
              <strong>Khai giảng:</strong> {opening_time}
            </div>
            <div className="time">
              <strong>Thời lượng:</strong> {count_video}
            </div>
          </div>
          <div className="btn white round" style={{ background: "#70b6f1" }}>
            đăng ký
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="container">
          <div className="video">
            <div className="icon">
              <img src="/img/play-icon-white.png" alt="" />
            </div>{" "}
            <span>giới thiệu</span>
          </div>
          <div className="money">{numberWithCommas(money)}VND</div>
        </div>
      </div>
    </section>
  );
}
