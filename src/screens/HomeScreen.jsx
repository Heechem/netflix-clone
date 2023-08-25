import React from 'react';
import './HomeScreen.css';

import requests from '../Requests';
import Row from '../Row';
import Nav from '../Nav';
import Banner from '../Banner';

function HomeScreen() {
  return (
    <div className="homescreen">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
      />
      <Row
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
      />
      <Row
        title={'Comedy Movies'}
        fetchUrl={requests.fetchComedyMovies}
      />
      <Row
        title="Horror Movie"
        fetchUrl={requests.fetchHorrorMovies}
      />
      <Row
        title="Romance Movie"
        fetchUrl={requests.fetchRomanceMovies}
      />
      <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
      />
    </div>
  );
}

export default HomeScreen;
