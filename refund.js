import React, { useState } from 'react';

const RefundPage = () => {
  const [userName, setUserName] = useState('');
  const [bankAccount, setBankAccount] = useState('');
  const [bookingDetails, setBookingDetails] = useState('');
  const [refundProcessed, setRefundProcessed] = useState(false);

  const handleRefundSubmit = (event) => {
    event.preventDefault();
    // Add logic here to handle the refund form submission, e.g., send data to the server
    // For demonstration purposes, we're just logging the data and simulating a refund process
    console.log('Refund Form Submitted:', { userName, bankAccount, bookingDetails });

    // Simulate processing the refund
    setTimeout(() => {
      setRefundProcessed(true);
    }, 2000);
  };

  return (
    <div style={styles.container}>
      <h1>Refund Page</h1>

      {!refundProcessed ? (
        <form onSubmit={handleRefundSubmit}>
          <div>
            <label htmlFor="userName">User Name:</label>
            <input
              type="text"
              id="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="bankAccount">Bank Account:</label>
            <input
              type="text"
              id="bankAccount"
              value={bankAccount}
              onChange={(e) => setBankAccount(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="bookingDetails">Booking Details:</label>
            <textarea
              id="bookingDetails"
              value={bookingDetails}
              onChange={(e) => setBookingDetails(e.target.value)}
              required
            ></textarea>
          </div>

          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Refund will be processed. Thank you!</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#f5f5f5',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    margin: '20px',
  },
};

export default RefundPage;
