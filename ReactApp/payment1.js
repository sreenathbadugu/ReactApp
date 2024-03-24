import React from 'react';

const handleBankRedirect = () => {
    // Redirect user to UPI or other payment options
    window.location.href = 'https://pay.upilink.in/pay/sreenathbadugu@fifederal?am=100'; // Replace with actual UPI URL
};

const PaymentButton = () => (
    <center>
        <button
            onClick={handleBankRedirect}
            style={{
                padding: '10px 20px',
                backgroundColor: '#007bff',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: 'bold',
                outline: 'none',
            }}
        >
            Pay Now
        </button>
    </center>
);

const PaymentOption = () => (
    <div style={{
        position: 'relative',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden', // Ensure the child elements stay within the card
    }}>
        {/* 3D card effect */}
        <div style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: '#f9f9f9',
            transform: 'rotateY(10deg) rotateX(-10deg)',
            zIndex: '-1', // Place it behind the card
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)', // Add shadow to the 3D effect
        }}></div>

        <center>
            <strong><h1>Welcome to My Payment Page</h1></strong>
            <strong style={{ color: 'red' }}><p>Please click the button below to proceed with the payment:</p></strong>
            <PaymentButton />
        </center>
    </div>
);

export default PaymentOption;
