import React, { useState } from 'react';
import './LoginScreen.css';
import SignupScreen from './SignupScreen';

const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginsScreen__logo"
          src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png"
          alt="logo"
        />
        <button
          className="loginScreen__button"
          onClick={() => setSignIn(true)}
        >
          sign in
        </button>
        <div className="loginScreen__gradient" />
      </div>
      <div className="loginScreen__body">
        {signIn ? (
          <SignupScreen />
        ) : (
          <>
            <h1>Unlimeted films, TV programmes and more</h1>
            <h2>Watch anywhere, Cancel anytime</h2>
            <h3>
              Ready to watch ? enter your email to create or restart your
              membership
            </h3>
            <div className="loginScreen__input">
              <form>
                <input
                  type="email"
                  placeholder="Email address "
                />
                <button
                  className="loginScreen__getStarted"
                  onClick={() => setSignIn(true)}
                >
                  Get Started
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginScreen;
