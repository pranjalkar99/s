import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const RecommendationCard = ({ recommendationData }) => {

  const { breakfast_recommendation, isLoading } = recommendationData;

  const splitRecommendations = breakfast_recommendation ? breakfast_recommendation.split("\n").filter(item => item.trim() !== "") : [];

  if (isLoading) {
    return (
      <Card style={{ backgroundColor: '#292929', padding: '20px', borderRadius: '10px' }}>
        <CardContent>
          <Typography variant="h6" style={{ color: "#FFFFFF" }}>
            Loading...
          </Typography>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card style={{ backgroundColor: '#292929', padding: '20px', borderRadius: '10px' }}>
      <CardContent>
        {splitRecommendations.map((recommendation, index) => {
          if (recommendation.includes("Breakfast:") || recommendation.includes("Lunch:") || recommendation.includes("Dinner:")) {
            return (
              <Typography key={index} variant="h6" style={{ color: "#FFFFFF", marginTop: '20px' }}>
                {recommendation}
              </Typography>
            );
          }
          return (
            <Typography key={index} style={{ color: "#FFFFFF", marginTop: '10px' }}>
              {recommendation}
            </Typography>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default RecommendationCard;
