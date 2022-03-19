import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {getId} from "../../DataRequest";
import img from '../../images/img-error.svg';
import "./aboutFilm.css";

const AboutFilm = () => {

    const params = useParams();
    const [aboutFilm, setAboutFilm] = useState([]);

    const getDetailFilm = async () => {
        const resultData = await getId(params.id)
        setAboutFilm(resultData);
    }

    useEffect(() => {
        getDetailFilm();
    },);


    return (
        <div className="container-aboutfilms">
            <img className="backdropPath" src={aboutFilm.poster_path ? "https://image.tmdb.org/t/p/w1280" + aboutFilm.backdrop_path: img} alt="backdropFilm"></img>
            <div className="container-info-films">
                <section className="poster">
                    <img src={aboutFilm.poster_path ? "https://image.tmdb.org/t/p/w1280" + aboutFilm.poster_path : img} alt="posterFilm"></img>
                </section>
                <section className="box-info">
                    <header>
                        <h2>{aboutFilm.title}</h2>
                    </header>
                    <p>{aboutFilm.overview}</p>
                </section>
            </div>
            <div class="clr"></div>
            <section className="content-more-info">
                <label><span className="icon-videocam-1"></span>release date:  {aboutFilm.release_date}</label>
                <label><span className="icon-videocam-1"></span>original language:  {aboutFilm.original_language}</label>
                <label><span className="icon-videocam-1"></span>assessment:  {aboutFilm.vote_average}<span className="icon-star"></span></label>
            </section>
        </div>
    )
};

export default AboutFilm;