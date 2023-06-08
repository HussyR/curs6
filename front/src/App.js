import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import './App.css';
import './styles/style1.css'
import './styles/style2.css'
import Header from './elements/Header.jsx';
import MiddleContainer from './elements/MiddleContainer.jsx';
import Main from './elements/Main.jsx';
import FoodCard from './elements/FoodCard';
import first from './assets/first.jpeg';
import pepperoni from './assets/peperoni.jpeg';
import carbonara from './assets/karbonara.jpeg';
import margo from './assets/margo.jpeg';
import diablo from './assets/diablo.jpeg';
import mix from './assets/mix.jpeg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
    
    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    AuthService.logout();
    this.setState({
      showAdminBoard: false,
      currentUser: undefined,
    });
  }

  render() {
    const { currentUser, showAdminBoard } = this.state;

    return (
        <BrowserRouter>
    <div className="App">
      <Header />

      {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                    Все бронирования
                </Link>
              </li>
            )}
      {currentUser && (
              <li className="nav-item">
                <Link to={"/book"} className="nav-link">
                  Мои бронирования
                </Link>
              </li>
            )}

      {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  Выйти
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Войти
                </Link>
              </li>

            </div>
          )}

      <Routes>
        <Route path="/menu" element={
          <div class="middle_container">
            <div class="content_container">
              <FoodCard title="Сырная" url={first} description="Моцарелла, сыры чеддер и пармезан, соус альфредо" price="349"/>
              <FoodCard title="Пепперони" url={pepperoni} description="Пикантная пепперони, увеличенная порция моцареллы, томатный соус" price="399"/>
              <FoodCard title="Карбонара" url={carbonara} description="Бекон, сыры чеддер и пармезан, красный лук, соус альфредо, итальянские травы" price="449"/>
              <FoodCard title="Маргарита" url={margo} description="Моцареллы, томаты, итальянские травы, томатный соус" price="249"/>
              <FoodCard title="Диабло" url={diablo} description="Острая чоризо, халапеньо, митболы, томаты, сладкий перец, лук, моцарелла, томатный соус" price="449"/>
              <FoodCard title="Микс" url={mix} description="Бекон, митболы, maпепперони, моцарелла, томаты, сладкий перец, красный лук, чеснок, томатный соус" price="449"/>
            </div>
          </div>
        }/>
        <Route path="/about" element={
          <div>
            <h1>Наши новости</h1>
            <MiddleContainer />
            <Main />
          </div>
        }/>
        <Route path="/reviews" element={
           <h1>Наши новости</h1>
        }/>
      </Routes>
      
    </div>
    </BrowserRouter>
    );
  }

}



function App(props) {
  
  

  return (
    
    
    <BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/menu" element={
          <div class="middle_container">
            <div class="content_container">
              <FoodCard title="Сырная" url={first} description="Моцарелла, сыры чеддер и пармезан, соус альфредо" price="349"/>
              <FoodCard title="Пепперони" url={pepperoni} description="Пикантная пепперони, увеличенная порция моцареллы, томатный соус" price="399"/>
              <FoodCard title="Карбонара" url={carbonara} description="Бекон, сыры чеддер и пармезан, красный лук, соус альфредо, итальянские травы" price="449"/>
              <FoodCard title="Маргарита" url={margo} description="Моцареллы, томаты, итальянские травы, томатный соус" price="249"/>
              <FoodCard title="Диабло" url={diablo} description="Острая чоризо, халапеньо, митболы, томаты, сладкий перец, лук, моцарелла, томатный соус" price="449"/>
              <FoodCard title="Микс" url={mix} description="Бекон, митболы, maпепперони, моцарелла, томаты, сладкий перец, красный лук, чеснок, томатный соус" price="449"/>
            </div>
          </div>
        }/>
        <Route path="/about" element={
          <div>
            <h1>Наши новости</h1>
            <MiddleContainer />
            <Main />
          </div>
        }/>
        <Route path="/reviews" element={
           <h1>Наши новости</h1>
        }/>
      </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
