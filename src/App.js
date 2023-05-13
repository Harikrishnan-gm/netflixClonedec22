
import './App.css';
import Banner from './components/Banner';
import Firstrow from './components/Firstrow';
import Nav from './components/Nav';

import requests from './request';

function App() {
  return (
    <div className="App">
        <Nav/>
        <Banner/> 
        <Firstrow isPoster={true} title={'Netflix Originals'} fetchUrl={requests.fetchNetflixOriginals}/>
        <Firstrow title={'Trending'} fetchUrl={requests.fetchTrending}/>
        <Firstrow title={'Top Rated'} fetchUrl={requests.fetchTopRated}/>
        <Firstrow title={'Romance'} fetchUrl={requests.fetchRomanceMovies}/>
        <Firstrow title={'Action Movies'} fetchUrl={requests.fetchActionMovies}/>
        <Firstrow title={'Comedy'} fetchUrl={requests.fetchComedyMovies}/>
        <Firstrow title={'Documentary'} fetchUrl={requests.fetchDocumentaries}/>
        <Firstrow title={'Horror'} fetchUrl={requests.fetchHorrorMovies}/>
        
       
    </div>
  );
}

export default App;
