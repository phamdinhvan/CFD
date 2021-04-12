import CourseList from "../../components/CourseList";
export default function CoursePage() {
  const { online, offline } = JSON.parse(localStorage.getItem("localHome"));
  return <CourseList online={online} offline={offline} />;
}
