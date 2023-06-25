import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";

import IconButton from "@mui/material/IconButton";

import SearchIcon from "@mui/icons-material/Search";

import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import { Grid } from "@mui/material";

export default function Activity() {
  return (
    <div style={{ marginTop: "20px" }}>
      <Grid container spacing={2}>
        <Grid item>
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 700,
              borderRadius: "70px",
              marginLeft: "300px",
            }}
          >
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search by name or email"
              inputProps={{ "aria-label": "search google maps" }}
            />
          </Paper>
        </Grid>
        <Grid item>
          <IconButton aria-label="download" size="large">
            <DownloadForOfflineIcon fontSize="inherit" />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
}
