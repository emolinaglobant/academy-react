import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import Home from '../src/pages/Home/Home';
import Login from './Components/Login/Login';
import Profile from './Components/Profile/Profile';
import Ranking from './Components/Ranking/Ranking';
import List from './Components/ListFilms/List';
import Footer from './Components/Footer/Footer';
import AboutFilm from './Components/AboutFilm/AboutFilm';

import logo from './images/logo-web-film-nav.svg';
import userImg from './images/user.webp';
import './fontello/css/fontello.css';

function App() {
  let topRef = useRef(null);
  const [scroll, setScroll] = useState(0);
  const [menuResp, setMenuResp] = useState(false);
  const [profile, setProfile] = useState(false);
  const [avatar, setAvatar] = useState(userImg);
  const stateLogin = useSelector(state => state.loginReducer.stateLogin);
  const stateAvatar = useSelector(state => state.loginReducer.avatarChoosers);

  useEffect(() => {
    stateAvatar.map((avatar) => setAvatar(avatar.img))
  },[stateAvatar])

  useEffect(() => {
    setProfile(false);
  },[stateLogin])

  const scrollNav = () => {
    const posicion = window.pageYOffset;
    setScroll(posicion);
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollNav);
  }, [scroll]);

  return (
    <div ref={topRef}>
      <Router basename={process.env.PUBLIC_URL}>
        <header className={`container-menu ${scroll > 20 ? 'scroll' : null}`}>
          <nav className={menuResp ? 'nav-menu-resp' : 'nav-menu'} onClick={() => setMenuResp(false)}>
            <ul>
              <li>
                <Link href='#top-menu' to='/' className='home' onClick={() => { topRef.current.scrollIntoView(true) }}>
                  <span className='icon-home'></span>home
                </Link>
              </li>
              <li>
                <Link to='/Ranking' className='ranking' onClick={() => { topRef.current.scrollIntoView(true) }}>
                  <span className='icon-trophy'></span>ranking
                </Link>
              </li>
              <li>
                <Link to='/List' className='films' onClick={() => { topRef.current.scrollIntoView(true) }}>
                  <span className='icon-video'></span>films
                </Link>
              </li>
            </ul>
              <figure>
                <img className='logo-nav' src={logo} alt='LogoFilms'></img>
              </figure>
          </nav>
            <section className="login">
              {stateLogin ? 
                <figure>
                  <img className='profile' src={avatar} alt='profile' onClick={()=> setProfile(!profile)}></img>
                </figure>
                :
                <Link to='/Login' onClick={() => { topRef.current.scrollIntoView(true) }}>
                  <button className='btnLogin'>Login</button>
                </Link>
              }
            </section>

            <p className='title-menu'>menu</p>

            <button className='btn-menu' onClick={() => setMenuResp(!menuResp)}>
              <i className={menuResp ? 'icon-cancel-circled' : 'icon-menu'}></i>
            </button>
        </header>

        {profile && <Profile /> }

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/list' element={<List />} />
          <Route path='/ranking' element={<Ranking />} />
          <Route path='/AboutFilm/:id' element={<AboutFilm />} />
        </Routes>
      </Router>
      <Footer />
    </div>

  );
}

export default App;
