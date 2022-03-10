import React, { Component } from 'react';
import Images from './Images';
import Pages from './Pages';

class Result extends Component {

    showImage = () => {
        const images = this.props.image
        if(images.length === 0) return null
        return (
            <>
                <Pages
                    previousPage={this.props.previousPage}
                    nextPage={this.props.nextPage}
                />
                <div className="col-12 row">
                    {images.map(pic => (
                        <Images
                        key={pic.id}
                        pic={pic}
                        />
                    ))}
                </div> 
                <Pages
                    previousPage={this.props.previousPage}
                    nextPage={this.props.nextPage}
                />
            </>
        )
    }

    render() { 
        return (
            <>
                { this.showImage() }
            </>
         
        );
    }
}
 
export default Result;