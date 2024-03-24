import React, { useState } from 'react';

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});
    const [showRegistrationForm, setShowRegistrationForm] = useState(false);

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
        const validationErrors = validateLoginForm(formData);
        if (Object.keys(validationErrors).length === 0) {
            // Handle login logic here
            console.log('Logging in with:', formData);
        } else {
            setErrors(validationErrors);
        }
    };

    const handleRegisterClick = () => {
        setShowRegistrationForm(true);
    };

    const validateLoginForm = (data) => {
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
                <button onClick={handleRegisterClick} style={styles.button}><span style={{color:'red'}}></span>Click here to Register</button>
            </center>
            {showRegistrationForm && <RegistrationForm />}
        </div>
    );
};

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        mobileNumber: '',
        password: '',
        confirmPassword: ''
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
        const validationErrors = validateRegistrationForm(formData);
        if (Object.keys(validationErrors).length === 0) {
            if (formData.password !== formData.confirmPassword) {
                setErrors(prevErrors => ({
                    ...prevErrors,
                    confirmPassword: 'Passwords do not match'
                }));
                return;
            }
            // Handle registration logic here
            console.log('Registering:', formData);
        } else {
            setErrors(validationErrors);
        }
    };

    const validateRegistrationForm = (data) => {
        let errors = {};

        if (!data.email.trim()) {
            errors.email = 'Email is required';
        } else if (!isValidEmail(data.email)) {
            errors.email = 'Invalid email format';
        }

        if (!data.username.trim()) {
            errors.username = 'Username is required';
        } else if (!isValidUsername(data.username)) {
            errors.username = 'Username should be alphabets only and up to 20 characters';
        }

        if (!data.mobileNumber.trim()) {
            errors.mobileNumber = 'Mobile number is required';
        } else if (!isValidMobileNumber(data.mobileNumber)) {
            errors.mobileNumber = 'Invalid mobile number format';
        }

        if (!data.password.trim()) {
            errors.password = 'Password is required';
        } else if (!isValidPassword(data.password)) {
            errors.password = 'Password should be at least 10 characters long, contain at least one special character, and at least two numbers';
        }

        if (!data.confirmPassword.trim()) {
            errors.confirmPassword = 'Confirm password is required';
        }

        return errors;
    };

    const isValidEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    };

    const isValidUsername = (username) => {
        return /^[a-zA-Z]{1,20}$/.test(username);
    };

    const isValidMobileNumber = (mobileNumber) => {
        return /^\d{10}$/.test(mobileNumber);
    };

    const isValidPassword = (password) => {
        return /^(?=.*[!@#$%^&*()\-_=+{};:,<.>])(?=.*[a-zA-Z])(?=.*\d.*\d).*.{10,}$/.test(password);
    };

    return (
        <div style={styles.container}>
            
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
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Enter username (Up to 20 characters)"
                    style={styles.input}
                    required
                />
                {errors.username && <span style={styles.error}>{errors.username}</span>}
                <input
                    type="tel"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    placeholder="Enter mobile number (10 digits)"
                    style={styles.input}
                    required
                />
                {errors.mobileNumber && <span style={styles.error}>{errors.mobileNumber}</span>}
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
                <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm password"
                    style={styles.input}
                    required
                />
                {errors.confirmPassword && <span style={styles.error}>{errors.confirmPassword}</span>}
                <button type="submit" style={styles.button}>Register</button>
            </form>
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
        backgroundColor: 'green',
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
