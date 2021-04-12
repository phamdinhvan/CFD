import Member from "./components/Member";
export default function Team() {
  return (
    <main className="team" id="main">
      <section>
        <div className="container">
          <div className="top">
            <h2 className="main-title">cfd team</h2>
            <p className="top-des">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. aliquam
              tincidunt elementum sem non luctus
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
            <Member
              type="member"
              name="Huỳnh Anh Kiệt"
              img_coach="/img/Tran-Nghia.jpg"
              info="Founder &amp; Creative Front-End Developer"
            />
            <Member
              type="member"
              name="Trần Tùng"
              img_coach="/img/Tran-Nghia.jpg"
              info="Founder &amp; Creative Front-End Developer"
            />
            <Member
              type="member"
              name="Việt Quang"
              img_coach="/img/Tran-Nghia.jpg"
              info="Founder &amp; Creative Front-End Developer"
            />
            <Member
              type="member"
              name="Trần Nghĩa"
              img_coach="/img/Tran-Nghia.jpg"
              info="Founder &amp; Creative Front-End Developer"
            />
            <Member
              type="member"
              name="Nguyễn Văn Thái An"
              img_coach="/img/Tran-Nghia.jpg"
              info="Founder &amp; Creative Front-End Developer"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
