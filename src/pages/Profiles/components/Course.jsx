export default function Course() {
  return (
    <>
      <div className="tab3">
        <div className="row">
          <CourseItem
            img_course="/img/img7.png"
            name="Furniture"
            des="Dự án này hoàn thành trong khoá CFD1 Online của CFD Team "
            img_coach="/img/nghia-small.png"
            name_coach="Nghĩa Trần"
            slug="Website"
          />
          <CourseItem
            img_course="/img/img8.png"
            name="Gbox"
            des="Dự án này hoàn thành trong khoá CFD2 Online của CFD Team "
            img_coach="/img/vuong-small.jpg"
            name_coach="Vương Đặng"
            slug="Website"
          />
        </div>
        <div className="btn-wrap">
          <div className="btn overlay btn-icon round">
            <img src="img/icon-upload.svg" alt="" /> Tải lên
          </div>
        </div>
      </div>
    </>
  );
}
function CourseItem({ img_course, name, des, img_coach, name_coach, slug }) {
  return (
    <div className="col-md-6 course">
      <div className="wrap">
        <a href="#" className="cover">
          <img src={img_course} alt="" />
        </a>
        <div className="info">
          <a href="#" className="name">
            {name}
          </a>
          <p className="des">{des}</p>
        </div>
        <div className="bottom">
          <div className="teacher">
            <div className="avatar">
              <img src={img_coach} alt="" />
            </div>
            <div className="name">{name_coach}</div>
          </div>
          <div className="register-btn">{slug}</div>
        </div>
      </div>
    </div>
  );
}
