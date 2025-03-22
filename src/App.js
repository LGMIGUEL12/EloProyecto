// import logo from './logo.svg';
import './App.css';
import Articles from './Articles';
import BlogPosts from './componentes/BlogPosts';
import Header from './componentes/Header';
import MenuDerecho from './componentes/MenuDerecho';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="w-full z-10">
        <Header />
      </div>
      <div className="flex-grow grid grid-cols-12 gap-4 mt-16">
        <div className="col-span-9">
          <Articles />
        </div>
        <div className="col-span-3 sticky top-16 h-screen">
          <MenuDerecho />
        </div>
      </div>
      <BlogPosts />
    </div>
  );
}

export default App;
