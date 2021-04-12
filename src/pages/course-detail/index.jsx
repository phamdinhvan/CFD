import Banner from "./components/Banner";
import Accor from "./components/Accor";
import Request from "./components/Request";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Course from "../../components/Course";
import Loading from "../../components/Loading";

export default function CourseDetail() {
  const { slug } = useParams();
  const [state, setState] = useState({
    course: null,
    currentIndex: -1,
    courseRelated: null,
  });

  useEffect(() => {
    Promise.all([
      fetch(
        `http://cfd-reactjs.herokuapp.com/elearning/v4/course/${slug}`
      ).then((res) => res.json()),
      fetch(
        `http://cfd-reactjs.herokuapp.com/elearning/v4/course-related/${slug}`
      ).then((res1) => res1.json()),
    ]).then(([res, res1]) =>
      setState({
        ...state,
        course: res.data,
        courseRelated: res1.data,
      })
    );
  }, [slug]);
  if (!state.course) return <Loading />;
  function handleClick(i) {
    setState({
      ...state,
      currentIndex: i === state.currentIndex ? -1 : i,
    });
  }

  return (
    <main className="course-detail" id="main">
      <Banner {...state.course} />
      <section className="section-2">
        <div className="container">
          <p className="des">{state.course?.long_description}</p>
          <h2 className="title">giới thiệu về khóa học</h2>
          <div className="cover">
            <img src={state.course?.thumbnail?.link} alt="" />
          </div>
          <h3 className="title">nội dung khóa học</h3>
          {state.course.content.map((e, i) => (
            <Accor
              content={e.content}
              title={e.title}
              handleClick={handleClick.bind(null, i)}
              active={state.currentIndex === i}
              key={i}
              index={i + 1}
            />
          ))}

          <Request {...state.course} />
          <h3 className="title">Người dạy</h3>
          <div className="teaches">
            <div className="teacher">
              <div className="avatar">
                <img src={state.course.teacher.avatar.link} alt="" />
              </div>
              <div className="info">
                <div className="name">{state.course.teacher.title}</div>
                <div className="title">{state.course.teacher.position}</div>
                <p className="intro">{state.course.teacher.description}</p>
                <p>
                  <strong>Website:</strong>{" "}
                  <a href="#">{state.course.teacher.website}</a>
                </p>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="user">
              <img src="img/user-group-icon.png" alt="" /> {state.course.order}{" "}
              bạn đã đăng ký
            </div>
            <div className="btn main btn-register round">đăng ký</div>
            <div className="btn-share btn overlay round btn-icon">
              <img src="/img/facebook.svg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="section-3">
        <div className="container">
          <div className="textbox">
            <h3 className="sub-title">DỰ ÁN</h3>
            <h2 className="main-title">THÀNH VIÊN</h2>
          </div>
          <div className="list row">
            {state.courseRelated.map((e, i) => (
              <Course {...e} key={i} />
            ))}
          </div>
        </div>
      </section>
      <section className="section-4">
        <div className="container">
          <div className="textbox">
            <h3 className="sub-title">Khóa học</h3>
            <h2 className="main-title">Liên quan</h2>
          </div>
          <div className="list row">
            {state.courseRelated.map((e, i) => (
              <Course {...e} key={i} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
