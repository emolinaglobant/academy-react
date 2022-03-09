import React, { Component } from 'react';
import Images from './Images';
import Pages from './Pages';

class Result extends Component {

    showImage = () => {
        const images = this.props.image
        if(images.length === 0) return null
        console.log(images)
        return (
            <React.Fragment>
                <Pages
                    previousPage={this.props.previousPage}
                    nextPage={this.props.nextPage}
                />
                <div className="col-12 row">
                    {/* Tiene que ser con parentesis, las llaves no funcionan en ese arrow function */}
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
            </React.Fragment>
        )
    }

    render() { 
        return (
            <React.Fragment>
                { this.showImage() }
            </React.Fragment>
         
        );
    }
}
 
export default Result;