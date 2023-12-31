import { useRef } from 'react';
import './SignupScreen.css';
import { auth } from '../firebase';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

function SignupScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="signupScreen">
      <form>
        <h1>
          Sign In <span>(use any fake email & password)</span>
        </h1>
        <input
          placeholder="Email"
          type="email"
          ref={emailRef}
        />
        <input
          ref={passwordRef}
          type="text"
          placeholder="password"
        />
        <button
          type="submit"
          onClick={signIn}
        >
          Sign In
        </button>
        <h4>
          <span className="signupScreen__gray">New to Netflix? </span>
          <span
            className="signupScreen__link"
            onClick={register}
          >
            Sign Up now
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignupScreen;
