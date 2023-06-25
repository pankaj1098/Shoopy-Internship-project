import { Button, Grid } from "@mui/material";
import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Grid container spacing={20}>
        <Grid item xs={8}>
          <div
            style={{
              display: "flex",

              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <img
              style={{ width: "50px", height: "50px", marginLeft: "200px" }}
              alt="logo"
              src="https://cdn.pixabay.com/photo/2018/05/08/21/29/paypal-3384015_960_720.png"
            />
            <Button
              size="small"
              variant="text"
              sx={{
                borderRadius: "20px",
                textTransform: "initial",
                color: "white",
              }}
            >
              Home
            </Button>
            <Button
              size="small"
              variant="text"
              sx={{
                borderRadius: "20px",
                textTransform: "initial",
                color: "white",
              }}
            >
              Finances
            </Button>
            <Button
              size="small"
              variant="text"
              sx={{
                borderRadius: "30px",
                textTransform: "initial",
                color: "white",
              }}
            >
              Send and Request
            </Button>
            <Button
              size="small"
              variant="text"
              sx={{
                borderRadius: "30px",
                textTransform: "initial",
                color: "white",
              }}
            >
              Deals
            </Button>
            <Button
              size="small"
              variant="text"
              sx={{
                borderRadius: "30px",
                textTransform: "initial",
                color: "white",
              }}
            >
              Wallet
            </Button>
            <Button
              size="small"
              variant="text"
              sx={{
                borderRadius: "30px",
                textTransform: "initial",
                color: "white",
              }}
            >
              Activity
            </Button>
            <Button
              size="small"
              variant="text"
              sx={{
                borderRadius: "30px",
                textTransform: "initial",
                color: "white",
              }}
            >
              Help
            </Button>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div
            style={{
              display: "flex",

              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: "13px",
            }}
          >
            <NotificationsIcon sx={{ color: "white" }} />
            <SettingsIcon sx={{ color: "white" }} />
            <Button
              size="small"
              sx={{
                borderRadius: "20px",
                marginRight: "200px",
                color: "white",
              }}
            >
              Logout
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
