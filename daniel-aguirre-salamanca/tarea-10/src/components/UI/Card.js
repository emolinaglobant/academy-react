import "./UI.css";

const Card = ({className, children})=>{
    const addClassName = className ? className: "";
    return(
        <section className={`card ${addClassName}`}>
            {children}
        </section>
    );
}

export default Card;