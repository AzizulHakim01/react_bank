import React from "react";
import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";

const SliderComponent = ({ defaultValue, min, max, amount, label, unit, step, onChange, value }) => {
  return (
    <div>
      <>
        <Stack my={1.5}>
            <Stack gap={1}>
                <Typography variant="subtitle2" sx={{textAlign:"left"}}>
                {label}
                <Typography variant="h5" sx={{textAlign:"left"}}>
                {unit}{amount}
                </Typography>
                </Typography>
            </Stack>
          <Slider
            defaultValue={defaultValue}
            min={min}
            max={max}
            aria-label="Default"
            valueLabelDisplay="auto"
            marks
            value={value}
            step={step}
            onChange = {onChange}
          />
          <Stack direction={"row"} justifyContent="space-between">
                <Typography variant="caption" sx={{textAlign:"left"}} color="text.secondary">
                {unit}{min}
                </Typography>
                <Typography variant="caption" sx={{textAlign:"left"}} color="text.secondary">
                {unit}{max}
                </Typography>
            </Stack>
        </Stack>
      </>
    </div>
  );
};

export default SliderComponent;
