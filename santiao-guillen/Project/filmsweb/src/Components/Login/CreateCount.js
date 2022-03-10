import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {addUser , getAllFilms} from '../../DataRequest/index';
import {stateLogin} from '../../Reducer/loginReducer';

const CreateCount = ({showMessage, showPassword, show, hide , activateView}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [alert, setAlert] = useState('');
    const [alertForm, setAlertForm] = useState(false);
    const [dataNewUser, setDataNewUser] = useState({ userName: '', email: '', password: '' });
    const [newUser, setNewUser] = useState([]);

    const verifyEmail = () => {
        let regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
        let resultRegexEmail = regexEmail.test(dataNewUser.email);

        if (resultRegexEmail === true) {
            setAlert('This is a valid email');
        } else {
            setAlert('this is not a valid email - example@email.com');
        }
    }

    const verifyPassword = () => {
        let regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,10}$/;
        let resultRegexPassword = regexPassword.test(dataNewUser.password);

        if (resultRegexPassword === true) {
            setAlert('the password meets the established parameters');
        } else {
            setAlert('The password must have a min 8 or max 10 characters, at least 1 letter and 1 number');
        }
    }

    const createUser = () => {
        if (dataNewUser.userName !== "" && dataNewUser.email !== "" && dataNewUser.password !== "") {
            
            addUser(dataNewUser).then(user => {
                if (user) {
                    showMessage(true , "✅ User created successfully");
                    getAllFilms();
                    dispatch(stateLogin(true));
                    // dispatch(createNewUser(user));
                    const timer = setTimeout(() => {
                        window.sessionStorage.setItem('token', newUser);
                        setNewUser(user);
                        navigate('/');                    
                    }, 2000);
                    return () => clearTimeout(timer);
                }
            }).catch(function (err) {
                console.log(err);
            })
            setAlertForm(false);

        } else {
            setAlertForm(true);
            const timer = setTimeout(() => {
                setAlertForm(false);
            }, 4000);
            return () => clearTimeout(timer);
        }
    }

    return (
        <article>
            <form className='formLogin'>
                <section>
                    <input type='text' className='inputLogin'
                        onChange={(e) => setDataNewUser({ ...dataNewUser, userName: e.target.value })} />
                    <label>create user name</label>
                </section>

                <section>
                    <input type='text' className='inputLogin'
                        onChange={(e) => setDataNewUser({ ...dataNewUser, email: e.target.value })}
                        onKeyUp={verifyEmail}
                    />
                    <label>create email</label>
                </section>

                <section>
                    <input className='inputLogin inputPassword' type='password'
                        onChange={(e) => setDataNewUser({ ...dataNewUser, password: e.target.value })}
                        onKeyUp={verifyPassword}
                    />
                    <label>password user</label>
                    <button className='btnShowPassword' onClick={showPassword}>
                        <img src={(activateView) ? show : hide} alt='ocultar o mostrar contraseña'></img>
                    </button>
                </section>

                <p className='alertGood'>{alert}</p>

                <input className='btnForm' type='button' value='create user' onClick={createUser} ></input>
            </form>

            {alertForm &&
                <section className='containerAlertForm'>
                    <span onClick={() => setAlertForm(false)}>❌</span>
                    <h4 className="titleAlert">houston, we have a problem</h4>
                    <p className="infoAlert">Please complete all the fields with the necessary requirements</p>
                </section>
            }
        </article>
    );
};

export default CreateCount;