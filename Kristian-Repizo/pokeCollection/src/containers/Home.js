import React, { Component } from 'react';
import List from '../components/List';
import NavBar from '../components/NavBar';
import Pagination from '../components/Pagination';
import '../styles/App.css';
import Footer from '../components/Footer';

import axios from 'axios';


class Home extends Component{

    state = {
        gameData: [],
        currentOffset: 0,
        pageConter: 1
    }

    componentDidMount(){
        this.fetchData();
    }

    componentDidUpdate(prevState) {
        const { currentOffset} = this.state;
        if (currentOffset !== prevState.currentOffset){
            if(currentOffset < 0) {
                this.setState({
                    currentOffset: 0,
                    pageConter: 1
                })
                this.fetchData(currentOffset);
            }
        this.fetchData(currentOffset); 
        }
    }

    fetchData = (offset = 0) => {
        const url = `${process.env.REACT_APP_GAME_API_BASE_URL}pokemon`;
        let params = {
            offset: offset,
            limit: 20
        }

        axios.get(url, {params})
        .then(res =>{
            const {results} = res.data;

            this.setState({
                gameData: results,
            })
        })
        .catch(error => {
            console.log(error);
        })
    }

    increment=() => {
        const { currentOffset, pageConter } = this.state;
        this.setState({
            currentOffset: currentOffset + 20,
            pageConter: pageConter + 1
        }); 
    }

    decrement=() => {
        const { currentOffset, pageConter } = this.state;
        this.setState({
            currentOffset: currentOffset - 20,
            pageConter: pageConter - 1
        });
    }

    render(){

        const { gameData, pageConter } = this.state;

        return(
            <>
                <NavBar />
                <h1 className="title">Pokémon List</h1>
                <Pagination 
                    increment={this.increment} 
                    decrement={this.decrement}
                    page={pageConter}
                />
                <List gamedata={gameData} />
                <Pagination 
                    increment={this.increment} 
                    decrement={this.decrement}
                    page={pageConter}
                />
                <Footer />
            </>
        );
    }
}

export default Home;