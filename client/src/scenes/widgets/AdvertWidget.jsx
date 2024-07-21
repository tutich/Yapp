import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
import React from "react";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.nain;
  const medium = palette.neutral.medium;
  return (
    <WidgetWrapper>
      <FlexBetween color={dark} variant="h5" fontWeight="500">
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>
            Create Ad
        </Typography>
      </FlexBetween>
      <img src="http:/localhost:3001/assets/info4.jpeg" alt="ad" width="100%" height="auto" style={{ borderRadius: "0.75rem", margin: "0.75rem 0"}} />
      <FlexBetween>
        <Typography color={main}>Tichcosmetics</Typography>
        <Typography color={medium}>tichcos.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">Your home for all cosmetic prodducts</Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
