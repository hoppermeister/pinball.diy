import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderPage from './sections/HeaderPage';
import FlipperFans from './sections/FlipperFans';
import AntiFatigueMat from './sections/AntiFatigueMat';
import SiderailLights from './sections/SiderailLights';
import StreamRig from './sections/StreamRig';
import CupHolder from './sections/CupHolder';

function App() {
  return (
    <div className="app">
      <HeaderPage />
      <FlipperFans />
      <CupHolder />
      <AntiFatigueMat />
      <SiderailLights />
      <StreamRig />
    </div>
  );
}

export default App;
