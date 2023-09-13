import React, { useContext } from "react";
import { bannerArray } from "../../Data/data";
import {
  Box,
  Typography,
  IconButton,
  useMediaQuery,
  Button,
  useTheme,
} from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavigateBeforeOutlinedIcon from "@mui/icons-material/NavigateBeforeOutlined";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import { tokens } from "../../theme";

const MainCarousel = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const handleclick = (a) => {
    <a href="a"></a>;
  };
  return (
    <>
      <Carousel
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        autoPlay={true}
        interval="3000"
        transitionTime="1000"
        renderArrowPrev={(onclickHandler, hasPrev, label) => (
          <IconButton
            onClick={onclickHandler}
            sx={{
              position: "absolute",
              top: "50%",
              left: "0",
              color: "grey",
              padding: "5px",
              zIndex: "10",
            }}
          >
            <NavigateBeforeOutlinedIcon sx={{ fontSize: 40 }} />
          </IconButton>
        )}
        renderArrowNext={(onclickHandler, hasNext, label) => (
          <IconButton
            onClick={onclickHandler}
            sx={{
              position: "absolute",
              top: "50%",
              right: "0",
              color: "grey",
              padding: "5px",
              zIndex: "10",
            }}
          >
            <NavigateNextOutlinedIcon sx={{ fontSize: 40 }} />
          </IconButton>
        )}
      >
        {props.details.map((value, index) => (
          <Box key={index}>
            <Box
              alt={value.text}
              style={{
                width: "100%",
                height: "700px",
                objectFit: "cover",
                backgroundAttachment: "fixed",
                border: "3px grey",
              }}
            />
            <Box
              color="white"
              padding="20px"
              borderRadius="1px"
              textAlign="left"
              backgroundColor="rgb(0,0,0,0.4)"
              position="absolute"
              top="46%"
              left={isNonMobile ? "10%" : "0"}
              right={isNonMobile ? undefined : "0"}
              margin={isNonMobile ? undefined : "0 auto"}
              maxWidth={isNonMobile ? undefined : "240px"}
            >
              <Typography variant="h1">{value.id}</Typography>
              {value.button1 && (
                <Button
                  size="medium"
                  sx={{ color: "white", border: "white" }}
                  variant="contained"
                  onClick={value.redirect}
                >
                  {value.btn_name}
                </Button>
              )}
            </Box>
          </Box>
        ))}
      </Carousel>
    </>
  );
};
export default MainCarousel;
