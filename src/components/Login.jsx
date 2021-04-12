import ReactDOM from "react-dom";
import "../assets/css/custom.css";
import useFormValidate from "../core/ReactHook/useFormValidate";
import { useSelector } from "react-redux";
import { showLogin, fetchLogin, setLoading } from "../redux/action/user";
import { useDispatch } from "react-redux";
import Loading from "./Loading";
export default function Login() {
  const { loginErr, popupLogin, loading } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const { form, inputChange, error, setForm, onSubmit } = useFormValidate(
    {
      username: "",
      password: "",
      checked: false,
    },
    {
      rule: {
        username: {
          required: true,
          pattern: "username",
        },
        password: {
          required: true,
          // pattern: "password",
        },
      },
      message: {
        username: {
          required: "please fill your username",
        },
        password: {
          // pattern:
          //   "Use 8 or more characters and combine letters, numbers, and symbols",
        },
      },
      option: {
        localStorage: "register-info",
      },
      checkPass: false,
    }
  );

  async function handleSubmit(e) {
    e.preventDefault();
    let err = onSubmit();
    if (Object.keys(err).length === 0) {
      dispatch(setLoading(true));
      dispatch(fetchLogin(form));
    }
  }

  if (loading) return <Loading />;
  return ReactDOM.createPortal(
    <>
      <div
        className="popup-form popup-login"
        style={{ display: popupLogin ? "flex" : "none" }}
      >
        <div className="wrap">
          {/* login-form */}
          <div className="ct_login" style={{ display: "block" }}>
            <h2 className="title">Đăng nhập</h2>
            {loginErr ? <h2 style={{ color: "red" }}>{loginErr}</h2> : ""}
            <>
              <input
                name="username"
                className={error?.name ? "login-error" : ""}
                value={form.username}
                onChange={inputChange}
                type="text"
                placeholder="username / Số điện thoại"
              />
              <p style={{ marginBottom: 15, color: "#e55d5d" }}>
                {error?.username}
              </p>
            </>
            <>
              <input
                name="password"
                className={error?.password ? "login-error" : ""}
                value={form.password}
                onChange={inputChange}
                type="password"
                placeholder="Mật khẩu"
              />
              <p style={{ marginBottom: 15, color: "#e55d5d" }}>
                {error?.password}
              </p>
            </>
            <div className="remember">
              <label className="btn-remember">
                <div>
                  <input
                    name="checked"
                    value={form.checked}
                    onChange={(e) =>
                      setForm({ ...form, checked: e.target.checked })
                    }
                    type="checkbox"
                  />
                </div>
                <p>Nhớ mật khẩu</p>
              </label>
              <a href="#" className="forget">
                Quên mật khẩu?
              </a>
            </div>
            <div className="btn rect main btn-login" onClick={handleSubmit}>
              đăng nhập
            </div>
            <div className="text-register" style={{}}>
              <strong>hoặc đăng ký bằng</strong>
            </div>
            <div>
              <div className="btn btn-icon rect white btn-google">
                <img src="img/google.svg" alt="" />
                Google
              </div>
            </div>
            <div className="close" onClick={() => dispatch(showLogin(false))}>
              <img src="/img/close-icon.png" alt="" />
            </div>
          </div>
          {/* username form */}
          <div className="ct_username">
            <h2 className="title">Đặt lại mật khẩu</h2>
            <input type="text" placeholder="username" />
            <div className="btn rect main btn-next">Tiếp theo</div>
            <div className="back" />
            {/* <div className="/close" onClick={hideLogin}>
              <img src="img/close-icon.png" alt="" />
            </div> */}
          </div>
        </div>
      </div>
      {/* <div className="popup-form popup-login" style={{ display: "none" }}>
        <div className="wrap">
          <h2 className="title">Đăng ký</h2>
          <div className="btn btn-icon rect white btn-google">
            <img src="img/google.svg" alt="" />
            Google
          </div>
          <p className="policy">
            Bằng việc đăng kí, bạn đã đồng ý <a href="#">Điều khoản bảo mật</a>{" "}
            của CFD
          </p>
          <div className="close">
            <img src="img/close-icon.png" alt="" />
          </div>
        </div>
      </div> */}
    </>,
    document.getElementById("root2")
  );
}
