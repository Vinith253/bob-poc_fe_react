import React from 'react';
// import logo from "./logo.svg";
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import AuthLayout from './components/layout/authLayout/AuthLayout';
import PrimaryDetailScreen from './pages/primaryDetailScreen/PrimaryDetailScreen';
import SecondaryDetailScreen from './pages/secondaryDetailScreen/SecondaryDetailScreen';
import VerificationScreen from './pages/verificationScreen/VerificationScreen';
import BankListScreen from './pages/bankList/BankListScreen';
import BankAccountDetailScreen from './pages/bankAccountDetailScreen/BankAccountDetailScreen';
import LandingScreen from './pages/landingScreen/LandingScreen';
import OtpVerificationScreen from './pages/otpVerificationScreen/OTPVerificationScreen';
import { CardList } from './pages/cardListScreen/CardListScreen';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/" element={<PrimaryDetailScreen />} />
        <Route path="/secondary" element={<SecondaryDetailScreen />} />
        <Route path="/verification" element={<VerificationScreen />} />
        <Route path="/banklist" element={<BankListScreen />} />
        <Route
          path="/bankaccountdetail"
          element={<BankAccountDetailScreen />}
        />
        <Route path="/landingscreen" element={<LandingScreen />} />
        <Route path="/otpverification" element={<OtpVerificationScreen />} />
      </Route>
      <Route path="/cardlist" element={<CardList />}></Route>
    </Routes>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
