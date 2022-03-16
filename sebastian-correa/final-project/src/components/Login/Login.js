import React from 'react';
import whiteLogo from './../../assets/img/globant-white-logo.png';
import authenticateUser from './LoginHandler';
import './Login.css';

const Login = () => {
  return (
    <article className='login-main'>
      <section className='login-container'>
        <figure className='login-logo'>
          <img src={whiteLogo} alt='Globant green and black logo.' />
        </figure>
        <p className='welcome-text'>
          We know that our globers like being in tune. Are you ready for the
          Globant Music experience?
        </p>
        <button onClick={() => authenticateUser()}>Take me there!</button>
      </section>
    </article>
  );
};

export default Login;
