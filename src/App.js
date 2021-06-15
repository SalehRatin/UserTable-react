import Home from "./home/home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import EditUserPage from "./editUser/editUserPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path={"/:userId"} component={EditUserPage} />
          <Route path={"/"} component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
