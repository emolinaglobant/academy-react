import './map.css'
import map from '../assets/bigmap.png'

function Map(data){

    return(
        <article>
            <h1 className='map-title'>Pokemon Map</h1>
            <h3>{data.name}, here you have the map. Are you ready to explore?  </h3>
            <figure>
                <img className='map-pic' src={map} alt="Mapa Galtar"></img>
            </figure>
            <figcaption>Galar Map, Pokemon Sword</figcaption>
        </article>
    );
}
export default Map;