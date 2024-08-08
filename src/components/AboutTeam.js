import React from 'react';
import team1 from './team1.png';
import team2 from './team2.jpg';

import '../Styles/AboutTeam.css';

const AboutTeam = () => {
    return (
        <div className="team">
            <h2>Our Team</h2>
            <div className="team-member">
                <img src={team1} alt="Team Member 1" className="team-image" />
                <div className="team-info">
                    <h3>John Doe</h3>
                    <p>CEO</p>
                </div>
            </div>

            <div className="team-member">
                <img src={team2} alt="Team Member 2" className="team-image" />
                <div className="team-info">
                    <h3>Jane Smith</h3>
                    <p>CTO</p>
                </div>
            </div>

        </div>
    );
};

export default AboutTeam;
