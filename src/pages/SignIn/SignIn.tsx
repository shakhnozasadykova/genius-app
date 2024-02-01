import React, { useEffect } from "react";

import { SignInStyle } from "./SignIn.style";
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
    .required("Required field")
    .email("Format should match email format"),
  userPassword: yup
    .string()
    .required("Required field")
    .min(4, "Password must be at least 4 characters long"),
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
      navigate("/main-page");
    }
  }, [userData, navigate]);

  return (
    <SignInStyle>
      <div>
        <div className="Header">
          <div className="HeaderPrimary">
            <form className="Search">
              <input type="text" placeholder="Search lyrics  & more" />
            </form>
            <img className="Logo" src={require('../../images/Genius_website_logo.svg.png')} alt="Logo"/>
          </div>
          <div className="HeaderMenu">
            <ul>
              <li className="MenuItem">
                The 50th
                <span>|</span>
              </li>
              <li className="MenuItem">
                Featured
                <span>|</span>
              </li>
              <li className="MenuItem">
                Charts
                <span>|</span>
              </li>
              <li className="MenuItem">
                Videos
                <span>|</span>
              </li>
              <li className="MenuItem">
                Community
                <span>|</span>
              </li>
              <li className="MenuItem">
                Promote your music
                <span>|</span>
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
    </SignInStyle>
  );
};
