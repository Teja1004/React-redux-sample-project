import React from 'react';

const About = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>About Us</h1>
            <p style={styles.description}>
                Welcome to our website! We are dedicated to providing the best services to our customers.
                Our team of experts works hard to ensure high-quality and satisfaction. Explore our platform
                and feel free to reach out if you have any questions.
            </p>
            <ul style={styles.list}>
                <li>High-Quality Products</li>
                <li>Customer Satisfaction</li>
                <li>Expert Support Team</li>
            </ul>
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        maxWidth: '800px',
        margin: 'auto',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
    },
    title: {
        fontSize: '2.5rem',
        marginBottom: '20px',
    },
    description: {
        fontSize: '1.2rem',
        lineHeight: '1.8',
        marginBottom: '20px',
    },
    list: {
        listStyleType: 'none',
        padding: 0,
        fontSize: '1.1rem',
    },
};

export default About;
