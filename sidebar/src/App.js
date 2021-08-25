import "./App.css";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Concerns from "./Components/UserPages/Student/Concerns";
import Categories from "./Components/UserPages/Student/Categories";
import Login from "./Components/LoginPage/Login";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <div>
            <Sidebar />

            <Route exact path="/Student/" component={Concerns}></Route>
            <Route path="/Student/categories" component={Categories}></Route>
          </div>
        </Switch>
      </Router>
    </>
  );
}

export default App;
