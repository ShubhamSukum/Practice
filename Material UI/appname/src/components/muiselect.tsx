import React, {useState} from "react";
import {Box,TextField,MenuItem} from "@mui/material";

export const Muiselect = () => {
    const [countries,setCountries]=useState<string[]>([]);

    console.log({countries});

    const handling=(event:React.ChangeEvent<HTMLInputElement>)=>{
        const value=event.target.value;
        setCountries(typeof value==='string'? value.split(","):value);
    }

  return (
    <Box width="250px">
        <TextField 
            label="Set Country"
            select
            color="secondary"
            size="small"
            helperText="Select your Country"
            value={countries}
            onChange={handling}
            SelectProps={{
                multiple:true
            }}
            fullWidth
        >
            <MenuItem value="IN">INDIA</MenuItem>
            <MenuItem value="US">USA</MenuItem>
            <MenuItem value="AUS">AUSTRALIA</MenuItem>
        </TextField>

    </Box>
  )
}
