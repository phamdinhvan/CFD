import Head from "../project/component/Head";

export default function QA() {
  return (
    <main className="faqpage" id="main">
      <div className="container">
        <section>
          <Head title="Câu hỏi thường gặp" />
          <div className="row">
            <div className="accordion_wrap col-md-8 offset-md-2 col-sm-12">
              <h3 className="accordion__title-main">Thông tin chung</h3>
              <QuestionItem
                question="Thành viên sáng lập CFD gồm những ai?"
                answer=" I'd like to demonstrate a powerful little pattern called
                  “Server-Fetched Partials” that offers some tangible benefits
                  over alternatives like VueJS for simple page interactions."
              />
              <QuestionItem
                question="Thành viên sáng lập CFD gồm những ai?"
                answer=" I'd like to demonstrate a powerful little pattern called
                  “Server-Fetched Partials” that offers some tangible benefits
                  over alternatives like VueJS for simple page interactions."
              />
              <h3 className="accordion__title-main">
                Đăng ký nhanh và điểm thưởng
              </h3>
              <QuestionItem
                question="Thành viên sáng lập CFD gồm những ai?"
                answer=" I'd like to demonstrate a powerful little pattern called
                  “Server-Fetched Partials” that offers some tangible benefits
                  over alternatives like VueJS for simple page interactions."
              />
              <QuestionItem
                question="Thành viên sáng lập CFD gồm những ai?"
                answer=" I'd like to demonstrate a powerful little pattern called
                  “Server-Fetched Partials” that offers some tangible benefits
                  over alternatives like VueJS for simple page interactions."
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function QuestionItem({ question, answer }) {
  return (
    <>
      <div className="accordion">
        <div className="accordion__title">
          <h2>
            <strong>{question}</strong>
          </h2>
        </div>
        <div className="content">{answer}</div>
      </div>
    </>
  );
}
