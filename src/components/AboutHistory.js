import React from 'react';
import historyImage from './History.jpg';
import '../Styles/AboutHistory.css';

const AboutHistory = () => {
    return (
        <div className="history">
            <h2>Our History</h2>
            <div className="history-content">
                <img src={historyImage} alt="History" className="history-image" />
                <div className="history-text">
                    <p>Foodies Restaurant has been serving delicious, high-quality food since it first opened its doors in 2001. Our journey began in a small neighborhood in Wattala, where our passion for creating unique and flavorful dishes quickly gained a loyal following.</p>
                    <p>Over the years, we have grown and expanded, but our commitment to excellence and innovation in the kitchen has remained unchanged. We pride ourselves on using fresh, locally sourced ingredients to craft dishes that not only satisfy the taste buds but also nourish the body and soul.</p>
                    <p>As we look to the future, we remain dedicated to maintaining the traditions and values that have made Foodies Restaurant a beloved dining destination, while continuously exploring new culinary horizons.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutHistory;
