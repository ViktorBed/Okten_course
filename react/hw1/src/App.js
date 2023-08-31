import './App.css';
import Simpsons from "./Components/Simpsons";
import Users from "./Components/Users";

// Взяти масив usersList.
//     Створити компонент,котрий характеризує юзера.
//     Створити компонент,котрий характеризує підоб'єкт юзера address. Використати в компоненті юзера.
// Створити компонент,котрий характеризує підоб'єкт адреси юзера geo. Використати в компоненті адреси.
// Вкладеність компонентів : App->Users->User->Address->Geo
// Вивести всі об'єкти з масиву
function App() {
  return (
   <div>
     <Simpsons/>
       <Users/>
   </div>
  );
}
export default App;
