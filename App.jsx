import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PhaseProgram from './pages/PhaseProgram';
import InstantFunding from './pages/InstantFunding';
import Payment from './components/Payment';
import LiveChat from './components/LiveChat';

function  App() {
  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/phase-program" element={<PhaseProgram />} />
          <Route path="/instant-funding" element={<InstantFunding />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
        <LiveChat />
      </Router>
    </ChakraProvider>
  );
}

export default App;