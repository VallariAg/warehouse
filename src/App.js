import './App.css';
import Header from "./components/Header";
import Profile from "./pages/ProfilePage/Profile"
import Board from "./pages/BoardPage/BoardPage"
import RedirectToProfile from "./pages/ProfilePage/RedirectToProfile"
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Header />

        <Switch>
          <Route path="/profile">
            <RedirectToProfile />
          </Route>
          <Route path="/board">
            <Board />
          </Route>
          <Route path="/:username">
            <Profile />
          </Route>
          <Route path="/">
            <div>root</div>
          </Route>
        </Switch>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
