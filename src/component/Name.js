import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";

export default function Name(props) {
  const [name, setName] = React.useState("");

  function onChange(e) {
    setName(e.target.value);
  }
  return (
    <div>
      <Grid container justifyContent="center">
        <Grid item xs={6}>
          <Paper elevation={24} style={{ padding: 20 }}>
            <Input placeholder="Name" value={name} onChange={onChange} />
            <Button
              variant="contained"
              onClick={() => {
                if (name) {
                  props.onNameProvided(name);
                }
              }}
            >
              Submit
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
