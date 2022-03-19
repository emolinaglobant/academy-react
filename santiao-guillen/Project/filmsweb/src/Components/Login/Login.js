import {useState} from 'react';
import SingIn from './SingIn';
import CreateCount from './CreateCount';
import Hide from '../../images/Close.png';
import Show from '../../images/show.png';
import './Login.css';

const Login = () => {
    
    const [login, setLogin] = useState(false);
    const [activeMessajeLogin, setActiveMessajeLogin] = useState(false);
    const [activateView, setActivateView] = useState(false);
    const [messajeLogin, setMessajeLogin] = useState(false);

    const showMessage = (active , message) => {
        setActiveMessajeLogin(active);
        setMessajeLogin(message);
    }

    const showPassword = (e) => {
        e.preventDefault();
        setActivateView(!activateView);
        let inputPassword = document.querySelector('.inputPassword');
        (inputPassword.type === 'password') ? inputPassword.type = 'text' : inputPassword.type = 'password';
    }

return (
        <article className='continerLogin'>
            <section className='optionsLogin'>
                <button className='btnSing' onClick={()=>setLogin(false)}>Sing In</button>  
                <button className='btnCreate' onClick={()=>setLogin(true)}>Create Count</button>  
            </section>
            
            {login ? <CreateCount 
                showMessage={showMessage} 
                showPassword={showPassword} 
                activateView={activateView}
                show={Show} 
                hide={Hide} /> 
            : <SingIn  
                showMessage={showMessage} 
                showPassword={showPassword}
                activateView={activateView}
                show={Show} 
                hide={Hide} />}

            { activeMessajeLogin &&
                <section className="messageLogin">
                    <p>{messajeLogin}</p>
                </section>
            }
        </article>
    );
};

export default Login;
