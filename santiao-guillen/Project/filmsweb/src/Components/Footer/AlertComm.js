import "./footer.css";

const AlertComm = ({setAlertComment}) => {
    return (
        <div className="boxAlertComm">
            <span className="" onClick={() => setAlertComment(false)}>❌</span>
            <p>Comment sent successfully</p> 
        </div>
    );
};

export default AlertComm;