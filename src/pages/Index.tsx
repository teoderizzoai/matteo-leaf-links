const Index = () => {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#222831', 
      color: '#EEEEEE',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚀 React is Working!</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>If you can see this, the basic React app is functioning.</p>
      <div style={{ 
        backgroundColor: '#393E46', 
        padding: '20px', 
        borderRadius: '8px',
        border: '1px solid #F2F2F2'
      }}>
        <p>✅ HashRouter is working</p>
        <p>✅ React components are rendering</p>
        <p>✅ Basic styling is applied</p>
      </div>
      <p style={{ marginTop: '2rem', fontSize: '0.9rem', opacity: 0.7 }}>
        Base URL: {import.meta.env.BASE_URL}
      </p>
    </div>
  );
};

export default Index;
