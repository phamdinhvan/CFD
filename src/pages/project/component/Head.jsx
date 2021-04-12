export default function Head({ title, des }) {
  return (
    <>
      {" "}
      <h2 className="main-title">{title}</h2>
      <p className="top-des">{des}</p>
    </>
  );
}
