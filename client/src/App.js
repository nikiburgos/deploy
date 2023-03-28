import './App.css';
import { BrowserRouter, Route} from 'react-router-dom';
import Landing from './components/LANDING/Landing';
import Home from './components/HOME/Home';
import CreateVideogame from './components/CREATEVIDEOGAME/CreateVideogame';
import Detail from './components/DETAIL/Detail';
import About from './components/ABOUT/About';

// import { useLocation } from 'react-router-dom';

function App() {
  // const location = useLocation();

  return (
    <BrowserRouter>
      <div className="App">
      {/* <h1>VIDEOGAMES PI</h1> */}
      
         
          <Route exact path="/" component={Landing} /> 
          <Route path = "/home" component = {Home}  />
          <Route path="/videogame" component={CreateVideogame} />
          <Route exact path="/videogames/:id" component= {Detail} />
          <Route path="/about" component= {About} />

          
        
      </div>
    </BrowserRouter>
  );
}

export default App;