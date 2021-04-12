import { useState, useEffect } from "react";
import $ from "jquery";
import useFormValidate from "../../../core/ReactHook/useFormValidate";
export default function Register() {
  function handleOpen() {
    $(".select .sub ").css({ display: "block" });
    handleClose();
  }

  function handleClose() {
    let text = $(".select .sub a");
    text.each(function () {
      $(this).click(function () {
        let textCurrent = $(this).html();
        $(".select .head").text(textCurrent);
        $(".select .sub").fadeOut(200);
      });
    });
  }
  // $(".select .sub a").on("click", function (e) {
  //   e.preventDefault();
  //   let value = $(this).text();
  //   $(this).closest(".select").find(".head").text(value);
  //
  // });

  const { form, inputChange, onSubmit, error, setForm } = useFormValidate(
    {
      name: "",
      phone: "",
      email: "",
      urlFace: "",
      coin: false,
      payment: "bank-transfer",
      suggest: "",
      gender: "male",
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
        urlFace: {
          pattern: "urlFace",
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
        urlFace: {
          required: "please fill your face",
        },
      },
      option: {
        localStorage: "register-info",
      },
    }
  );
  function handleSelect(e) {
    e.preventDefault();
    let value = e.target.dataset.value;
    let name = e.target.dataset.name;
    let type = e.target.type;
    if (type === "checkbox") {
      value = e.target.checked;
      name = e.target.name;
    }
    setForm({
      ...form,
      [name]: value,
    });
  }

  return (
    <div className="form">
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
            value={form.phone}
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
        <p>
          URL Facebook<span>*</span>
        </p>

        <div className="text-error">
          <input
            className={error?.urlFace ? "error" : ""}
            onChange={inputChange}
            type="text"
            placeholder="https://facebook.com"
            value={form.urlFace}
            name="urlFace"
          />
          <p>{error?.urlFace}</p>
        </div>
      </label>
      <div style={{ display: "flex" }}>
        <label className="disable">
          <p>Gender</p>
          <div className="checkcontainer">
            <strong>Male</strong>
            <input
              name="gender"
              value="male"
              type="radio"
              onChange={inputChange}
              checked={form.gender === "male"}
            />
            <span className="checkmark" />
          </div>
        </label>
        <label className="disable">
          <div className="checkcontainer">
            <strong>Female</strong>
            <input
              name="gender"
              value="female"
              type="radio"
              onChange={inputChange}
              checked={form.gender === "female"}
            />
            <span className="checkmark" />
          </div>
        </label>
      </div>

      <label className="disable">
        <p>Sử dụng COIN</p>
        <div className="checkcontainer">
          Hiện có <strong>300 COIN</strong>
          <input
            name="coin"
            onChange={handleSelect}
            type="checkbox"
            value={form.coin}
            defaultChecked={false}
          />
          <span className="checkmark" />
        </div>
      </label>
      <label>
        <p>Hình thức thanh toán</p>
        <div className="select">
          <div className="head" onClick={handleOpen}>
            Chuyển khoản
          </div>
          <div className="sub">
            <a
              onClick={handleSelect}
              href="#"
              data-value="Banker-payment"
              data-name="payment"
            >
              Chuyển khoản
            </a>
            <a
              onClick={handleSelect}
              href="#"
              data-value="Craft-payment"
              data-name="payment"
            >
              Thanh toán tiền mặt
            </a>
          </div>
        </div>
      </label>
      <label>
        <p>Ý kiến cá nhân</p>
        <input
          value={form.suggest}
          name="suggest"
          onChange={inputChange}
          type="text"
          placeholder="Mong muốn cá nhân và lịch bạn có thể học."
        />
      </label>
      <div className="btn main rect" onClick={onSubmit}>
        đăng ký
      </div>
    </div>
  );
}
