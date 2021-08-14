import Member from "./components/Member";
export default function Team() {
  return (
    <main className="team" id="main">
      <section>
        <div className="container">
          <div className="top">
            <h2 className="main-title">CFD Team</h2>
            <p className="top-des">
            Chúng ta không phải một lớp học, những thành viên CFD là một TEAM, cùng học hỏi và hỗ trợ lẫn nhau dưới sự hướng dẫn từ những người đồng sáng lập CFD.
            </p>
          </div>
          <div className="list row">
            <Member
              type="teacher"
              name="Trần Nghĩa"
              img_coach="/img/Tran-Nghia.jpg"
              info="Founder &amp; Creative Front-End Developer"
            />
            <Member
              type="teacher"
              name="Vương Đặng"
              img_coach="/img/vuong-cfd.jpeg"
              info="Founder &amp; Creative Front-End Developer"
            />
            <Member
              type="teacher"
              name="Huy Nguyễn"
              img_coach="/img/huy.jpg"
              info="Founder &amp; Creative Front-End Developer"
            />
            <Member
              type="teacher"
              name="Quân Đặng"
              img_coach="/img/quan-cfd.jpg"
              info="Founder &amp; Creative Front-End Developer"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
