import Banner from "./components/Banner";
import CourseList from "../../components/CourseList";
import Different from "./components/Different";
import Terminal from "./components/Terminal";
import Gallery from "./components/Gallery";
import Action from "./components/Action";
import PopUpVideo from "../../components/PopUpVideo";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import userApi from "../../api/userApi";
import Loading from "../../components/Loading";

export default function Home() {
  const initialValue = {
    online: [],
    offline: [],
    loading: true,
    review: [],
    gallery: {},
  };
  let dataLocal = JSON.parse(localStorage.getItem("localHome"));
  let [state, setState] = useState(dataLocal || initialValue);
  useEffect(async () => {
    let res = await userApi.getDataHome();

    localStorage.setItem("localHome", JSON.stringify(res));

    setState({
      ...res,
      loading: false,
    });
  }, []);
  if (state.loading) return <Loading />;

  return (
    <main className="homepage" id="main">
      <Banner />
      <CourseList online={state.online} offline={state.offline} />
      <Different />
      <Terminal review={state.review} loading={state.loading} />
      <Gallery gallery={state.gallery} loading={state.loading} />
      <Action />
      <PopUpVideo />
    </main>
  );
}
