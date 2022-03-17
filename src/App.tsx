import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import "./styles.css";

export default function App() {
  const validationsSchema = yup.object().shape({
    login: yup.string() .min(6, "Минимальная длина для поля логин - 6 символов") .required("обязательно"),
    password: yup.string() .min(6, "Минимальная длина для поля пароль - 6 символов") .required("обязательно"),
    confirmPassword: yup.string().oneOf([yup.ref("password")], "пароли не совпадают"),
    name: yup.string().required("обязательно"),
    email: yup.string().email("некорректный email"),
    phone: yup.string().length(11, "должно быть 11 цифр").matches(/\d{11}/, "номер может содержать только цифры")
  });

  return (
    <div>
      <Formik
        initialValues={{
          login: "",
          password: "",
          confirmPassword: "",
          name: "",
          email: "",
          phone: ""
        }}
        validateOnBlur
        onSubmit={(values) => {
          console.log(values);
          window.location.href = 'homepage-url';
        }}
        validationSchema={validationsSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isValid,
          handleSubmit,
          dirty
        }) => (
          <div className={"form"}>
            <label htmlFor={"secondName"}>Логин</label>
            <p>
              <input
                className={"input"}
                type={"text"}
                name={"login"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.login}
              />
            </p>

            {touched.login && errors.login && (
              <p className={"errors"}>{errors.login}</p>
            )}

            <label htmlFor={"secondName"}>Пароль</label>
            <p>
              <input
                className={"input"}
                type={"password"}
                name={"password"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
            </p>

            {touched.password && errors.password && (
              <p className={"errors"}>{errors.password}</p>
            )}

            <label htmlFor={"secondName"}>Подтвердить пароль</label>

            <p>
              <input
                className={"input"}
                type={"password"}
                name={"confirmPassword"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
              />
            </p>

            {touched.confirmPassword && errors.confirmPassword && (
              <p className={"errors"}>{errors.confirmPassword}</p>
            )}

            <label htmlFor={"secondName"}>ФИО</label>
            <p>
              <input
                className={"input"}
                type={"text"}
                name={"name"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
            </p>
            {touched.name && errors.name && (
              <p className={"errors"}>{errors.name}</p>
            )}

            <label htmlFor={"secondName"}>Почта</label>
            <p>
              <input
                className={"input"}
                type={"text"}
                name={"email"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            </p>
            {touched.email && errors.email && (
              <p className={"errors"}>{errors.email}</p>
            )}

            <label htmlFor={"secondName"}>Телефон</label>
            <p>
              <input
                className={"input"}
                type={"text"}
                name={"phone"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
              />
            </p>
            {touched.phone && errors.phone && (
              <p className={"errors"}>{errors.phone}</p>
            )}

            <button
              className={"button"}
              disabled={!isValid && !dirty}
              onClick={handleSubmit}
              type={"submit"}
            >
              Зарегистрироваться
            </button>
          </div>
        )}
      </Formik>
    </div>
  );
}
