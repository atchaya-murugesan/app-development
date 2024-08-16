import React, { useState } from 'react';
import axios from 'axios';
import './FertilizerForm.css'; 

const FertilizerForm = () => {
    const [nitrogen, setNitrogen] = useState('');
    const [phosphorus, setPhosphorus] = useState('');
    const [potassium, setPotassium] = useState('');
    const [temperature, setTemperature] = useState('');
    const [humidity, setHumidity] = useState('');
    const [soilMoisture, setSoilMoisture] = useState('');
    const [soilType, setSoilType] = useState('');
    const [crop, setCrop] = useState('');
    const [recommendation, setRecommendation] = useState('');
    const [error, setError] = useState('');

    const formatData = (data) => {
        return {
            nitrogen: parseFloat(data.nitrogen) || 0.0,
            phosphorus: parseFloat(data.phosphorus) || 0.0,
            potassium: parseFloat(data.potassium) || 0.0,
            temperature: parseFloat(data.temperature) || 0.0,
            humidity: parseFloat(data.humidity) || 0.0,
            soilMoisture: parseFloat(data.soilMoisture) || 0.0,
            soilType: data.soilType.trim() || '',
            crop: data.crop.trim() || ''
        };
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setRecommendation('');
        setError('');

        const formattedData = formatData({
            nitrogen,
            phosphorus,
            potassium,
            temperature,
            humidity,
            soilMoisture,
            soilType,
            crop
        });

        console.log('Sending data:', formattedData);

        try {
            const response = await axios.post('http://localhost:7777/api/recommendation', formattedData);
            console.log('Response data:', response.data);
            setRecommendation(response.data);
        } catch (error) {
            if (error.response) {
                setError(`Error: ${error.response.data}`);
                console.error('Error response:', error.response);
            } else if (error.request) {
                setError('No response from server');
                console.error('Error request:', error.request);
            } else {
                setError(`Error: ${error.message}`);
                console.error('Error message:', error.message);
            }
        }
    };

    return (
        <div className="fertilizercontainer">
            <h1>Nutrient Advice</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nitrogen:</label>
                    <input 
                        type="number" 
                        step="any" 
                        value={nitrogen} 
                        onChange={(e) => setNitrogen(e.target.value)} 
                        placeholder="e.g., 10.5" 
                    />
                </div>
                <div>
                    <label>Phosphorus:</label>
                    <input 
                        type="number" 
                        step="any" 
                        value={phosphorus} 
                        onChange={(e) => setPhosphorus(e.target.value)} 
                        placeholder="e.g., 5.0" 
                    />
                </div>
                <div>
                    <label>Potassium:</label>
                    <input 
                        type="number" 
                        step="any" 
                        value={potassium} 
                        onChange={(e) => setPotassium(e.target.value)} 
                        placeholder="e.g., 8.0" 
                    />
                </div>
                <div>
                    <label>Temperature:</label>
                    <input 
                        type="number" 
                        step="any" 
                        value={temperature} 
                        onChange={(e) => setTemperature(e.target.value)} 
                        placeholder="e.g., 20.0" 
                    />
                </div>
                <div>
                    <label>Humidity:</label>
                    <input 
                        type="number" 
                        step="any" 
                        value={humidity} 
                        onChange={(e) => setHumidity(e.target.value)} 
                        placeholder="e.g., 65.0" 
                    />
                </div>
                <div>
                    <label>Soil Moisture:</label>
                    <input 
                        type="number" 
                        step="any" 
                        value={soilMoisture} 
                        onChange={(e) => setSoilMoisture(e.target.value)} 
                        placeholder="e.g., 30.0" 
                    />
                </div>
                <div>
                    <label>Soil Type:</label>
                    <input 
                        type="text" 
                        value={soilType} 
                        onChange={(e) => setSoilType(e.target.value)} 
                        placeholder="e.g., Loamy" 
                    />
                </div>
                <div>
                    <label>Crop:</label>
                    <input 
                        type="text" 
                        value={crop} 
                        onChange={(e) => setCrop(e.target.value)} 
                        placeholder="e.g., Wheat" 
                    />
                </div>
                <button type="submit">Get Recommendation</button>
            </form>
            {recommendation && (
                <div className="recommendation">
                    <h2>Recommendation:</h2>
                    <p>{recommendation}</p>
                </div>
            )}
            {error && (
                <div className="error">
                    <p>{error}</p>
                </div>
            )}
        </div>
    );
};

export default FertilizerForm;
