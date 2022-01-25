import React, { useState } from "react";

import "./signInStyle.scss";

import FormInput from "../formInput/formInput";
import CustomButton from "../customButton/customButton";

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
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="Password"
          required
        />
        <CustomButton type="submit"> Sign in </CustomButton>
      </form>
    </div>
  );
};

export default SignIn;
