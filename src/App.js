import React, { useRef } from 'react';
import './App.css';
import Navbar from './Navbar';
import PredictionPage from './PredictionPage';
import Analysis from './ana';

function App() {
  const predictionRef = useRef(null); // Create a ref for the PredictionPage
  const analysisRef = useRef(null); // Create a ref for the Analysis section

  const scrollToPrediction = () => {
    predictionRef.current.scrollIntoView({ behavior: 'smooth' }); // Scroll to PredictionPage smoothly
  };

  const scrollToAnalysis = () => {
    analysisRef.current.scrollIntoView({ behavior: 'smooth' }); // Scroll to Analysis section smoothly
  };

  return (
    <div className="app">
      <div className='home'>
        <Navbar onAnalysisClick={scrollToAnalysis} /> {/* Pass the function to Navbar */}

        <div className="fl" id='fl-container'>
          <p>Predict the runs Virat may<span className="grey-text"> <br />score in the next Game</span></p>
          <img src="/virat.jpg" alt="Virat Kohli" />
        </div>
        <button className="butt" id="bu" onClick={scrollToPrediction}>
          <strong>PREDICT</strong>
        </button>
      </div>
      
      <div ref={predictionRef} className="prediction" style={{ marginTop: '770px' }}>
        <PredictionPage />
      </div>
      <div ref={analysisRef} className="prediction" style={{ marginTop: '0px' }}>
        <Analysis />
      </div>
    </div>
  );
}

export default App;
