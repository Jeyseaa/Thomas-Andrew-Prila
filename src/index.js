import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AuthForm from './AuthForm';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  const [isSignUpSuccess, setIsSignUpSuccess] = useState(false);

  const handleSignUpSuccess = () => {
    setIsSignUpSuccess(true);
    setTimeout(() => {
      setIsSignUpSuccess(false);
    }, 3000); // Reset the success message after 3 seconds
  };

  return (
    <React.StrictMode>
      <AuthForm onSignUpSuccess={handleSignUpSuccess} />
      {isSignUpSuccess && <div className="success-message">Signup Successfully</div>}
    </React.StrictMode>
  );
};

root.render(<App />);

reportWebVitals();
