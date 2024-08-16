package com.example.backend;

import org.springframework.stereotype.Service;

@Service
public class FertilizerRecommendationService {

    public String getRecommendation(Double nitrogen, Double phosphorus, Double potassium,
                                    Double temperature, Double humidity, Double soilMoisture,
                                    String soilType, String crop) {
        // Placeholder for actual logic
        String recommendation = "Default recommendation";

        // Implement logic to calculate recommendation
        if (nitrogen < 10.0) {
            recommendation = "Increase nitrogen content.";
        } else if (phosphorus < 5.0) {
            recommendation = "Increase phosphorus content.";
        } else if (potassium < 15.0) {
            recommendation = "Increase potassium content.";
        } else {
            recommendation = "Nutrient levels are optimal.";
        }

      
        if (temperature > 30.0) {
            recommendation += " Monitor fertilizer application in high temperatures.";
        }
        if (humidity > 80.0) {
            recommendation += " High humidity may affect fertilizer effectiveness.";
        }

    
        if (soilType.equals("Clay") && crop.equals("Wheat")) {
            recommendation += " Use a slow-release fertilizer for clay soil and wheat.";
        }

        return recommendation;
    }
}
