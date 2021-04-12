export default function Member({ img_coach, name, info, type, img_member }) {
  return (
    <>
      {type === "teacher" ? (
        <div className="item col-md-6 col-sm-6">
          <div className="wrap">
            <div className="cover">
              <img src={img_coach} alt="" />
            </div>
            <div className="info">
              <div className="name">{name}</div>
              <p className="title">{info}</p>
            </div>
          </div>
        </div>
      ) : type === "member" ? (
        <div className="item col-md-3 col-sm-4 col-xs-6">
          <div className="wrap">
            <div className="cover">
              <span className="text"></span>
              <img src={img_member} alt="" />
            </div>
            <div className="info">
              <div className="name">{name}</div>
              <p className="title">{info}</p>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
