import React, { useState } from 'react';

const PaymentForm = () => {
 const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
 const [cvv, setCVV] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Simulate payment processing
   console.log('Processing payment...');
    console.log('Card Number:', cardNumber);
    console.log('Expiry Date:', expiry);
    console.log('CVV:', cvv);
    // Reset form fields
    setCardNumber('');
    setExpiry('');
    setCVV('');
    alert('Payment successful! Thank you for your purchase.');
  };

  const handleBankRedirect = () => {
    // Redirect user to UPI or other payment options
    window.location.href = 'https://pay.upilink.in/pay/sreenathbadugu@fifederal?am=100'; // Replace with actual UPI URL
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Payment Information</h2>
      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label htmlFor="cardNumber" style={styles.label}><strong>Card Number</strong></label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="Enter card number"
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="expiry" style={styles.label}><strong>Expiry Date</strong></label>
          <input
            type="text"
            id="expiry"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            placeholder="MM/YY"
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="cvv" style={styles.label}><strong>CVV</strong></label>
          <input
            type="text"
            id="cvv"
            value={cvv}
            onChange={(e) => setCVV(e.target.value)}
            placeholder="Enter CVV"
            style={styles.input}
            required
          />
        </div>
        <button type="submit" style={styles.submitButton}><strong>Submit Payment</strong></button>
      </form>
      <button onClick={handleBankRedirect} style={styles.bankButton}><strong>Go to Your Bank</strong></button>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: 400,
    margin: 'auto',
    padding: 20,
    borderRadius: 8,
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    background: 'white',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  formGroup: {
    marginBottom: 15,
  },
  label: {
    display: 'block',
    marginBottom: 5,
    fontSize: 16,
  },
  input: {
    width: '100%',
    padding: 10,
    fontSize: 16,
    border: '1px solid #ccc',
    borderRadius: 4,
    boxSizing: 'border-box',
  },
  submitButton: {
    width: '100%',
    padding: 10,
    fontSize: 16,
    color: 'white',
    background: 'blue',
    border: 'none',
    borderRadius: 4,
    cursor: 'pointer',
  },
  bankButton: {
    width: '100%',
    padding: 10,
    fontSize: 16,
    color: 'white',
    background: 'green',
    border: 'none',
    borderRadius: 4,
    cursor: 'pointer',
    marginTop: 10,
  },
};

export default PaymentForm;
