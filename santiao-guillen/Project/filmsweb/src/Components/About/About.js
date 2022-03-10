import { Link } from 'react-router-dom';
import img from '../../images/cine.svg';
import "./about.css";

const About = () => {
    return (
        <div className="about">
            <header>
                <h2>¿what is movieWeb?</h2>
            </header>

            <article className="box-about">
                <section>
                    <p>MovieWeb is a page where you can search for movies and find information
                        about them, duration, score, year of release.

                        It has a ranking section to know the best movies to date, keep you updated
                        on all the new series and movie releases.</p>
                </section>

                <section className="btn-ranking">
                    <Link to="/Ranking">see ranking</Link>
                </section>
            </article>
            
            <article className="container-info">
                <section className="information">
                    <h3>¿what can you find?</h3>
                    <ul>
                        <li>series</li>
                        <li>films</li>
                        <li>detailed information</li>
                        <li>news on billboard</li>
                        <li>the best movies of the moment</li>
                    </ul>
                </section>

                <figure className="img-box">
                    <img src={img} alt="popCorns"></img>
                </figure>
            </article>
        </div>
    );
};

export default About;