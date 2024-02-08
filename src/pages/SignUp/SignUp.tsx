import React, { useEffect, useContext } from "react";
import { SignUpStyle } from "./SignUp.style";
import { Heading } from "../../components/Typography/Heading/Heading";
import { AppInput } from "../../UI/AppInput/AppInput";
import { AppButton } from "../../UI/AppButton/AppButton";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRegisterUserMutation } from "../../store/api/authApi";
import { Header } from "../../components/UI/Header/Header";
import { ThemeContext, themes } from "../../contexts/ThemeContext";

const registrationPageFields = {
  userName: "",
  userEmail: "",
  userPhoneNumber: "",
  userPassword: "",
  userCity: "",
};

const registrationValidationSchema = yup.object({
  userName: yup.string().required("Required field"),
  userEmail: yup
    .string()
    .required("Required field")
    .email("Format should match email format"),
  userPassword: yup
    .string()
    .required("Required field")
    .min(4, "Password must be at least 4 characters long"),
  userPhoneNumber: yup
    .string()
    .required("Required field")
    .matches(/^9989\d{8}$/, "The number is not valid"),
  userCity: yup.string().required("Required field"),
});

export const SignUp = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: registrationPageFields,
    resolver: yupResolver(registrationValidationSchema),
  });

  const navigate = useNavigate();

  const [registrationUser, { data: userData }] = useRegisterUserMutation();

  const onRegistrationFormSubmit = (data: any) => {
    registrationUser({
      name: data.userName,
      email: data.userEmail,
      phone_number: data.userPhoneNumber,
      password: data.userPassword,
      user_city: data.userCity,
    });
  };

  useEffect(() => {
    console.log("USER:", userData);
    if (userData?.user_id) {
      navigate("/sign-in");
    }
  }, [userData, navigate]);

  console.log("Theme:", theme);
  console.log("Toggle Theme Function:", toggleTheme);

  return (
      <SignUpStyle>
        <div className={`container ${theme === themes.dark && "_light"}`}>
          <Header />
          <div className="loginUnit">
            <Heading headingType="h1" headingText="Sign Up" />
            <form onSubmit={handleSubmit(onRegistrationFormSubmit)}>
              <Controller
                name="userName"
                control={control}
                render={({ field }) => (
                  <AppInput
                    hasError={!!errors.userName}
                    errorText={errors.userName?.message as string}
                    placeholder="Name"
                    {...field}
                  />
                )}
              />
              <Controller
                name="userEmail"
                control={control}
                render={({ field }) => (
                  <AppInput
                    hasError={!!errors.userEmail}
                    errorText={errors.userEmail?.message as string}
                    placeholder="Email"
                    {...field}
                  />
                )}
              />
              <Controller
                name="userPhoneNumber"
                control={control}
                render={({ field }) => (
                  <AppInput
                    hasError={!!errors.userPhoneNumber}
                    errorText={errors.userPhoneNumber?.message as string}
                    placeholder="Phone number"
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
                    placeholder="Password"
                    {...field}
                  />
                )}
              />
              <Controller
                name="userCity"
                control={control}
                render={({ field }) => (
                  <AppInput
                    hasError={!!errors.userCity}
                    errorText={errors.userCity?.message as string}
                    placeholder="City"
                    {...field}
                  />
                )}
              />
              <button type="button"  onClick={toggleTheme}>Change the theme</button>
              <AppButton type="submit" buttonLabel="Login" />
            </form>
          </div>
        </div>
      </SignUpStyle>
  );
};
