import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Posts from "./components/Posts/Posts";
import './App.css'


function App() {
  return (
    <div className="app">
      <Header />
      <Banner />
      <Posts />
      <div className="pen lg:hidden">
        <i className="fas fa-pen"></i>
      </div>
    </div>
  );
}

export default App;
