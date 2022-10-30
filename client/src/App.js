// import logo from './logo.svg';
import React from 'react';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import  {  Routes, Route } from 'react-router-dom';

import './App.css';
import RegisterUser from "./pages/RegisterUser";
import LoginPage from "./pages/LoginPage";
import GuessGame from "./pages/Guess";
import Locations from "./pages/Locations";
import Navbar from './components/Navbar';
import HomePage from "./pages/Home";
// import Donate from "./pages/donate";

import AllAnimals from "./pages/AllAnimals/Animal";
import Footer from './components/Footer';
import User from "./pages/User/user";
import { apolloClient } from "./ApolloClient";

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
     <ApolloProvider client={apolloClient}>
      {/* <Router> */}
    <Navbar/> 
    <Routes>    
        <Route path="/" element={<HomePage/>} />
        <Route path="/register" element={<RegisterUser></RegisterUser>} />
        <Route path="/login" element={<LoginPage></LoginPage>} />  
        <Route path="/locations" element={<Locations></Locations>} />  
        <Route path="/user" element={<User/>} /> 
        {/* <Route path="/donate" element={<Donate/>} />  */}
        <Route path="/guess" element={<GuessGame/>} />  
        <Route path="/allanimals" element={<AllAnimals/>} />  
    </Routes>
    {/* </Router> */}
    <Footer />
    </ApolloProvider>
    </>
  );
}

export default App;

