import React, { Component } from 'react';


class Seeker extends Component{

    constructor(props) {
        super(props);
        this.seekerRef = React.createRef();
    }
    
    componentDidMount() {
        this.seekerRef.current.focus()
    }

    handlerData = (e) =>{
        e.preventDefault()
        // Manera de obtener el valor del texto
        const wordToSearch = this.seekerRef.current.value
        // Así podemos enviar un valor del child al parent
        this.props.getDataToSearch(wordToSearch)
    }

    render() {
        return (
            <form onSubmit={this.handlerData}>
                <div className="row">
                    <section>
                        <label className="form-group col-md-8" htmlFor="seeker" aria-describedby="info-text">
                            <p className="d-none" id="info">Escribe una palabra para buscar imagenes</p>
                            <input id="seeker" data-testid="seeker" ref={this.seekerRef} type="text" className="form-control form-control-lg" placeholder="Busca tu imagen" />
                        </label>
                        <label className="form-group col-md-4" htmlFor="send-form" aria-describedby="info-button">
                            <p className="d-none" id="info-button">Boton para buscar la imagen</p>
                            <input id="send-form" data-testid="send-form" type="submit" className="btn btn-lg btn-danger btn-block" value="buscar..." />
                        </label>
                    </section>
                </div>
            </form>
        )
    }
}

export default Seeker;