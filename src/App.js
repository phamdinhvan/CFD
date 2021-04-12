import "./App.css";

import routers from "./router";
import renderRouter from "./core/routerConfig";
import AppProvider from "./core/GlobalState";

import reducers from "./redux/reducers";
import mySaga from "./redux/saga";

function App() {
  return (
    <AppProvider appSaga={mySaga} reducers={reducers}>
      {renderRouter(routers)}
    </AppProvider>
  );
}
export default App;
