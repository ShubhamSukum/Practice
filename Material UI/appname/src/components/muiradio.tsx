import {Box,FormControl,FormLabel,FormControlLabel,Radio,RadioGroup,FormHelperText} from "@mui/material";
import { useState } from "react";

export const Muiradio = () => {
    const [value,setValue]=useState("");

    console.log({value});

    const changed=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setValue(event.target.value);
    }

  return (
    <Box>
        <FormControl>
            <FormLabel id="Job-experience">Years of Experience</FormLabel>
            <RadioGroup
                aria-labelledby="Job-experience"
                name="Job Experience"
                value={value}
                onChange={changed}
                row
            >
                <FormControlLabel
                   labelPlacement="end"
                   value="0-2"
                   control={<Radio/>}
                   label="0-2 years" 
                />

                <FormControlLabel
                    labelPlacement="end"
                    value="3-5"
                    control={<Radio size="medium" color="secondary"/>}
                    label="3-5 years"
                />

                <FormControlLabel
                    labelPlacement="end"
                    value="6-8"
                    control={<Radio color="warning"/>}
                    label="6-8 years"
                />  
            </RadioGroup>

            <FormHelperText>Select your experience</FormHelperText>
        </FormControl>
    </Box>
  )
}
