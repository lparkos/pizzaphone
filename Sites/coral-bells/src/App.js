import { BrowserRouter as Router, Route, HashRouter} from "react-router-dom";
import { useHistory } from "react-router-dom";
import Compact from './components/compact/compact';
import Billboard from './components/billboard/billboard';
import './App.scss';


function App() {
  let history = useHistory();

  return (
    <HashRouter>
    <div className="App">
      <img id="header" alt= "" src="./img/header.png"/>
      <div>
        <Route exact path="/"><Compact /></Route>
        <Route exact path="/billboard"><Billboard /></Route>
      </div>
      <img id="footer" alt= "" src="./img/footer.png"/>
    </div>
    </HashRouter>
  );
}

export default App;
