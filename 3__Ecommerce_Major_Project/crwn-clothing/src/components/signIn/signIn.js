import React from "react";

import "./signInStyle.scss";

const SignIn = () => {
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form>
        <input />
        <input/>
        <button type="submit"> Sign in </button>
      </form>
    </div>
  );
};

export default SignIn;
