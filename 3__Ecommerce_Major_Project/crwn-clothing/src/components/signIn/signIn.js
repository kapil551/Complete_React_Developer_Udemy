import React from "react";

import "./signInStyle.scss";

import FormInput from "../formInput/formInput";
import CustomButton from "../customButton/customButton";

const SignIn = () => {
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form>
        <FormInput />
        <FormInput />
        <CustomButton type="submit"> Sign in </CustomButton>
      </form>
    </div>
  );
};

export default SignIn;
