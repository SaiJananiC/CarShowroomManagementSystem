import React, { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';

const DeliveryPage = () => {
  const [bookingDetails, setBookingDetails] = useState('');
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    let timer;

    if (bookingDetails && countdown === 0) {
      // Set a countdown timer for demonstration purposes
      timer = setInterval(() => {
        setCountdown(prevCountdown => prevCountdown - 1);
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [bookingDetails, countdown]);

  const handleDoneButtonClick = () => {
    // Add logic for "Done" button click, e.g., navigate to home page
    // You might want to use react-router-dom for navigation
    Navigate('/homepage');
    console.log('Done Button Clicked');
  };

  const handleCancelBookingButtonClick = () => {
    // Add logic for "Cancel Booking" button click, e.g., navigate to refund page
    // You might want to use react-router-dom for navigation
    Navigate('/refund');
    console.log('Cancel Booking Button Clicked');
  };

  const styles = {
    container: {
      backgroundImage: 'url(https://c4.wallpaperflare.com/wallpaper/13/393/91/pink-sky-red-sky-white-car-car-wallpaper-preview.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      backgroundColor: '#e0e0e0',
      padding: '10px',
      width: '100%',
    },
    navLink: {
      textDecoration: 'none',
      color: '#333',
    },
    navButton: {
      backgroundColor: '#4CAF50',
      color: 'white',
      padding: '10px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    formContainer: {
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      width: '50%',
    },
    input: {
      width: '100%',
      padding: '10px',
      marginBottom: '20px',
    },
    countdown: {
      marginBottom: '20px',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    button: {
      padding: '10px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    doneButton: {
      backgroundColor: '#4CAF50',
      color: 'white',
    },
    cancelButton: {
      backgroundColor: '#FF4081', // Darker pink color
      color: 'white',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.navbar}>
        <Link to="/" style={styles.navLink}>Home</Link>
        <button style={styles.navButton}>Track Order</button>
      </div>

      <div style={styles.formContainer}>
        <h1>Delivery Page</h1>
        <label htmlFor="bookingDetails">Booking Details:</label>
        <input
          type="text"
          id="bookingDetails"
          value={bookingDetails}
          onChange={(e) => setBookingDetails(e.target.value)}
          style={styles.input}
        />

        {countdown > 0 && (
          <div style={styles.countdown}>
            Countdown: {countdown}s
          </div>
        )}

        <div style={styles.buttonContainer}>
          <button onClick={handleDoneButtonClick} style={{ ...styles.button, ...styles.doneButton }}>Done</button>
          <button onClick={handleCancelBookingButtonClick} style={{ ...styles.button, ...styles.cancelButton }}>Cancel Booking</button>
        </div>
      </div>
    </div>
  );
};

export default DeliveryPage;
