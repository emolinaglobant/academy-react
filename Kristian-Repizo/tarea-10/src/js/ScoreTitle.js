import '../css/scoreTitle.css';

const ScoreTitle = ({lifes , score }) => {
    return (
        <>
        <section className='title'>
            <h1>🔥Adivina La Pelicula🔥</h1>
        </section>
        <section className='container-score'>
            <section className='score'>
                <p>vidas: <span>{lifes}</span></p>
            </section>
            <section className='score'>
                <p>puntos: <span>{score}</span></p>
            </section>
        </section>
        </>
    );
};

export default ScoreTitle;