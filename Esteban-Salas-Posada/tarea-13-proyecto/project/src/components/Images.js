import React from 'react';

const Images = (props) => {

    const {largeImageURL, likes, previewURL, tags, views} = props.pic

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <img src={previewURL} alt={tags} height="100" className="card-img-top" />
                <div className="card-body" >
                    <p className="card-text" > {likes} Me gusta </p>
                    <p className="card-text" > {views} Vistas </p>
                    <a href={largeImageURL} target="_blank" className="btn btn-primary btn-block" > Ver imágen  </a>
                </div>
            </div>
        </div>
    )
}
 
export default Images