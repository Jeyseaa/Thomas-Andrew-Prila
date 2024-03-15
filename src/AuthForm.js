import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from './firebase';
import { getDatabase, ref, set } from 'firebase/database';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import './App.css';

const AuthForm = ({ onSignUpSuccess }) => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const toggleMode = () => { setIsSignUpMode(!isSignUpMode); };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const auth = getAuth(app);
    const realtimeDB = getDatabase(app);
    const firestoreDB = getFirestore(app);

    try {
      if (isSignUpMode) {
        await createUserWithEmailAndPassword(auth, email, password);
        await set(ref(realtimeDB, 'users/' + email.replace('.', ',')), {
          email: email,
          signUpDate: new Date().toISOString()
        });
        await addDoc(collection(firestoreDB, 'users'), {
          email: email,
          signUpDate: new Date().toISOString()
        });
        onSignUpSuccess();
        setIsSignUpMode(false);
        setEmail('');
        setPassword('');
        window.alert('Sign up successful!');
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        setEmail('');
        setPassword('');
        window.alert('Login successful!');
      }
    } catch (error) {
      console.error(error.message);
      window.alert('Username or Password is incorrect! Please try again!');
    }
  };

  return (
    <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form onSubmit={handleSubmit} className={`sign-in-form ${isSignUpMode ? '' : 'active'}`}>
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <input type="submit" value="Login" className="btn solid" />
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <button className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </button>
              <button className="social-icon">
                <i className="fab fa-twitter"></i>
              </button>
              <button className="social-icon">
                <i className="fab fa-google"></i>
              </button>
              <button className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </button>
            </div>
          </form>
          <form onSubmit={handleSubmit} className={`sign-up-form ${isSignUpMode ? 'active' : ''}`}>
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <input type="submit" className="btn" value="Sign up" />
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <button className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </button>
              <button className="social-icon">
                <i className="fab fa-twitter"></i>
              </button>
              <button className="social-icon">
                <i className="fab fa-google"></i>
              </button>
              <button className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>If you don't have an account, click Sign Up!</p>
            <button className="btn transparent" onClick={toggleMode}>Sign up</button>
          </div>
          <img src="https://i.ibb.co/WWFwZBN/tara.png" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>Welcome to TARA LETS The No.1 Travel and Accommodation Services</p>
            <button className="btn transparent" onClick={toggleMode}>Sign in</button>
          </div>
          <img src="https://i.ibb.co/WWFwZBN/tara.png" className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
