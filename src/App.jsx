import "./components/Header/app";
import "./App.css";
import Header from "./components/Header/app";
import "./components/img/wallpapersden.com_elden-ring-hd-age-of-stars_2560x1440.jpg";
import SearchBar from "./components/searchBar";
import Footer from "./components/footer/footes";

function App() {
  return (
    <div className="App">
      <div className="box">
        <Header />
        <SearchBar />
      </div>
      <Footer />
    </div>
  );
}

export default App;
