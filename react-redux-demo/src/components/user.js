import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/userSlice';
import { Link } from 'react-router-dom';

const UserForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setUser({ name, email }));
        setName('');
        setEmail('');
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Add User</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <input
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={styles.input}
                    required
                />
                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={styles.input}
                    required
                />
                <button type="submit" style={styles.button}>
                    Submit
                </button>
            </form>
            <Link to="/view-user">
                <button style={styles.linkButton}>View User</button>
            </Link>
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        maxWidth: '400px',
        margin: 'auto',
        textAlign: 'center',
        border: '1px solid #ccc',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9',
    },
    title: {
        marginBottom: '20px',
        fontSize: '1.8rem',
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
    button: {
        padding: '10px 15px',
        fontSize: '1rem',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: '#007BFF',
        color: '#fff',
        cursor: 'pointer',
    },
    linkButton: {
        marginTop: '10px',
        padding: '10px 15px',
        fontSize: '1rem',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: '#28a745',
        color: '#fff',
        cursor: 'pointer',
        textDecoration: 'none',
    },
};

export default UserForm;
