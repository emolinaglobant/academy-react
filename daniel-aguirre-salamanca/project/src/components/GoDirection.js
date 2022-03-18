const GoDirection = ({direction, onMove}) =>{
    const arrow = direction == "back" ? <i className="fa-solid fa-chevron-left fa-6x"></i>: 
    <i className="fa-solid fa-chevron-right fa-6x"></i>
    const handleMove = ()=>{
        onMove(direction);
    }
    return (
        <button className="button" onClick={handleMove}>
        {arrow}
      </button>
    );
};

export default GoDirection;