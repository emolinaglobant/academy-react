import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from "react-router-dom";
import {loginUser} from '../../DataRequest/index'
import {stateLogin} from '../../Reducer/loginReducer';

const SingIn = ({showMessage, showPassword, show, hide , activateView}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [alert,setAlert] = useState(false);
    const [dataUser, setDataUser] = useState({userName: "", password: ""});

    const verifyDataUser = () => {
        if (dataUser.userName !== "" && dataUser.password !== "") {
            loginUser(dataUser).then(user => {
                if (user) {
                    showMessage(true , "✅ Logging in");
                    dispatch(stateLogin(true));
                    const timer = setTimeout(() => {
                        window.sessionStorage.setItem('token', user);
                        navigate('/');
                    }, 2000);
                    return () => clearTimeout(timer);
                }
            }).catch(function (err) {
                setAlert(true);
                console.log(err);
            })
        } else {
            setAlert(true);
            const timer = setTimeout(() => {
                setAlert(false);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }

    return (
        <form className='formLogin'>
            <section>
                <input type='text' className='inputLogin'
                    onChange={(e) => setDataUser({ ...dataUser, userName: e.target.value })} />
                <label>user name</label>
            </section>

            <section>
                <input className='inputLogin inputPassword' type='password'
                    onChange={(e) => setDataUser({ ...dataUser, password: e.target.value })} />
                <label>password</label>

                <button className='btnShowPasswordSing' onClick={showPassword}>
                    <img src={(activateView) ? show : hide} alt='ocultar o mostrar contraseña'></img>
                </button>
            </section>
            {alert && <span className="alert">Wrong username or password</span>}
            <input className='btnForm' type='button' value="sing in" onClick={verifyDataUser}></input>
        </form>
    );
};

export default SingIn;