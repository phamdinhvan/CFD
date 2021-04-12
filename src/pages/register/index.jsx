import Head from "./components/Head";
import Register from "./components/Register";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function RegisterPage() {
  let { slug } = useParams();
  const [state, setState] = useState("");
  useEffect(() => {
    fetch(`http://cfd-reactjs.herokuapp.com/elearning/v4/course/${slug}`)
      .then((res) => res.json())
      .then((res) => {
        setState({
          ...res.data,
        });
      });
  }, []);

  return (
    <main className="register-course" id="main">
      <section>
        <div className="container">
          <div className="wrap container">
            <Head title={state.title} />
            <Register />
          </div>
        </div>
      </section>
      {/* <div class="register-success">
              <div class="contain">
                  <div class="main-title">đăng ký thành công</div>
                  <p>
                      <strong>Chào mừng Trần Nghĩa đã trở thành thành viên mới của CFD Team.</strong> <br>
                      Cảm ơn bạn đã đăng ký khóa học tại <strong>CFD</strong>, chúng tôi sẽ chủ động liên lạc với bạn thông qua facebook
                      hoặc số điện thoại của bạn.
                  </p>
              </div>
              <a href="/" class="btn main rect">về trang chủ</a>
          </div> */}
    </main>
  );
}
