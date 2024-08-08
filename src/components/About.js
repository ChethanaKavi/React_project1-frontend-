import React from 'react';
import { Link, Route, Routes } from "react-router-dom";
import aboutImage from './R.jpg'; // Ensure the correct path to your image
import History from "./AboutHistory";
import Team from "./AboutTeam";
import Values from "./AboutValues";
import '../Styles/About.css';

const About = () => {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
            <section style={{ padding: '40px 20px', backgroundColor: '#fff' }}>
                <h1 style={{ fontSize: '2.5em', color: '#28a745', fontFamily: 'Ink Free', textAlign: 'center' }}>WHAT MAKES US DIFFERENT</h1>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', marginTop: '20px' }}>
                    <div style={{ flex: '1', paddingRight: '20px' }}>
                        <p style={{ fontFamily: 'Cursive', fontSize: '1.2em', lineHeight: '1.6' }}>
                            Need an excuse to put your feet up and get a whiff of the most exemplary fusion food of both Indian and Lankan Cuisine?
                            Come to the Al-Mina Indian Family Restaurant (Formally Al-Maas), which draws inspiration from the warmth, hospitality,
                            and delectable traditional Indian delicacies and as well as Sri Lankan, all in one place and one plate.
                        </p>
                        <p style={{ fontFamily: 'Cursive', fontSize: '1.2em', lineHeight: '1.6' }}>
                            Tikka masala, Chicken Kurma, Chicken Chettined and few unusual ones cooked to your liking. The seafood is like a breath
                            of fresh air interwind with very light and succulent novel recipes. The beverages are not to be left far behind. The restaurant
                            has an outstanding ambiance which gives you a refreshing and welcoming feel.
                        </p>
                        <input type="button" value="Contact Us" style={{ backgroundColor: '#FFD700', color: 'black', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: '20px' }}></input>
                    </div>
                    <div style={{ flex: '1' }}>
                        <img src={aboutImage} alt="about" style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px' }} />
                    </div>
                </div>
            </section>
            <nav className="aboutNav">
                <Link to="/History">History</Link>
                <Link to="/Team">Team</Link>
                <Link to="/Values">Values</Link>

            </nav>


            <div className="aboutContent">
                <Routes>
                    <Route path="history" element={<History />} />
                    <Route path="team" element={<Team />} />
                    <Route path="values" element={<Values />} />
                </Routes>
            </div>


        </div>
    );
};

export default About;
