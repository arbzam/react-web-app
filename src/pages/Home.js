import React from 'react';
import Header from '../components/Header/Header';
import Advisor from '../components/Advisor/Advisor';
import Package from '../components/Package/Package';
const Home = () => {
document.title ="Startup - Home";
    return (
        <>
    <Header />
     <Advisor />
    <Package /> 
        </>
    )
}
export default Home;
