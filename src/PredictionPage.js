import React, { useState } from 'react';
import './PredictionPage.css'; // Optional: You can style the page here
import P_navbar from './p_navbar';

const PredictionPage = () => {
  // State for handling selected dropdown values
  const [opposition, setOpposition] = useState('');
  const [format, setFormat] = useState('');
  const [innings, setInnings] = useState('');
  const [prediction, setPrediction] = useState('');

  // Function to handle form submission
  const handlePredict = async (e) => {
    e.preventDefault();

    // Call the FastAPI backend
    try {
      const response = await fetch('http://127.0.0.1:8001/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          opposition: opposition,
          format: format,
          innings: innings,
        }),
      });

      const data = await response.json(); // Parse the JSON response
      console.log(data);
      // Handle the response correctly
      if (data.result === -1) {
        setPrediction('Please select options appropriately.');
      } else if (data.result === 0) {
        setPrediction('Virat Kohli is predicted to score less than 30 runs.');
      } else if (data.result === 1) {
        setPrediction('Virat Kohli is predicted to score between 30-50 runs.');
      } else if (data.result === 2) {
        setPrediction('Virat Kohli is predicted to score more than 50 runs.');
      } else {
        setPrediction('An unexpected result occurred.');
      }
    } catch (error) {
      console.error('Error:', error);
      setPrediction('An error occurred while predicting.');
    }
  };

  return (
    <div className="prediction-page" style={{ marginTop: '-55px' }}>
      <P_navbar title='PREDICTION' marginLeft='520px'/>
      <div className="phome">
        <form onSubmit={handlePredict}>
          <select
            name="opposition"
            className="feedback-input"
            value={opposition}
            onChange={(e) => setOpposition(e.target.value)}
          >
            <option value="">Opposition</option>
            <option value="Afghanistan">Afghanistan</option>
            <option value="Australia">Australia</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="England">England</option>
            <option value="HongKong">Hong Kong</option>
            <option value="Ireland">Ireland</option>
            <option value="Netherlands">Netherlands</option>
            <option value="NewZealand">New Zealand</option>
            <option value="Pakistan">Pakistan</option>
            <option value="Scotland">Scotland</option>
            <option value="SouthAfrica">South Africa</option>
            <option value="SriLanka">Sri Lanka</option>
            <option value="U.A.E.">U.A.E.</option>
            <option value="WestIndies">West Indies</option>
            <option value="Zimbabwe">Zimbabwe</option>
          </select>

          <select
            name="format"
            className="feedback-input"
            value={format}
            onChange={(e) => setFormat(e.target.value)}
          >
            <option value="">Format</option>
            <option value="odi">ODI</option>
            <option value="t20">T20</option>
            <option value="test">Test</option>
          </select>

          <select
            name="innings"
            className="feedback-input"
            value={innings}
            onChange={(e) => setInnings(e.target.value)}
          >
            <option value="">Innings</option>
            <option value="1">1st</option>
            <option value="2">2nd</option>
          </select>

          <input type="submit" value="SUBMIT" />
        </form>
        <div className='prediction-message'>
          {prediction && <p>{prediction}</p>} {/* Display prediction if available */}
        </div>
      </div>
    </div>
  );
};

export default PredictionPage;
