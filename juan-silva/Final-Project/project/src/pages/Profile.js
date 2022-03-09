import { useState } from 'react';
import './Profile.css'

const users=[];

function Profile(data){
    const [username,setUsername]=useState('');
    const [lastName,setLastname]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const handleNameChange=(event)=>{
        data.setName(event.target.value)
    }
    const handleLastnameChange=(event)=>{
        setLastname(event.target.value)
    }
    const handleUserameChange=(event)=>{
        setUsername(event.target.value)
    }
    const handleEmailChange=(event)=>{
        setEmail(event.target.value)
    }
    const handlePasswordChange=(event)=>{
        setPassword(event.target.value)
    }

    const saveUser=()=>{
        users.push(
            {name:data.name,
            lastName:lastName,
            username:username,
            email:email,
            password:password}
        )
        setLastname('');
        setUsername('');
        setEmail('');
        setPassword('');
        console.log(users)
    }
    return(
        <article className='profile'>
            <header className='header-profile'>
                <h1>Sign Up</h1>
                <h2>Start your adventure as a pokemon trainer</h2>
            </header>
            <section className="loginform">
                <input value={data.name}placeholder="Name" onChange={handleNameChange} aria-required="true" maxLength="75" type="text" size="30"/>
                <input value={lastName}placeholder="Last Name" onChange={handleLastnameChange} aria-required="true" maxLength="75" type="text" size="30"/>
                <input value={username}placeholder="Username" onChange={handleUserameChange} aria-required="true" maxLength="75" type="text" size="30"/>
                <input value={email} placeholder="Email" onChange={handleEmailChange} aria-required="true" maxLength="75" type="email" size="30"/>
                <input value={password} placeholder="Password" onChange={handlePasswordChange} aria-required="true" maxLength="75" type="password" size="30"/>
                
                <button onClick={saveUser}>Submit</button>
            </section>
            <section className="option">
                
                <span> OR </span>
                
            </section>
            <section className="facebooklog">
                <a href ='http://www.facebook.com'>
                    Log in with Facebook
                </a>
            </section>
            
        </article>
    );

}
export default Profile;