import {
  Grid,
  Paper,
  Typography,
  TextField,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import React from "react";

// potential supported fields:
// display (bool), component, componentOverride, title, styling,
const FormComponent = () => {
  return (
    <div style={{ padding: "1rem" }}>
      <Paper elevation={1} style={{ padding: "0.5rem" }}>
        <Grid container spacing={1} style={{ padding: "0.5rem" }}>
          <Typography variant="h6">Yoooo</Typography>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="Cool Text Field"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <InputLabel>Select Thingy</InputLabel>
            <Select
              id="neato-spagheeto-select"
              label="Cool Select"
              style={{ width: "100vh" }}
            >
              <MenuItem>Thing 1</MenuItem>
              <MenuItem>Thing 2</MenuItem>
            </Select>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default FormComponent;
