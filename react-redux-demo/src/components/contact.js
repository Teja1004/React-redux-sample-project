import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        setFormData({ name: '', email: '', message: '' }); // Clear form after submission
        alert('Thank you for contacting us!');
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Contact Us</h1>
            <form onSubmit={handleSubmit} style={styles.form}>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    style={styles.input}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    style={styles.input}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    style={styles.textarea}
                    required
                />
                <button type="submit" style={styles.button}>
                    Send Message
                </button>
            </form>
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        maxWidth: '600px',
        margin: 'auto',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
    },
    title: {
        fontSize: '2.5rem',
        marginBottom: '20px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    input: {
        marginBottom: '15px',
        padding: '10px',
        fontSize: '1rem',
        borderRadius: '5px',
        border: '1px solid #ccc',
    },
    textarea: {
        marginBottom: '15px',
        padding: '10px',
        fontSize: '1rem',
        borderRadius: '5px',
        border: '1px solid #ccc',
        height: '100px',
    },
    button: {
        padding: '10px 20px',
        fontSize: '1rem',
        backgroundColor: '#007BFF',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

export default Contact;
