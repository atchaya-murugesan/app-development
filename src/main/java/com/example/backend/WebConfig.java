package com.example.backend;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:3000") // Adjust to your frontend's URL
                .allowedMethods("*") // Allow all methods (GET, POST, PUT, DELETE, etc.)
                .allowedHeaders("*"); // Allow all headers
    }
}
