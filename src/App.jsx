import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
      <h1>Hello World from Coolify!</h1>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
