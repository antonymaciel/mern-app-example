import React, { FC, useState } from "react";
import { Box, Card, Container, Typography, TextField } from "@material-ui/core";
import { FlightStatuses } from "../../models/flight.model";


export function updateFlightState() {
  // pending

  return 
}

interface FlightCardProps {
  code: string;
  origin: string;
  destination: string;
  passengers?: string[];
  status: FlightStatuses;
}

const mapFlightStatusToColor = (status: FlightStatuses) => {
  const mappings = {
    [FlightStatuses.Arrived]: "#1ac400",
    [FlightStatuses.Delayed]: "##c45800",
    [FlightStatuses["On Time"]]: "#1ac400",
    [FlightStatuses.Landing]: "#1ac400",
    [FlightStatuses.Cancelled]: "#ff2600",
  };

  return mappings[status] || "#000000";
};

export const FlightCard: React.FC<FlightCardProps> = (
  props: FlightCardProps
) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  return (
    <Card
      style={{
        backgroundColor: "#f5f5f5",
        margin: "15px",
        padding: "35px",
        justifyContent: "center",
      }}
    >
      <Box style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h5">{props.code} </Typography>
        <div>
          <Typography style={{ color: mapFlightStatusToColor(props.status) }}>
            { isEditMode ? (
                <TextField id="outlined-basic" label={status} variant="outlined" onChange={(e) => setStatus(e.target.value as FlightStatuses)} />
              ) : (
                <>Status: {props.status}</>
              )
            }            
          </Typography>
          <div onClick={() => setIsEditMode(!isEditMode)}>Edit</div>
        </div>
      </Box>

      <Box>
        <Typography>Origin: {props.origin}</Typography>
      </Box>
      <Box>
        <Typography>Destination: {props.destination}</Typography>
      </Box>
    </Card>
  );
};
