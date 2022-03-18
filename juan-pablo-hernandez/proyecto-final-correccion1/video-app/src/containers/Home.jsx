import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import '../assets/styles/App.css';

const Home = ({ myList }) => {
  
  const BASE_URL = "https://api.pexels.com/videos/"
  const [popularVideos, setPopularVideos] = useState([]);
  const [trendVideos, setTrendVideos] = useState([]);

  useEffect(() => {
    
    fetch(`${BASE_URL}popular`,{
      contentType: 'application/json',
      headers: {
        Authorization: "563492ad6f917000010000015c20c1ce00ad4741ac335a633d4d659a"
      }
    })
      .then(resp => {
        return resp.json();
      })
      .then(data => {
        setPopularVideos(data.videos)
      })
  }, [])


  useEffect(() => {
    
    fetch(`${BASE_URL}search?query=trend`,{
      contentType: 'application/json',
      headers: {
        Authorization: "563492ad6f917000010000015c20c1ce00ad4741ac335a633d4d659a"
      }
    })
      .then(resp => {
        return resp.json();
      })
      .then(data => {
        setTrendVideos(data.videos)
      })
  }, [])

  return (
    <>
      <Header />
      <h1>¿Qué quieres ver hoy?</h1>
      {myList.length > 0 &&
        <Categories title="Mi Lista">
          <Carousel>
            {myList.map(item =>
              <CarouselItem 
                key={item.id} 
                {...item} 
                isList
              />
            )}
          </Carousel>
        </Categories>
      }
      <Categories title="Populares">
        <Carousel>
          {popularVideos.map(video => 
            <CarouselItem 
              key={video.id} 
              {...video}
            />
          )}
        </Carousel>
      </Categories>
      <Categories title="Tendencias VideoApp">
        <Carousel>
        {trendVideos.map(video => 
          <CarouselItem 
            key={video.id} 
            {...video}
          />
        )}
        </Carousel>
      </Categories>
    </>
  );
}

const mapStateToProps = state => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(Home);