
import './App.css';
import Firstrow from './components/Firstrow';
import requests from './request';

function App() {
  return (
    <div className="App">
        <h1>Netflix</h1>
        <  Firstrow title={'Netflix Originals'} fetchUrl={requests.fetchNetflixOriginals}/>
      
    </div>
  );
}

export default App;
