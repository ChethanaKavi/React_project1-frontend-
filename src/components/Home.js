import React from 'react';
import styled from 'styled-components';
import aboutBackgroundImage from './about-background-image.png'; // Adjust the path as needed

const HeroSection = styled.div`
    background-image: url(${aboutBackgroundImage});
    background-size: cover;
    background-position: center;
    height: 400px; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #fff;
`;

const Heading = styled.h1`
    font-size: 3em;
    margin-bottom: 0.5em;
    font-family: 'Cursive', cursive; /* Use a cursive font */
`;

const SubHeading = styled.p`
    font-size: 1.5em;
    margin-bottom: 1em;
`;

const StyledButton = styled.input`
    background-color: #FFD700;
    color: black;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1em;
`;

function Home() {
    let timeOfDay;
    const date = new Date();
    const hours = date.getHours();

    if (hours < 12) {
        timeOfDay = 'Good Morning! Welcome to our Restaurant!';
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = 'Good Afternoon! Welcome to our Restaurant!';
    } else {
        timeOfDay = 'Good Evening! Welcome to our Restaurant!';
    }

    return (
        <div>
            <HeroSection>
                <Heading>{timeOfDay}</Heading>
                <SubHeading>Your Favorite Food Delivered Hot & Fresh</SubHeading>
                <StyledButton type="button" value="Order Now" />
            </HeroSection>

            <div style={{ textAlign: 'center', padding: '20px' }}>
                <h2>Our Specialties</h2>
                <p>Healthy switcher chefs do all the prep work, like peeling, chopping & marinating, so you can cook a fresh meal.</p>
            </div>
        </div>
    );
}

export default Home;
