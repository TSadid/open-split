import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [isNewUser, setIsNewUser] = useState(false);
  const handleUserAuth = () => {
    toast.error('Servers not found!', {
      theme: 'dark',
    });
  };
  return (
    <div className='Home'>
      <ToastContainer />
      <div className='sticky-header'>
        <span className='fw-bold'>Open Split</span>
      </div>
      {!isNewUser ? (
        <div className='sign-in-page w-90 limit-max-width'>
          <div className='center-div mt-4 font-large fw-bold'>Welcome Back</div>
          <input className='input-div mt-3' placeholder='username'></input>
          <input
            className='input-div mt-3'
            placeholder='password'
            type='password'
          ></input>
          <div className='text-left'>
            <div className='text-dimmed text-decoration-underline hyperlink mt-3'>
              Forgot password?
            </div>
          </div>
          <div className='btn-primary mt-3 fw-bold' onClick={handleUserAuth}>
            Log in
          </div>
          <div
            className='center-div fw-bold hyperlink mt-3 fw-bold'
            onClick={() => setIsNewUser(true)}
          >
            New user? Sign Up
          </div>
        </div>
      ) : (
        <div className='sign-up-page w-90 limit-max-width'>
          <div className='center-div mt-4 font-large fw-bold'>Welcome</div>
          <input className='input-div mt-3' placeholder='name'></input>
          <input className='input-div mt-3' placeholder='email'></input>
          <input className='input-div mt-3' placeholder='username'></input>
          <input className='input-div mt-3' placeholder='password'></input>

          <div
            className='btn-primary mt-3 fw-bold mt-4'
            onClick={handleUserAuth}
          >
            Sign up
          </div>
          <div
            className='center-div fw-bold hyperlink mt-3 fw-bold'
            onClick={() => setIsNewUser(false)}
          >
            Existing User? Sign In
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
