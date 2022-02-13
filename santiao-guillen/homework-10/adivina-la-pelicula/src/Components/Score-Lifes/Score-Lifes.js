
const ScoreLifes = ({life , score , gameAlert}) => {
    return (
        <>
            <section>
                <p className="score">your lifes: <span>{life}</span></p>
            </section>
            <section>
                <p className="score">score: <span>{score}</span></p>
            </section>
        </>
    );
};

export default ScoreLifes;