import {useState} from 'react';
import AlertComm from './AlertComm';
import logo from "../../images/logo-web-film.svg";

import "./footer.css";

const Footer = () => {

    const [alertComment, setAlertComment] = useState(false);

    const sendComment = () => {
        document.querySelector(".inputComment").value = "";
        setAlertComment(true);
    }

    return (
        <>
            <footer>
                <section className="footer-logo">
                    <img src={logo} alt="img-prop"></img>
                </section>
                <section className="comments">
                    <label>Send your comments</label>
                    <input className="inputComment" type="text" placeholder="comments"></input>
                    <button className="btn-comments" onClick={sendComment}>send</button>
                    {alertComment ? <AlertComm setAlertComment={setAlertComment}/> : null} 
                </section>
            </footer>
            <div className="copy">
                <p>Copyright &copy; 2021 - MovieWeb</p>
            </div>

        </>
    );
};

export default Footer;