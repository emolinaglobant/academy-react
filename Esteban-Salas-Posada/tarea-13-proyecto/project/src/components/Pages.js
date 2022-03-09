import React from 'react'

const Pages = (props) => {
    return (
        <div className="py-5">
            <button onClick={props.previousPage} type="button" className="btn btn-info" > Anterior &larr; </button>
            <button onClick={props.nextPage}  type="button" className="btn btn-info" > Siguiente &rarr; </button>
        </div>
    )
}

export default Pages