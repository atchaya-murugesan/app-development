import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Agriculture from './components/Agriculture';
import Aquaculture from './components/Aquaculture';
import Apiculture from './components/Apiculture';
import AnimalHusbandry from './components/AnimalHusbandry';
import Plantsandsoil from './components/Plantsandsoil';
import Agribusiness from './components/Agribusiness';
import Overview from './components/overview';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createContext } from 'react';
import WeatherApp from './components/WeatherApp';

import FertilizerForm from './components/FertilizerForm';

export const Context = createContext(null);

function App() {
  return (
    <div className="App">
     <Context.Provider value={"SMARTHARVEST"}>
        <BrowserRouter>
          <Header />
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/agriculture" element={<Agriculture />} />
            <Route path="/aquaculture" element={<Aquaculture />} />
            <Route path="/apiculture" element={<Apiculture />} />
            <Route path="/animal-husbandry" element={<AnimalHusbandry />} />
            <Route path="/agribusiness" element={<Agribusiness />} />
            <Route path="/plantsandsoil" element={<Plantsandsoil />} />
            <Route path="/agriculture/crop-management/overview" element={<Overview />} />
            <Route path="/weatherapp" element={<WeatherApp/>} />
            <Route path="/sma" element={<FertilizerForm/>} />
            <Route path="agribuisn" element={<Agribusiness/>} />
            <Route path="/overvi" element={<overview/>} />
            <Route path="/agriculture/overview" element={<overview />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;
