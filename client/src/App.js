import "./App.css";
import { Switch, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import NavBar from "./components/NavBar/NavBar";
import NotFound from "./components/NotFound/NotFound";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <>
      {/* Componente para manejar la ruta de inicio */}
      {location.pathname === "/" ? <Landing /> : <NavBar />}
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/detail/:idRace" component={Detail} />
        <Route exact path="/form" component={Form} />
        <Route exact path="/about" component={About} />
        {location.pathname !== "/" && (
          <Route exact path="*" component={NotFound} />
        )}
      </Switch>
      <Footer />
    </>
  );
}

export default App;
