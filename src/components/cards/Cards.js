//import { cardArray } from "../../data";
import { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Button, CardActionArea, CardActions, useTheme } from "@mui/material";
import { tokens, ColorModeContext } from "../../theme";
import React from "react";

export default function Cards(props) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  return (
    <div>
      <Grid
        container
        spacing={3}
        sx="width:100%"
        padding="30px"
        justifyContent="space-evenly"
      >
        {props.props.map((value, index) => (
          <Card
            key={index}
            sx={{
              maxWidth: 345,
              padding: "10px",
              mx: "20px",
              my: "20px",
              borderRadius: "20px",
              borderColor: "aliceblue",
              background: colors.grey[900],
              width: "30vw",
              height: "40vh",
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <CardActionArea>
              {value.img && (
                <CardMedia
                  component="img"
                  height="140"
                  image={value.img}
                  alt={value.card_title}
                  borderRadius="20px 20px 0px 0px"
                />
              )}
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  {value.card_title}
                </Typography>
                {value.number && (
                  <Typography variant="body1" color="text.secondary">
                    {value.number}
                  </Typography>
                )}
                {value.text && (
                  <Typography variant="body1" color="text.secondary">
                    {value.text}
                  </Typography>
                )}
                {value.tag && (
                  <Typography variant="body1" color="text.secondary">
                    {value.tag}
                  </Typography>
                )}
                {value.redirect && (
                  <Typography variant="body2" color="text.secondary">
                    {value.redirect}
                  </Typography>
                )}
                {value.link && (
                  <Typography variant="body2" color="text.secondary">
                    {value.link}
                  </Typography>
                )}
              </CardContent>
            </CardActionArea>
            <CardActions justifyContent="space-evenly">
              {value.button1 && (
                <Button size="medium" color="info" background="success">
                  {value.button_name}
                </Button>
              )}
              {value.note && (
                <Typography
                  variant="body2"
                  color="text.secondary"
                  position="relative"
                >
                  {value.note}
                </Typography>
              )}
            </CardActions>
          </Card>
        ))}
      </Grid>
    </div>
  );
}
