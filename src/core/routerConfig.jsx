/**
 *
 * @param {*} routers
 */

import { Switch, Route } from "react-router-dom";
import PrivateRouter from "./PrivateRouter";

export default function renderRouter(routers, parentPath = "") {
  return (
    <Switch>
      {routers.map((e, index) => {
        let {
          exact,
          path,
          component: Component,
          routers: childRouters,
          auth,
        } = e;
        if (!path) path = "";
        path = parentPath + "/" + path;
        path = path.replace(/\/+/g, "/");
        let children = null;
        if (childRouters) {
          children = renderRouter(childRouters);
        }
        if (auth) {
          <PrivateRouter
            key={index}
            exact={exact}
            path={path}
            component={(...prop) => <Component {...prop}>{children}</Component>}
          ></PrivateRouter>;
        }
        return (
          <Route
            key={index}
            exact={exact}
            path={path}
            component={(...prop) => <Component {...prop}>{children}</Component>}
          ></Route>
        );
      })}
    </Switch>
  );
}
