import Info from "./Info";
import YourCourse from "./YourCourse";
import Course from "./Course";
import PaymentHistory from "./PaymentHistory";
import CoinManagement from "./CoinManagement";
import { Switch, Route, useRouteMatch } from "react-router-dom";

export default function TabContent({ children }) {
  const { url } = useRouteMatch();

  return (
    <div className="tab-content">
      <Switch>
        <Route path={`${url}/your-course`} component={YourCourse} />
        <Route path={`${url}/project`} component={Course} />
        <Route path={`${url}/history-payment`} component={PaymentHistory} />
        <Route path={`${url}/coin-management`} component={CoinManagement} />
        <Route path={`${url}/`} component={Info} />
      </Switch>
      {/* {children} */}
    </div>
  );
}
