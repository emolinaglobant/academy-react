import React, { useState } from 'react';
import '../styles/navBar.css';
import { AppBar, Grid, Toolbar } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SearchIcon from '@material-ui/icons/Search';
import { Link, useHistory } from 'react-router-dom';

function NavBar(){
  const [searching, saveSearch] = useState("");
  const history = useHistory();

  const search = () => {
    if(searching.trim() === ""){
      return;
    }
    history.push(`/Games/searching?q=${searching}`)
  }

  return(
    <AppBar id="style" className="navColor" color="default" position='static'>
      <Toolbar>
        <Grid container>
          <section className="con-title">
            <Link to='/Games'>
              <label className="nav-title">PokeCollection</label>
            </Link>
          </section>
          <section className="searchBar">
            <input
              type="text"
              placeholder="Search"
              className="textField"
              name="searching"
              value={searching}
              onChange={e => saveSearch(e.target.value)}
            />
            <Tooltip title='search'>
              <section className="searchIcon">
                <button className="searchButton" onClick={search}><SearchIcon /></button>
              </section>
            </Tooltip>
          </section>
        </Grid>
        <Tooltip title='exit' arrow>
          <Link to='/'>
            <section className="exit-button">
              <ExitToAppIcon fontSize="large"/>
            </section>
          </Link>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
    
};

export default NavBar;