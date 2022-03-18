import GameCard from './GameCard';
import { Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

function List({ gamedata }) {
    const history = useHistory();
    const q = history.location.search.replace("?q=", "");

    return(
        <>
            <Grid container justifyContent="center">
            {
                q === ""
                ?
                gamedata.map((game, index) => {

                    let url = `${process.env.REACT_APP_GAME_IMG}`
                    let gameIndex = game.url.split('/')[game.url.split('/').length - 2]
    
                    return <GameCard 
                    key={index} 
                    info={`/game-info/${gameIndex}/${game.name}`} 
                    name={game.name} 
                    image={`${url}${gameIndex}.png?raw=true`} />
                })
                :
                gamedata.map((game, index) => {
                    if(game.name.includes(q)){

                    let url = `${process.env.REACT_APP_GAME_IMG}`
                    let gameIndex = game.url.split('/')[game.url.split('/').length - 2]
    
                    return <GameCard 
                    key={index} 
                    info={`/game-info/${gameIndex}/${game.name}`} 
                    name={game.name} 
                    image={`${url}${gameIndex}.png?raw=true`} />
                    }
                    return null;
                })
            }
            </Grid>
        </>
    );
}

export default List;