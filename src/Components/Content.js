import { Button, ButtonBase, Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useEffect, useState } from "react";

const Content = () => {
  const transactions = [
    {
      id: 1,
      date: "jun 22",
      description: "Name.com Inc.",
      paymentType: "Automatic Payment",
      amount: 52.0,
      imageUrl:
        "https://global-uploads.webflow.com/5e157548d6f7910beea4e2d6/641d3cd7ed54a1231392cbaf_Screenshot%202023-03-23%20at%204.14.40%20PM.png",
    },
    {
      id: 2,
      date: "jun 21",
      description: "Name.com Inc.",
      paymentType: "Automatic Payment",
      amount: 51.0,
      imageUrl:
        "https://global-uploads.webflow.com/5e157548d6f7910beea4e2d6/641d3cd7ed54a1231392cbaf_Screenshot%202023-03-23%20at%204.14.40%20PM.png",
    },
    {
      id: 3,
      date: "jun 20",
      description: "Name.com Inc.",
      paymentType: "Automatic Payment",
      amount: 50.0,
      imageUrl:
        "https://global-uploads.webflow.com/5e157548d6f7910beea4e2d6/641d3cd7ed54a1231392cbaf_Screenshot%202023-03-23%20at%204.14.40%20PM.png",
    },
    {
      id: 4,
      date: "jun 23",
      description: "Name.com Inc.",
      paymentType: "Automatic Payment",
      amount: 53.0,
      imageUrl:
        "https://global-uploads.webflow.com/5e157548d6f7910beea4e2d6/641d3cd7ed54a1231392cbaf_Screenshot%202023-03-23%20at%204.14.40%20PM.png",
    },
  ];

  const [filteredTransactions, setFilteredTransactions] =
    useState(transactions);

  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: "50%",
  });

  const handleFilterTransactionsByDate = () => {
    const newtransactions = [...filteredTransactions];

    let filtered = newtransactions.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );

    setFilteredTransactions(filtered);
  };

  return (
    <div>
      <div style={{ marginLeft: "300px" }}>
        <Typography style={{ marginBottom: "10px", marginTop: "20px" }}>
          Filter by
        </Typography>
        <Button
          style={{
            borderRadius: "20px",
            fontSize: ".75rem",
            backgroundColor: "#adebeb",
            textTransform: "initial",
            fontWeight: "bold",
          }}
          onClick={handleFilterTransactionsByDate}
        >
          Date: Last 90 days
        </Button>
        <Button
          size="small"
          style={{
            borderRadius: "20px",
            fontSize: ".75rem",
            backgroundColor: "#f5f5f0",
            textTransform: "initial",
            border: "1px solid grey",
            marginLeft: "20px",
            marginRight: "20px",
            fontWeight: "bold",
          }}
        >
          Type
        </Button>
        <Button
          size="small"
          style={{
            borderRadius: "20px",
            fontSize: ".75rem",
            backgroundColor: "#f5f5f0",
            textTransform: "initial",
            border: "1px solid grey",
            fontWeight: "bold",
          }}
        >
          Status
        </Button>
        <Typography
          variant="h6"
          sx={{ marginTop: "20px", marginBottom: "20px" }}
        >
          Completed
        </Typography>
        <Typography sx={{ marginTop: "10px", marginBottom: "10px" }}>
          This Week
        </Typography>
      </div>

      {filteredTransactions.map((item) => (
        <Paper
          key={item.id}
          sx={{
            p: 2,
            margin: "auto",
            maxWidth: 718,
            flexGrow: 1,
            marginBottom: "10px",
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#1A2027" : "#fff",
          }}
        >
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase sx={{ width: 60, height: 50, borderRadius: "50%" }}>
                <Img alt="complex" src={item.imageUrl} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    component="div"
                    fontWeight="bold"
                  >
                    {item.description}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {item.date}&nbsp;&nbsp;&nbsp;{item.paymentType}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  component="div"
                >
                  -${item.amount}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </div>
  );
};

export default Content;
