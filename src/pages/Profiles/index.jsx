import TopInfo from "./components/TopInfo";
import TabTitle from "./components/TabTitle";
import TabContent from "./components/TabContent";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Profile({ children }) {
  const { login } = useSelector((state) => state.user);
  return (
    <>
      {!login ? (
        <Redirect to="/" />
      ) : (
        <main className="homepage" id="main">
          <div>
            <div className="overlay_nav" />
            <main className="profile" id="main">
              <section>
                <TopInfo />
                <div className="container">
                  <div className="tab">
                    <TabTitle />
                    <TabContent children={children} />
                  </div>
                </div>
              </section>
            </main>
          </div>
        </main>
      )}
    </>
  );
}
