import Head from "./component/Head";
import Project from "./component/Project";

export default function ProjectPage() {
  return (
    <main className="projectpage" id="main">
      <section className="section-1">
        <div className="container">
          <Head
            title="Dự Án"
            des="Lorem ipsum dolor sit amet consectetur adipiscing elit. aliquam
        tincidunt elementum sem non luctus"
          />
          <div className="list row">
            <Project
              name="Kymco"
              makeby="Hoàn thành bởi Huỳnh Anh Kiệt"
              img_background="/img/project/project (2).jpg"
            />
            <Project
              name="Wooder"
              makeby="Hoàn thành bởi Nguyễn Thị Tủm"
              img_background="/img/project/project (3).jpg"
            />
            <Project
              name="Bbox"
              makeby="Hoàn thành bởi Trần Tuấn Anh"
              img_background="/img/project/project (4).jpg"
            />
            <Project
              name="Furniture"
              makeby="Hoàn thành bởi Lâm Chấn Khang"
              img_background="/img/project/project (6).jpg"
            />
            <Project
              name="Kymco"
              makeby="Hoàn thành bởi Ưng Hoàng Phúc"
              img_background="/img/project/project (3).jpg"
            />
            <Project
              name="BOHO"
              makeby="Hoàn thành bởi Hoài Lâm"
              img_background="/img/project/project (2).jpg"
            />
          </div>
          <div className="bottom">
            <div className="btn overlay round btn-more">tải thêm</div>
          </div>
        </div>
      </section>
    </main>
  );
}
