import { NavLink, useRouteMatch } from "react-router-dom";

export default function TabTitle() {
  const { url } = useRouteMatch();

  return (
    <div className="tab-title">
      <NavLink exact to={`${url}`}>
        Thông tin tài khoản
      </NavLink>
      <NavLink to={`${url}/your-course`}>Khóa học của bạn</NavLink>
      <NavLink to={`${url}/project`}>Dự án đã làm</NavLink>
      <NavLink to={`${url}/history-payment`}>Lịch sử thanh toán</NavLink>
      <NavLink to={`${url}/coin-management`}>Quản lý COIN của tôi</NavLink>
    </div>
  );
}
