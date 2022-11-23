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
import MainLayout from './components/layout/mainLayout/MainLayout';

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
        {/* <Route path="/landingscreen" element={<LandingScreen />} /> */}
        <Route path="/otpverification" element={<OtpVerificationScreen />} />
      </Route>
      <Route path="/" element={<MainLayout />}>
        <Route path="landingscreen" element={<LandingScreen />} />
      </Route>
      <Route path="/cardlist" element={<CardList />}></Route>
    </Routes>
  );
}

export default App;
