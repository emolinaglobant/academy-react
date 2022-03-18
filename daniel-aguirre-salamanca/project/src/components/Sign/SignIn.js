import { useRef, useState } from "react";
import { validateSignIn } from "../../helpers";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../features/usersSlice";

const SignIn = () =>{
    const users = useSelector(state=>state.users.database);
    const dispatch = useDispatch();
    const [usernameRef, passwordRef] = [useRef(), useRef()];
    const [statusMessage, setStatusMessage] = useState();
    const handleSubmit = (event) =>{
        event.preventDefault();
        const user = {username: usernameRef.current.value, password: passwordRef.current.value};
        const [status, message] = validateSignIn(user, users);
        if (status == "200"){
            dispatch(signIn(user));
        }
        setStatusMessage(message);
        usernameRef.current.value=passwordRef.current.value = "";
    };
    
    return(
        <form onSubmit={handleSubmit}>
            {statusMessage && <span className="status-message">{statusMessage}</span>}
            <label>Username<i className="fa-solid fa-user"></i><br/>
            <input type="text" ref={usernameRef}/>
            </label>
            <label>Password <i className="fa-solid fa-key"></i><br/>
            <input type="password" ref={passwordRef}/>
            </label>
            <button className="login__button">Sign in</button>
        </form>
    );
};
export default SignIn;