import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import TopNav from "./components/TopNav";
import Table from "./pages/Table.page";
import NavPanel, { NavOption } from "./components/NavPanel";
import Charts from "./components/Charts";
import Mapa from "./components/Map";

function App() {
  return (
    <div>
      <Router>
        <TopNav />

        <div className="app-grid">
          <NavPanel>
            <NavOption to="/tabla">Tabla</NavOption>
            <NavOption to="/mapa">Mapa</NavOption>
            <NavOption to="/charts">Estadísticas</NavOption>
          </NavPanel>
          <Switch>
            <Route path="/tabla"><Table/></Route>
            <Route path="/mapa"><Mapa/></Route>
            <Route path="/charts"><Charts/></Route>
            <Route exact path="/">
               <Redirect to="/tabla" />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
