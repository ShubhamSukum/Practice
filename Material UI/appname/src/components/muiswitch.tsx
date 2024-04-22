import {Box,FormControlLabel,Switch} from "@mui/material";
import React, { useState } from "react";

export const Muiswitch = () => {
    const [check,setCheck]=useState(false);

    const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setCheck(event.target.checked);
    }

    console.log({check});

  return (
    <Box>
        <FormControlLabel
            label="Dark Mode" 
            control={<Switch 
                checked={check}
                onChange={handleChange}
            />}
        />
    </Box>
  )
}
