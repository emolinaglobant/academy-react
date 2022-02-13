import won from "../../Image/won.png";
import error from "../../Image/error.png";
import "./Message.css";

const Message = ({alert , message , score}) => {

    return (
        <article className="containerMessage">  
            <button className="btnClose" onClick={alert}>x</button>
            <section className="sectionMessage">
                <img className="image" src={(score === 3) ? won : error} />
                <p className="message">{message}</p>
            </section>
            <p className="scoreFinal">you score {score}</p>
        </article>
    );
};

export default Message;