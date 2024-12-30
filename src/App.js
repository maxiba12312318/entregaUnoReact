import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import NavBar from './componentes/navBar/NavBar';
import './App.css';

function App() {
  return (
    <div className="app"> {/* Corrige el typo: classname -> className */}
      <NavBar />
      <ItemListContainer mensaje="bienvenidos" />
    </div>
  );
}

export default App;
