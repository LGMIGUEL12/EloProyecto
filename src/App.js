// import logo from './logo.svg';
import './App.css';
import Articles from './Articles';
import Header from './componentes/Header';
import MenuDerecho from './componentes/MenuDerecho';

function App() {
  return (
    <div className="">
  <div className=" w-full z-10">
    <Header />
  </div>
  <div className="flex mt-16"> {/* Deja espacio para el Header */}
    <div className="w-4/6">
      <Articles />
    </div>
    <div className=" fixed right-0 top-16"> {/* Ajusta el top para el MenuDerecho */}
      <MenuDerecho />
    </div>
  </div>
</div>
  );
}

export default App;
