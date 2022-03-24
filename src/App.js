import './App.css';
import Nav from './components/NAV/Nav';
import Home from './components/Home/Home';
import CountryDetails from './components/CountryDetails/CountryDetails';
import NoPage from './components/NoPage/NoPage';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <header className="App-header">
        <Nav />
      </header>

      <Routes>
        <Route index path="/" element={<Home />} />             
        <Route path=":CountryName" element={<CountryDetails />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
}

export default App;
