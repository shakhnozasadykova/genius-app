import React, { useEffect} from "react";
// import { SignUpStyle } from "./SignUp.style";
import { SignInStyle } from "../SignIn/SignIn.style";
import { Heading } from "../../components/Typography/Heading/Heading";
import { AppInput } from "../../UI/AppInput/AppInput";
import { AppButton } from "../../UI/AppButton/AppButton";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRegisterUserMutation } from "../../store/api/authApi";

const registrationPageFields = {
    userName: "",
    userEmail: "",
    userPhoneNumber: "",
    userPassword: "",
    userCity: "",
}

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
        registrationUser({ name: data.userName,
            email: data.userEmail,
            phone_number: data.userPhoneNumber,
            password: data.userPassword,
            user_city: data.userCity, });
      };
    
    useEffect(() => {
        console.log("USER:", userData);
        if (userData?.user_id) {
          navigate("/");
        }
      }, [userData, navigate]);

    return (
      <SignInStyle>
        <div>
          <div className="Header">
            <div className="HeaderPrimary">
              <input type="submit" />
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
              <AppButton type="submit" buttonLabel="Login" />
            </form>
          </div>
        </div>
      </SignInStyle>
    );
}