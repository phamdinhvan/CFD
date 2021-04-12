import { useState, useEffect } from "react";
const patternEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i;
const patternPhone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
const patternName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/i;
const patternFbUrl = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
const patternWebUrl = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
const patternPassWord = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,10}$/;

export default function useFormValidate(initialValue, validate) {
  let { option } = validate;
  if (!option) option = {};
  let value = initialValue;
  if (option.localStorage) {
    value =
      JSON.parse(localStorage.getItem(option.localStorage)) || initialValue;
  }

  const [form, setForm] = useState(value);

  //Hỏi lại chỗ này và chỗ loading!

  // if (form?.password) {
  //   let pass = JSON.parse(sessionStorage.getItem("password")) || "";
  //   setForm({
  //     ...form,
  //     password: pass?.password,
  //   });
  // }

  const [error, setError] = useState();
  const inputChange = (e) => {
    let key = e.target.name;
    if (e.target.name === "urlFace") {
      key = "fb";
    }
    setForm({
      ...form,
      [key]: e.target.value,
    });
  };

  useEffect(() => {
    if (option.localStorage) {
      localStorage.setItem(option.localStorage, JSON.stringify(form));
    }
    return () => {
      localStorage.removeItem(option.localStorage);
    };
  }, [form]);
  const onSubmit = () => {
    const { rule, message } = validate;
    const err = {};
    for (let i in rule) {
      let r = rule[i];
      if (r.required) {
        if (!form[i] || /^\s+$/.test(form[i])) {
          err[i] = message?.[i]?.required || "please fill something";
          continue;
        }
      }
      if (r.pattern && form[i]) {
        let pattern = r.pattern;
        if (pattern === "email" || pattern === "username") {
          pattern = patternEmail;
        }
        if (pattern === "phone") {
          pattern = patternPhone;
        }
        if (pattern === "name") {
          pattern = patternName;
        }
        if (pattern === "urlFace") {
          pattern = patternFbUrl;
        }
        if (pattern === "urlWeb") {
          pattern = patternWebUrl;
        }
        if (pattern === "password") {
          pattern = patternPassWord;
        }
        if (!pattern.test(form[i])) {
          console.log(message[i]?.pattern);
          err[i] =
            message?.[i]?.pattern || "Please fill match the format requested";
        }
      }
    }

    if (Object.keys(err).length === 0) {
      // console.log(form);
      // setForm(initialValue);

      if (form?.checked) {
        sessionStorage.setItem("passWord", JSON.stringify(form));
      }
    }
    setError(err);
    return err;
  };

  return {
    form,
    setForm,
    onSubmit,
    inputChange,
    error,
  };
}
