import {useEffect} from 'react';
import {ranking} from '../../Reducer/movieReducer';
import {useDispatch , useSelector} from 'react-redux';
import {getRanking} from "../../DataRequest";

import "./Ranking.css"

const Ranking = () => {

    const dispatch = useDispatch();
    const state = useSelector(state => state.movieReducer.ranking);

    const getRankings = () => {
        getRanking().then((rankingData) => dispatch(ranking(rankingData.results)))
        .catch(function(err){
            console.log(err);
        })
    }
    
    useEffect(() => {
        getRankings();
    },[]);

    return (
        <>
            <header className="title-table-ranking" id="top-ranking">
                <h3>ranking 🏆</h3>
            </header>
            <div className="table-ranking">
                <table>
                    <tr>
                        <th>film</th>
                        <th>score</th>
                        <th>popularity</th>
                        <th>release date</th>
                    </tr>
                    {state.map((ranking) => {
                        let date = new Date(ranking.release_date).toDateString();
                        let dateNow = date.split(" ");
                        
                        return (<tr key={ranking.id}>
                            <td>{ranking.title}</td>
                            <td>{ranking.vote_average} ⭐</td>
                            <td>{ranking.popularity}</td>
                            <td>{`${dateNow[2]} / ${dateNow[1]} / ${dateNow[3]}`}</td>
                        </tr>)
                    })}
                </table>
            </div>
        </>
    );
};

export default Ranking;