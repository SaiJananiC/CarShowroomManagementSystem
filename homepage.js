import React from 'react';

const HomePage = () => {
  return (
    <div style={styles.container}>
      <h1>Welcome to the Home Page!</h1>
      <p>This is a placeholder content for the home page. You can customize it based on your needs.</p>
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

export default HomePage;
