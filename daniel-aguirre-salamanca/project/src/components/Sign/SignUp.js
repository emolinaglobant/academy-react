import { useRef, useState } from "react";
import { validateSignUp } from "../../helpers";
import { addUser } from "../../features/usersSlice";
import { useDispatch, useSelector } from "react-redux";

const SignUp = () =>{
    const [statusMessage, setStatusMessage] = useState();
    const [usernameRef, passwordRef, repeatedPasswordRef] = [useRef(),useRef(), useRef()];
    const users = useSelector(state => state.users.database);
    const dispatch = useDispatch();
    
    const handleSubmit = (event)=>{
        event.preventDefault();
        const newUser = {username: usernameRef.current.value,
                         password: passwordRef.current.value,
                         repeatedPassword: repeatedPasswordRef.current.value}
        const [status, message] = validateSignUp(newUser, users);
        if (status=="200") {
            console.log(dispatch(addUser(newUser)));
            usernameRef.current.value = passwordRef.current.value = repeatedPasswordRef.current.value = "";
        }
       setStatusMessage(message);
       
    };
    const messageClassName = statusMessage == "User created succesfully" ? "status-message status-message--success": "status-message";
    return(
        <form onSubmit={handleSubmit}>
            {statusMessage && <span className={messageClassName}>{statusMessage}</span>}
            <label>Username<i className="fa-solid fa-user"></i><br/>
            <input type="text" ref={usernameRef}/>
            </label>
            <label>Password <i className="fa-solid fa-key"></i><br/>
            <input type="password" ref={passwordRef}/>
            </label>
            <label>Repeat password <i className="fa-solid fa-key"></i><br/>
            <input type="password" ref={repeatedPasswordRef}/>
            </label>
            <button className="login__button">Sign up</button>
        </form>
    );
};
export default SignUp;