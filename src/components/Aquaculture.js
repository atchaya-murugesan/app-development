import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import domesticImage from 'C:\\Users\\Atchaya\\OneDrive\\Desktop\\Project - smart harvest\\smartharvest\\src\\assets\\domestic.jpg'; 
import internationalimage from 'C:\\Users\\Atchaya\\OneDrive\\Desktop\\Project - smart harvest\\smartharvest\\src\\assets\\international.jpg'; 
import aqua from 'C:\\Users\\Atchaya\\OneDrive\\Desktop\\Project - smart harvest\\smartharvest\\src\\assets\\disease.jpg'; 
import ima from 'C:\\Users\\Atchaya\\OneDrive\\Desktop\\Project - smart harvest\\smartharvest\\src\\assets\\imge.jpg'; 
const Aquaculture = ({ image, title, description, buttonText, onButtonClick }) => {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'row', 
        gap: 2, 
        p: 2,
        justifyContent: 'center', // Center cards horizontally
        flexWrap: 'wrap' // Allow wrapping if there's not enough space
      }}
    >
      <Card sx={{ 
        width: 500, 
        height: 600, 
        boxShadow: 10,
        textAlign:'justify'

      }}>
        <CardMedia
          component="img"
          height="200"
          image={domesticImage} // Use the imported image here
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Domestic Fisheries
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Domestic fisheries play a critical role in national food security, providing a sustainable source of protein and employment for millions. These fisheries involve the cultivation, harvesting, and management of aquatic organisms such as fish, shellfish, and seaweed within a country's territorial waters. By leveraging advanced aquaculture techniques, domestic fisheries contribute to the efficient production of seafood, ensuring a steady supply to meet the growing demand. Additionally, they support local economies, particularly in coastal and rural areas, by creating jobs in fishing, processing, and distribution sectors. Domestic fisheries are also crucial for maintaining ecological balance, as they often implement practices that promote environmental sustainability and biodiversity conservation. Through regulations and monitoring, domestic fisheries aim to mitigate overfishing and habitat destruction, ensuring the long-term viability of marine resources. By prioritizing innovation and responsible management, domestic fisheries enhance food security, economic stability, and environmental health.
          </Typography>
        </CardContent>
        <Button size="small" onClick={onButtonClick}>
          {buttonText}
        </Button>
      </Card>
      <Card sx={{ 
        width: 500, // Fixed width
        height: 600, // Fixed height
        boxShadow: 10,
        textAlign:'justify'

      }}>
        <CardMedia
          component="img"
          height="200"
          image={internationalimage} // Replace with your image URL or path
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            International Fisheries
          </Typography>
          <Typography variant="body2" color="text.secondary">
          International fisheries play a crucial role in global food security, providing a significant source of protein for billions of people worldwide. They contribute to the economies of many countries, particularly those in the developing world, through trade, employment, and livelihoods for millions of individuals. Managed by a complex network of international agreements and organizations, such as the United Nations Food and Agriculture Organization (FAO) and various regional fisheries management organizations (RFMOs), these fisheries strive to balance the demand for marine resources with the need for conservation. Sustainable practices are increasingly emphasized to address challenges like overfishing, habitat destruction, and climate change impacts. Advances in technology and policy are essential to monitor and regulate fishing activities, ensuring that marine ecosystems remain healthy and productive for future generations. International cooperation and compliance with regulations are key to the long-term sustainability and resilience of global fisheries.
          </Typography>
        </CardContent>
        <Button size="small" onClick={onButtonClick}>
          {buttonText}
        </Button>
      </Card>
      <Card sx={{ 
        width: 500, // Fixed width
        height: 600, // Fixed height
        boxShadow: 10,
        textAlign:'justify'
      }}>
        <CardMedia
          component="img"
          height="200"
          image={ima} // Replace with your image URL or path
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
         Fishes and environment
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Fish play a vital role in aquatic ecosystems, serving as both predators and prey within their habitats. They contribute to the balance of marine and freshwater environments by controlling populations of smaller organisms, thus maintaining biodiversity. Fish are also indicators of environmental health, with species diversity and abundance reflecting the quality of their habitats. Overfishing, pollution, and habitat destruction pose significant threats to fish populations, leading to declines that can disrupt entire ecosystems. Sustainable fishing practices and habitat conservation are crucial for preserving these aquatic communities. Additionally, fish are an essential source of nutrition for millions of people globally, providing protein and omega-3 fatty acids critical for human health. Conservation efforts not only protect fish populations but also ensure food security and the livelihoods of communities dependent on fishing. Promoting environmental stewardship and sustainable practices is vital for the resilience of fish populations and the overall health of our planet's waters.
          </Typography>
        </CardContent>
        <Button size="small" onClick={onButtonClick}>
          {buttonText}
        </Button>
      </Card>
      <Card sx={{ 
        width: 500, // Fixed width
        height: 600, // Fixed height
        boxShadow: 10,
        textAlign:'justify'

      }}>
        <CardMedia
          component="img"
          height="200"
          image={aqua} // Replace with your image URL or path
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Aquatic Animal Diseases
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Aquatic animal diseases pose significant challenges to both aquaculture and natural ecosystems, impacting the health of diverse species such as fish, crustaceans, and mollusks. These diseases can be caused by various pathogens, including bacteria, viruses, fungi, and parasites, leading to significant economic losses and environmental disruptions. Effective management of aquatic animal diseases involves regular monitoring, early detection, and the implementation of biosecurity measures to prevent outbreaks. Advances in diagnostic technologies and vaccines have enhanced our ability to control and mitigate these diseases, promoting healthier aquatic populations. However, the global trade of aquatic animals and products increases the risk of disease transmission, necessitating stringent international regulations and cooperation. Research and development in aquaculture health management continue to evolve, focusing on sustainable practices and innovative treatments to ensure the long-term viability of aquatic farming industries.
          </Typography>
        </CardContent>
        <Button size="small" onClick={onButtonClick}>
          {buttonText}
        </Button>
      </Card>
    </Box>
  );
};

export default Aquaculture;
