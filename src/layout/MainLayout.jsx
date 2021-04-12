import Header from "../components/Header";
import Footer from "../components/Footer";
import Login from "../components/Login";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Login />
      <Footer />
    </>
  );
}
