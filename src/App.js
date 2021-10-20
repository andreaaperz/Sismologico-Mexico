import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import TopNav from "./components/TopNav";
import Table from "./pages/InformationTable";
import NavPanel, { NavOption } from "./components/NavPanel";
import Charts from "./components/Charts";

function App() {
  return (
    
    <div>
      <Router>
        <TopNav />

        <div className="app-grid">
          <NavPanel>
            <NavOption to="/home">Tabla</NavOption>
            <NavOption to="/utteranceMissed">Mapa</NavOption>
            <NavOption to="/charts">Estadísticas</NavOption>
          </NavPanel>
          <Switch>
            <Route path="/home"><Table/></Route>
            <Route path="/utteranceMissed"></Route>
            <Route path="/charts"><Charts/></Route>
            <Route exact path="/">
              {/* <Redirect to="/home" /> */}
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
