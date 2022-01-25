import React, { useState } from "react";

import "./signInStyle.scss";

import FormInput from "../formInput/formInput";
import CustomButton from "../customButton/customButton";

import { signInWithGoogle } from "../../firebase/firebase.utils";

const SignIn = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {

    // console.warn(email, ":", password);
    event.preventDefault();

    setEmail("");
    setPassword("");
  };

  const handleChange = (event) => {

    const { value, name } = event.target;

    // console.log(name, ":", value);

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          value={email}
          label="Email"
          required
          autoComplete="email"
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="Password"
          required
          autoComplete="password"
        />
        <div className="buttons">
            <CustomButton type="submit"> Sign in </CustomButton>
            <CustomButton onClick={signInWithGoogle}>
              Sign in with Google
            </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
