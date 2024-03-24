import React, { useState } from 'react';

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        // Clear error message if user starts typing after error occurred
        if (errors[name]) {
            setErrors(prevErrors => ({
                ...prevErrors,
                [name]: ''
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm(formData);
        if (Object.keys(validationErrors).length === 0) {
            // Handle form submission logic here
            console.log(formData);
        } else {
            setErrors(validationErrors);
        }
    };

    const validateForm = (data) => {
        let errors = {};

        if (!data.email.trim()) {
            errors.email = 'Email is required';
        } else if (!isValidEmail(data.email)) {
            errors.email = 'Invalid email format';
        }

        if (!data.password.trim()) {
            errors.password = 'Password is required';
        } else if (!isValidPassword(data.password)) {
            errors.password = 'Password should be at least 10 characters long with 1 special character and 2 numbers';
        }

        return errors;
    };

    const isValidEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    };

    const isValidPassword = (password) => {
        return /^(?=.*[!@#$%^&*()\-_=+{};:,<.>])(?=.*[a-zA-Z])(?=.*\d.*\d).{10,}$/.test(password);
    };

    return (
        <div style={styles.container}>
        <center>
            <h2>Login</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email"
                    style={styles.input}
                    required
                />
                {errors.email && <span style={styles.error}>{errors.email}</span>}
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter password (At least 10 characters with 1 special character and 2 numbers)"
                    style={styles.input}
                    required
                />
                {errors.password && <span style={styles.error}>{errors.password}</span>}
                <button type="submit" style={styles.button}>Login</button>
            </form>
            </center>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: '400px',
        margin: 'auto'
    },
    title: {
        textAlign: 'center',
        borderRadius: '10px',
        backgroundColor: "brown",
        color: 'whitesmoke',
        padding: '10px'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '10px'
    },
    input: {
        margin: '10px',
        padding: '8px',
        fontSize: '16px',
        borderRadius: '4px',
        border: '1px solid #ccc'
    },
    button: {
        margin: '10px',
        padding: '10px',
        fontSize: '18px',
        backgroundColor: 'purple',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
    },
    error: {
        color: 'red',
        fontSize: '14px',
        marginLeft: '10px'
    }
};

export default LoginForm;
