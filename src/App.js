import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Profile from "./pages/ProfilePage/ProfilePage"
import Board from "./pages/BoardPage/BoardPage"
import RedirectToProfile from "./pages/RedirectToProfile"


function App() {
  return (
    <BrowserRouter>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Header />
        <div className="">
        <Switch>
          <Route path="/profile">
            <RedirectToProfile />
          </Route>
          <Route path="/:username/:boardname">
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
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
