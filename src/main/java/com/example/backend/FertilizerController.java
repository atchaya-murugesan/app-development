package com.example.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;

@RestController
@RequestMapping("/api")
public class FertilizerController {

    @Autowired
    private FertilizerRecommendationService recommendationService;

    @PostMapping("/recommendation")
    public ResponseEntity<String> getRecommendation(@RequestBody FertilizerRequest request) {
        if (request == null || 
            request.getNitrogen() == null || 
            request.getPhosphorus() == null || 
            request.getPotassium() == null || 
            request.getTemperature() == null || 
            request.getHumidity() == null || 
            request.getSoilMoisture() == null || 
            request.getSoilType() == null || 
            request.getCrop() == null) {
            return ResponseEntity.badRequest().body("Invalid input: All fields are required.");
        }

        try {
            String result = recommendationService.getRecommendation(
                request.getNitrogen(),
                request.getPhosphorus(),
                request.getPotassium(),
                request.getTemperature(),
                request.getHumidity(),
                request.getSoilMoisture(),
                request.getSoilType(),
                request.getCrop()
            );
            return ResponseEntity.ok(result);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error processing recommendation: " + e.getMessage());
        }
    }

    @GetMapping("/recommendation")
    public ResponseEntity<String> getRecommendationByParams(@RequestBody FertilizerRequest request) {
        // Ensure request is not null and contains crop
        if (request == null || request.getCrop() == null || request.getCrop().isEmpty()) {
            return ResponseEntity.badRequest().body("Invalid input: Crop cannot be empty.");
        }

        try {
            String result = recommendationService.getRecommendation(
                request.getNitrogen(),
                request.getPhosphorus(),
                request.getPotassium(),
                request.getTemperature(),
                request.getHumidity(),
                request.getSoilMoisture(),
                request.getSoilType(),
                request.getCrop()
            );
            return ResponseEntity.ok(result);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error processing recommendation: " + e.getMessage());
        }
    }
}
