export default function Request({
  required,
  benefits,
  schedule,
  opening_time,
}) {
  return (
    <>
      <h3 className="title">yêu cầu cần có</h3>
      <div className="row row-check">
        {required.map((e, i) => (
          <div key={i} className="col-md-6">
            {e.content}
          </div>
        ))}
      </div>
      <h3 className="title">hình thức học</h3>
      <div className="row row-check">
        {benefits.map((e, i) => (
          <div key={i} className="col-md-6">
            {e.content}
          </div>
        ))}
      </div>
      <h3 className="title">
        <div className="date-start">lịch học</div>
        <div className="sub">
          *Lịch học và thời gian có thể thống nhất lại theo số đông học viên.
        </div>
      </h3>
      <p>
        <strong>Ngày bắt đầu: </strong>
        {opening_time}
        <br />
        <strong>Thời gian học: </strong> {schedule}
      </p>
    </>
  );
}
