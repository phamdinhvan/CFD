import React, { useRef, useState } from "react";
import useFormValidate from "../../core/ReactHook/useFormValidate";
import "../../assets/css/custom.css";
import Head from "../project/component/Head";
export default React.forwardRef(function CoopPage(props, ref) {
  const { form, inputChange, onSubmit, error } = useFormValidate(
    {
      name: "",
      phone: "",
      email: "",
      website: "",
      title: "",
      content: "",
    },
    {
      rule: {
        name: {
          required: true,
          pattern: "name",
        },
        email: {
          required: true,
          pattern: "email",
        },
        phone: {
          required: true,
          pattern: "phone",
        },
        website: {
          pattern: "urlWeb",
        },
      },
      message: {
        name: {
          required: "please fill your name",
        },
        email: {
          required: "please fill your email",
        },
        phone: {
          required: "please fill your phone",
        },
      },
      option: {
        localStorage: "register-info",
      },
    }
  );

  return (
    <>
      <main className="register-course" id="main">
        <section className="section-1 wrap container">
          <Head
            title="Hợp Tác Cùng CFD"
            des="Đừng ngần ngại liên hệ với CFD để cùng nhau tạo ra những sản phẩm giá trị, cũng như việc hợp tác với các đối tác tuyển dụng và công ty trong và ngoài nước."
          />
          <div className="div">
            <label>
              <p>
                Họ và tên<span>*</span>
              </p>
              <div className="text-error">
                <input
                  className={error?.name ? "error" : ""}
                  value={form.name}
                  onChange={inputChange}
                  name="name"
                  type="text"
                  placeholder="Họ và tên bạn"
                />
                <p>{error?.name}</p>
              </div>
            </label>
            <label>
              <p>
                Số điện thoại<span>*</span>
              </p>
              <div className="text-error">
                <input
                  className={error?.phone ? "error" : ""}
                  value={form?.phone}
                  onChange={inputChange}
                  name="phone"
                  type="text"
                  placeholder="Your phone"
                />
                <p>{error?.phone}</p>
              </div>
            </label>
            <label>
              <p>
                Email<span>*</span>
              </p>

              <div className="text-error">
                <input
                  className={error?.email ? "error" : ""}
                  value={form.email}
                  onChange={inputChange}
                  name="email"
                  type="text"
                  placeholder="Your mail"
                />
                <p>{error?.email}</p>
              </div>
            </label>
            <label>
              <p>Website</p>
              <div className="text-error">
                <input
                  onChange={inputChange}
                  className={error?.website ? "error" : ""}
                  name="website"
                  value={form.website}
                  type="text"
                  placeholder="Đường dẫn website http://"
                />
                <p>{error?.website}</p>
              </div>
            </label>
            <label>
              <p>
                Tiêu đề<span>*</span>
              </p>
              <input
                onChange={inputChange}
                name="title"
                value={form.title}
                type="text"
                placeholder="Tiêu đề liên hệ"
              />
            </label>
            <label>
              <p>
                Nội dung<span>*</span>
              </p>
              <textarea
                onChange={inputChange}
                name="content"
                value={form.content}
                cols={30}
                rows={10}
                defaultValue={""}
              />
            </label>
            <div className="btn main rect" onClick={onSubmit}>
              đăng ký
            </div>
          </div>
        </section>
      </main>
    </>
  );
});
