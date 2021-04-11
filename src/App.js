import "./default.scss"
import { Route, Switch } from "react-router"

//layouts
import MainLayout from './layouts/MainLayout/MainLayout';

//pages
import Homepage from "./pages/HomePage/Homepage";
import RegistrationPage from "./pages/RegistrationPage/Registration";

function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/" render={() => (
            <MainLayout>
              <Homepage />
            </MainLayout>
          )} />
          <Route path="/registration" render={() => (
            <MainLayout>
              <RegistrationPage />
            </MainLayout>
          )} />
        </Switch>
    </div>
  );
}

export default App;
