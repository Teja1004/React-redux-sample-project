import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const UserDetails = () => {
    const user = useSelector((state) => state.user);

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>User Details</h2>
            {user.name && user.email ? (
                <div style={styles.details}>
                    <p>
                        <strong>Name:</strong> {user.name}
                    </p>
                    <p>
                        <strong>Email:</strong> {user.email}
                    </p>
                </div>
            ) : (
                <p>No user information available. Please add a user.</p>
            )}
            <Link to="/add-user">
                <button style={styles.linkButton}>Add User</button>
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
    details: {
        fontSize: '1.2rem',
        lineHeight: '1.8',
        textAlign: 'left',
    },
    linkButton: {
        marginTop: '20px',
        padding: '10px 15px',
        fontSize: '1rem',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: '#007BFF',
        color: '#fff',
        cursor: 'pointer',
        textDecoration: 'none',
    },
};

export default UserDetails;
