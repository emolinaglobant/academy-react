import React, { useState } from 'react'
import { auth, fs } from '../Config/FirebaseConfig'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { NavBar } from './NavBar'

export const Signup = () => {

    const history = useHistory();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then((credentials) => {
            console.log(credentials);
            fs.collection('users').doc(credentials.user.uid).set({
                FullName: fullName,
                Email: email,
                Password: password
            }).then(() => {
                setSuccessMsg('Signup succesfull. You will now get automatically redirected to Login');
                setFullName('');
                setEmail('');
                setPassword('');
                setErrorMsg('');
                setTimeout(() => {
                    setSuccessMsg('');
                    history.push('/login');
                }, 3000)
            }).catch(error => setErrorMsg(error.message));
        }).catch((error) => {
            setErrorMsg(error.message);
        })
    }
    
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
                                            <h3 className="display-4">Sign Up</h3>
                                            {successMsg && <>
                                                <section className='success-msg'>{successMsg}</section>
                                                <br></br>
                                            </>}
                                            {errorMsg && <>
                                                <section className='error-msg'>{errorMsg}</section>
                                                <br></br>
                                            </>}
                                            <br></br>
                                            <form autoComplete="off" onSubmit={handleSignUp}>
                                                <section className="mb-3" >
                                                    <label>Full Name*</label>
                                                    <input id="inputName" type="text" required placeholder="Full name" onChange={(e) => setFullName(e.target.value)} value={fullName} autoFocus="" className="form-control rounded-pill border-0 shadow-sm px-4" />
                                                </section>
                                                <section className="mb-3" >
                                                    <label>Email*</label>
                                                    <input id="inputEmail" type="text" required placeholder="Email address" onChange={(e) => setEmail(e.target.value)} value={email} autoFocus="" className="form-control rounded-pill border-0 shadow-sm px-4" />
                                                </section>
                                                <label>Password*</label>
                                                <section className="mb-3">
                                                    <input id="inputPassword" type="password" placeholder="Password" required="" onChange={(e) => setPassword(e.target.value)} value={password} className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                                                </section>
                                                <section className="d-grid gap-2 mt-2">
                                                    <button type="submit" className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Sign Up</button>
                                                </section>
                                                <section className="btn-box">
                                                    <span className="link-span">Already have and account? Login
                                                        <Link to="login" className="link"> Here</Link></span>
                                                </section>
                                            </form>
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

