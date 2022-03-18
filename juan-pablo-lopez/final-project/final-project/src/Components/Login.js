import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Link } from 'react-router-dom'
import { auth } from '../Config/FirebaseConfig'
import { useHistory } from 'react-router-dom'
import { NavBar } from './NavBar'
import { useAuth } from '../Context/AuthContext'
import googleLogo from '../Img/google.svg'

export const Login = () => {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const { loginWithGoogle, resetPassword } = useAuth();

    const handleLogin = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(() => {
            setSuccessMsg('Login succesfull. You will now get automatically redirected to Home');
            setEmail('');
            setPassword('');
            setErrorMsg('');
            setTimeout(() => {
                setSuccessMsg('');
                history.push('/categories');
            }, 3000)
        }).catch(error => setErrorMsg(error.message));
    }

    const handleGoogleSignin = async () => {
        try {
            await loginWithGoogle();
            history.push('/categories');
        } catch (error) {
            setErrorMsg(error.message);
        }
    };

    const handleResetPassword = async (e) => {
        e.preventDefault();
        if (!email) return setErrorMsg("Write an correct email to reset password");
        try {
            await resetPassword(email);
            setSuccessMsg('We sent you an email. Check your inbox')
        } catch (error) {
            setErrorMsg(error.message);
        }
    };

    return (
        <>
            <NavBar></NavBar>
            <main className="maincontainer">
                <section className="container-fluid">
                    <section className="row no-gutter">
                        <section className="col-md-6 d-none d-md-flex bg-image"></section>
                        <section className="col-md-6 bg-light">
                            <section className="login d-flex align-items-center py-5">
                                <section className="container">
                                    <section className="row">
                                        <section className="col-lg-10 col-xl-7 mx-auto">
                                            <h3 className="display-4">Login</h3>
                                            {successMsg && <>
                                                <section className='success-msg'>{successMsg}</section>
                                                <br></br>
                                            </>}
                                            {errorMsg && <>
                                                <section className='error-msg'>{errorMsg}</section>
                                                <br></br>
                                            </>}
                                            <br></br>
                                            <form autoComplete="off" onSubmit={handleLogin}>
                                                <section className="mb-3" >
                                                    <label>Email*</label>
                                                    <input id="inputEmail" type="email" required placeholder="Email address" onChange={(e) => setEmail(e.target.value)} value={email} autoFocus="" className="form-control rounded-pill border-0 shadow-sm px-4" />
                                                </section>
                                                <label>Password*</label>
                                                <section className="mb-3">
                                                    <input id="inputPassword" type="password" placeholder="Password" required="" onChange={(e) => setPassword(e.target.value)} value={password} className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                                                </section>
                                                <section className="form-check">
                                                    <input id="customCheck1" type="checkbox" checked className="form-check-input" />
                                                    <label htmlFor="customCheck1" className="form-check-label">Remember password</label>
                                                </section>
                                                <section className="d-grid gap-2 mt-2">
                                                    <button type="submit" className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">LOGIN</button>
                                                    <section className="btn-box">
                                                        <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#!" onClick={handleResetPassword}>Forgot Password?</a>
                                                        <span><Link to="recover" className="link"></Link></span>
                                                    </section>
                                                </section>
                                                <section className="btn-box">
                                                    <span className="link-span">Don't have an account? Signup
                                                        <Link to="signup" className="link"> Here</Link></span>

                                                </section>
                                            </form>
                                            <section className="google-btn" onClick={handleGoogleSignin}>
                                                <section className="google-icon-wrapper">
                                                    <img className="google-icon" src={googleLogo} alt="Google Logo" />
                                                </section>
                                                <p className="btn-text"><b>Sign in with google</b></p>
                                            </section>
                                        </section>
                                    </section>
                                </section>
                            </section>
                        </section>
                    </section>
                </section>
            </main>
        </>
    )
};

