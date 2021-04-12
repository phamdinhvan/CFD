import "../assets/css/custom.css";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { showLogin, makeLogout } from "../redux/action/user";
import { useDispatch } from "react-redux";

export default function Header() {
  const dispatch = useDispatch();
  const { dataUser, login } = useSelector((state) => state.user);

  function openMenu() {
    document.body.classList.toggle("menu-is-show");
  }
  function closeMenu() {
    document.body.classList.remove("menu-is-show");
  }

  return (
    <>
      <header id="header">
        <div className="wrap">
          <div className="menu-hambeger" onClick={openMenu}>
            <div className="button">
              <span />
              <span />
              <span />
            </div>
            <span className="text">menu</span>
          </div>
          <Link to="/" className="logo">
            <img src="/img/logo.svg" alt="" />
            <h1>CFD</h1>
          </Link>
          <div className="right">
            {login ? (
              <div className="have-login">
                <div className="account">
                  <a href="#" className="info">
                    <div className="name">{dataUser.name}</div>
                    <div className="avatar">
                      <img
                        src={dataUser?.avatar || "/img/logo192.png"}
                        alt=""
                      />
                    </div>
                  </a>
                </div>
                <div className="hamberger"></div>
                <div className="sub">
                  <NavLink to="/courses">Khóa học của tôi</NavLink>
                  <NavLink to="/profile">Thông tin tài khoản</NavLink>
                  <NavLink onClick={() => dispatch(makeLogout())} to="/">
                    Đăng xuất
                  </NavLink>
                </div>
              </div>
            ) : (
              <div className="not-login bg-none">
                <NavLink
                  to="/profile"
                  onClick={() => dispatch(showLogin(true))}
                  className="btn-register"
                >
                  Đăng nhập
                </NavLink>
                <NavLink
                  onClick={() => dispatch(showLogin(true))}
                  to="/profile"
                  className="btn main btn-open-login"
                >
                  Đăng ký
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </header>
      <nav className="nav">
        <ul>
          <li>
            <NavLink exact onClick={closeMenu} to="/">
              Trang chủ
            </NavLink>
          </li>
          <li>
            <NavLink onClick={closeMenu} to="/team">
              CFD Team
            </NavLink>
          </li>
          <li>
            <NavLink onClick={closeMenu} to="/courses">
              Khóa Học
            </NavLink>
          </li>
          <li>
            <NavLink onClick={closeMenu} to="/project">
              Dự Án
            </NavLink>
          </li>
          <li>
            <NavLink onClick={closeMenu} to="/contact">
              Liên hệ
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="overlay_nav" onClick={closeMenu} />
    </>
  );
}
