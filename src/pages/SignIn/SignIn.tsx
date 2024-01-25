import React, { useEffect } from "react";
import { Heading } from "../../components/Typography/Heading/Heading";
import { AppInput } from "../../UI/AppInput/AppInput";
import { AppButton } from "../../UI/AppButton/AppButton";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLoginUserMutation } from "../../store/api/authApi";

const loginPageFields = {
  userEmail: "",
  userPassword: "",
};

const loginValidationSchema = yup.object({
  userEmail: yup
    .string()
    .required("Обязательное поле")
    .email("Формат должен соответствовать формату email"),
  userPassword: yup
    .string()
    .required("Обязательное поле")
    .min(4, "Пароль должен содержать как минимум 4 символа"),
});

export const SignIn = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: loginPageFields,
    resolver: yupResolver(loginValidationSchema),
  });

  const navigate = useNavigate();

  const [loginUser, { data: userData }] = useLoginUserMutation();

  const onLoginFormSubmit = (data: any) => {
    loginUser({ email: data.userEmail, password: data.userPassword });
  };

  useEffect(() => {
    console.log("USER:", userData);
    if (userData?.user_id) {
      navigate("/profile-page");
    }
  }, [userData, navigate]);

  return (
    <div>
      <div className="Header">
        <div className="HeaderPrimary">
          <input />
          <img></img>
        </div>
        <div className="HeaderMenu">
          <ul>
            <li className="the50th">
              The 50th
              <span>|</span>
            </li>
            <li className="featured">
              Featured
              <span>|</span>
            </li>
            <li className="charts">
              Charts
              <span>|</span>
            </li>
            <li className="videos">
              Videos
              <span>|</span>
            </li>
            <li className="community">
              Community
              <span>|</span>
            </li>
            <li className="promoteYourMusic">
              Promote your music
              <span>|</span>
            </li>
            <li className="menuItem">
              <a href="https://www.facebook.com/Genius/">
                <svg></svg>
              </a>
            </li>
            <li className="menuItem">
              <a href="https://twitter.com/Genius">
                <svg></svg>
              </a>
            </li>
            <li className="menuItem">
              <a href="https://www.instagram.com/genius/">
                <svg></svg>
              </a>
            </li>
            <li className="menuItem">
              <a href="https://www.youtube.com/genius">
                <svg></svg>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="loginUnit">
        <Heading headingType="h1" headingText="Sign In" />
        <form onSubmit={handleSubmit(onLoginFormSubmit)}>
          <Controller
            name="userEmail"
            control={control}
            render={({ field }) => (
              <AppInput
                hasError={!!errors.userEmail}
                errorText={errors.userEmail?.message as string}
                placeholder="email"
                {...field}
              />
            )}
          />
          <Controller
            name="userPassword"
            control={control}
            render={({ field }) => (
              <AppInput
                type="password"
                hasError={!!errors.userPassword}
                errorText={errors.userPassword?.message as string}
                placeholder="password"
                {...field}
              />
            )}
          />
          <AppButton type="submit" buttonLabel="Login" />
        </form>
      </div>
    </div>
  );
};
