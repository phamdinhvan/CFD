import { Link } from "react-router-dom";

export default function Course({
  title,
  short_description,
  course_status,
  thumbnail,
  teacher,
  id,
  slug,
}) {
  return (
    <>
      <div className="col-md-4 course">
        <div className="wrap">
          <Link className="cover" to={`/course/${slug}`}>
            <img src={thumbnail?.link} alt="" />
            {course_status === "sap-khai-gian" ? (
              <span className="badge b1">Sắp khai giảng</span>
            ) : course_status === "da_ket_thuc" ? (
              <span className="badge b2">Đã kết thúc</span>
            ) : (
              <span className="badge b3">Đang diễn ra</span>
            )}
            <div className="hover">
              <div className="top">
                <div className="user">
                  <img src="/img/icon-user-white.svg" alt="" />
                  {id}
                </div>
                <div className="heart">
                  <img src="/img/icon-heart.svg" alt="" /> 100
                </div>
              </div>
              <div className="share">
                <img src="/img/icon-viewmore.svg" alt="" />
              </div>
            </div>
          </Link>
          <div className="info" to={`/course/${slug}`}>
            <Link className="name" href="#">
              {title}
            </Link>
            <p className="des">{short_description}</p>
          </div>
          <div className="bottom">
            <div className="teacher">
              <div className="avatar">
                <img src={teacher?.avatar?.link} alt="" />
              </div>
              <div className="name">{teacher?.title}</div>
            </div>
            <Link className="register-btn" to={`/register/${slug}`}>
              Đăng Ký
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
