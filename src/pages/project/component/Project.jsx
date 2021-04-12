export default function Project({ name, makeby, img_background }) {
  return (
    <a href="#" className="item col-md-6">
      <div className="wrap">
        <div className="cover">
          <img src={img_background} alt="" />
        </div>
        <div className="info">
          <div className="name">{name}</div>
          <div className="makeby">{makeby}</div>
        </div>
      </div>
    </a>
  );
}
