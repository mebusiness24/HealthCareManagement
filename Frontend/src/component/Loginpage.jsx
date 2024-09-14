// Firstcomponent.js
import React from 'react';

const Loginpage = () => {
  return (
    <div>
      <div className="login-container">
        <h2>Login</h2>
        <form action="#">
            <input type="text" placeholder="Username" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Continue</button>
        </form>
        <p>Or continue with:</p>
        <div className="social-login">
            <button><a href="./Pro.jsx">Facebook</a></button>
            <button>Google</button>
            <button>Another</button>
        </div>
        <p>Don't have an account?<a href="#" >Sign-up</a> </p>
      </div>
    </div>
  );
}

export default Loginpage;
