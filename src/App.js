import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cash from './Cash.svg';

function App() {
  return (
    <div className='Home'>
      <div className='sticky-header'>
        <span className='fw-bold'>Open Split</span>
      </div>
      <div className='sign-in-page w-90 '>
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
        <div className='btn-primary mt-3 fw-bold'>Log in</div>
        <div className='center-div fw-bold hyperlink mt-3 fw-bold'>
          New user? Sign Up
        </div>
      </div>
      <div className='sign-up-page w-90 d-none'>
        <div className='center-div mt-4 font-large fw-bold'>Welcome</div>
        <input className='input-div mt-3' placeholder='name'></input>
        <input className='input-div mt-3' placeholder='email'></input>
        <input className='input-div mt-3' placeholder='username'></input>
        <input className='input-div mt-3' placeholder='password'></input>

        <div className='btn-primary mt-3 fw-bold mt-4'>Sign up</div>
      </div>
    </div>
  );
}

export default App;
