import './App.css';
import './styles/style1.css'
import './styles/style2.css'
import Header from './elements/Header.jsx';
import MiddleContainer from './elements/MiddleContainer.jsx';
import DialogItem from './elements/DialogItem.jsx';
import Message from './elements/Message.jsx';
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

function App(props) {
  let messageElements = props.data.dialogs.map(dialog =><Message name={dialog.name} text={dialog.message}/>);
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
