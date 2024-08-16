import React, { useState } from 'react';
import axios from 'axios';

const AnimalHusbandry = () => {
    const [animalType, setAnimalType] = useState('');
    const [feedType, setFeedType] = useState('');
    const [healthCondition, setHealthCondition] = useState('');
    const [productionGoal, setProductionGoal] = useState('');
    const [recommendation, setRecommendation] = useState('');
    const [error, setError] = useState('');

    // Function to format the data
    const formatData = (data) => {
        return {
            animalType: data.animalType.trim() || '',
            feedType: data.feedType.trim() || '',
            healthCondition: data.healthCondition.trim() || '',
            productionGoal: data.productionGoal.trim() || ''
        };
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setRecommendation('');
        setError('');

        // Format the data before sending it
        const formattedData = formatData({
            animalType,
            feedType,
            healthCondition,
            productionGoal
        });

        try {
            const response = await axios.post('http://localhost:7777/api/animalhusbandry', formattedData);
            setRecommendation(response.data);
        } catch (error) {
            if (error.response) {
                setError(`Error: ${error.response.data}`);
            } else if (error.request) {
                setError('No response from server');
            } else {
                setError(`Error: ${error.message}`);
            }
        }
    };

    return (
        <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
            <h1>Animal Husbandry Recommendations</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Animal Type:</label>
                    <input
                        type="text"
                        value={animalType}
                        onChange={(e) => setAnimalType(e.target.value)}
                        placeholder="e.g., Cattle"
                    />
                </div>
                <div>
                    <label>Feed Type:</label>
                    <input
                        type="text"
                        value={feedType}
                        onChange={(e) => setFeedType(e.target.value)}
                        placeholder="e.g., Grain"
                    />
                </div>
                <div>
                    <label>Health Condition:</label>
                    <input
                        type="text"
                        value={healthCondition}
                        onChange={(e) => setHealthCondition(e.target.value)}
                        placeholder="e.g., Healthy"
                    />
                </div>
                <div>
                    <label>Production Goal:</label>
                    <input
                        type="text"
                        value={productionGoal}
                        onChange={(e) => setProductionGoal(e.target.value)}
                        placeholder="e.g., High Milk Yield"
                    />
                </div>
                <button type="submit">Get Recommendation</button>
            </form>
            {recommendation && (
                <div>
                    <h2>Recommendation:</h2>
                    <p>{recommendation}</p>
                </div>
            )}
            {error && (
                <div style={{ color: 'red' }}>
                    <p>{error}</p>
                </div>
            )}
        </div>
    );
};

export default AnimalHusbandry;
