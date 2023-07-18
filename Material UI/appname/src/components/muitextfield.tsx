import {Stack,TextField, Typography ,InputAdornment} from "@mui/material";
import {useState} from "react";

export const Muitextfield = () => {
    const [value,setValue]=useState("");

    const handler=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setValue(event.target.value);
    }

  return (
    <Stack spacing={2} display="block" direction="row">

        <Typography variant="h3"> TextField </Typography>

        <Stack spacing={2} direction="column" >
            <TextField label="First Name" variant="outlined" color="secondary"></TextField>
            <TextField label="Middle Name" variant="filled"></TextField>
            <TextField label="Last Name" variant="standard"></TextField>
        </Stack>

        <br/>

        <Stack spacing={3}>
            <Typography variant="h4">Color and Size</Typography>
            <TextField label="Color and Size" variant="standard" size="medium" color="warning"></TextField>
        </Stack>

        <br/>

        <Stack spacing={2}>

            <TextField 
                label="password"
                helperText={
                    !value?"Required":"Don't share your password!!"
                } 
                type="password"
                value={value}
                error={!value}
                onChange={handler}
                required
                // InputProps={{readOnly:true}}
            ></TextField>
        </Stack>

        <br/>
        <br/>

        <Stack spacing={2}>
                <Typography variant="h4">Input Adornment</Typography>

                <TextField
                    label="Amount"
                    InputProps={{
                        startAdornment:<InputAdornment position="start">$</InputAdornment>
                    }}
                ></TextField>

                {/* <br/> */}

                <TextField
                    label="Weight"
                    InputProps={{
                        endAdornment:<InputAdornment position="end">KG</InputAdornment>
                    }}
                ></TextField>
        </Stack>

    </Stack>
  )
}
