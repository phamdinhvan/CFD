import useFormValidate from "../../../core/ReactHook/useFormValidate";
import Loading from "../../../components/Loading";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateData, setLoading } from "../../../redux/action/user";
export default function Info() {
  const { dataUser, loading } = useSelector((state) => state.user);

  const [load, setLoad] = useState(false);
  const dispatch = useDispatch();
  const { form, inputChange, onSubmit, error, setForm } = useFormValidate(
    {
      ...dataUser,
    },
    {
      rule: {
        name: {
          required: true,
          pattern: "name",
        },
        phone: {
          required: true,
          pattern: "phone",
        },
        fb: {
          pattern: "urlFace",
        },
      },
      message: {
        name: {
          required: "please fill your name",
        },
        phone: {
          required: "please fill your phone",
        },
        fb: {
          required: "please fill your face",
        },
      },
      // option: {
      //   localStorage: "register-info",
      // },
    }
  );

  function handleSubmit(e) {
    e.preventDefault();
    let err = onSubmit();
    if (Object.keys(err).length === 0) {
      dispatch(setLoading(true));
      dispatch(updateData(form));
    }
  }
  if (loading) return <Loading />;

  return (
    <div className="tab1">
      <label>
        <p>
          Họ và tên<span>*</span>
        </p>
        <div className="text-error">
          <input
            type="text"
            className={error?.email ? "error" : ""}
            name="name"
            onChange={inputChange}
            value={form.name}
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
            type="text"
            className={error?.email ? "error" : ""}
            name="phone"
            onChange={inputChange}
            value={form.phone}
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
            defaultValue={form.email}
            disabled
            name="email"
            onChange={inputChange}
            type="text"
            className={error?.email ? "error" : ""}
          />
          <p>{error?.email}</p>
        </div>
      </label>
      <label>
        <p>
          Facebook<span>*</span>
        </p>
        <div className="text-error">
          <input
            name="urlFace"
            type="text"
            className={error?.email ? "error" : ""}
            value={form.fb}
            placeholder="Facebook url"
            onChange={inputChange}
          />
          <p>{error?.fb}</p>
        </div>
      </label>
      <label>
        <p>
          Skype<span>*</span>
        </p>
        <input
          type="text"
          name="skype"
          onChange={inputChange}
          value={form.skype}
        />
      </label>
      <div className="btn main rect" onClick={handleSubmit}>
        LƯU LẠI
      </div>
    </div>
  );
}
