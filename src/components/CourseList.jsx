import Course from "./Course";
export default function CourseList({ online, offline }) {
  return (
    <>
      <section className="section-courseoffline">
        <div className="container">
        <h2 className="main-title">Chào mừng bạn đến với CFD</h2>
          <p className="top-des">
          Nơi có những khóa học thực chiến Front-End Dev và UX/UI Design, kết nối và chia sẻ kinh nghiệm giúp bạn có đầy đủ kỹ năng thực tế để tạo ra những sản phẩm sáng tạo, tinh tế và phù hợp.
          </p>
          <div className="textbox">
            <h2 className="main-title">Khoá Học online</h2>
          </div>
          <div className="list row">
            {online?.map((e) => (
              <Course key={e._id} {...e} />
            ))}
          </div>
        </div>
      </section>
      <section className="section-courseonline">
        <div className="container">
          <div className="textbox">
            <h2 className="main-title">Khoá Học offline</h2>
          </div>
          <div className="list row">
            {offline?.map((e) => (
              <Course key={e._id} {...e} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
