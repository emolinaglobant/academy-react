import {useState} from 'react';
import AlertComm from './AlertComm';
import logo from "../../images/logo-web-film.svg";

import "./footer.css";

const Footer = () => {

    const [alertComment, setAlertComment] = useState(false);
    const [comment, setComment] = useState("");

    const sendComment = (e) => {
        setAlertComment(true);
        setComment("");
    }

    return (
        <>
            <footer>
                <section className="footer-logo">
                    <img src={logo} alt="img-prop"></img>
                </section>
                <section className="comments">
                    <label>Send your comments</label>   
                    <input className="inputComment" type="text" placeholder="comments" 
                    onChange={(e) => setComment(e.target.value)} value={comment}></input>
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