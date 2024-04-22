import {Button,Stack,Typography, IconButton , ButtonGroup , ToggleButtonGroup, ToggleButton} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import React, { HtmlHTMLAttributes, useState } from "react";

export const Muibutton = () => {
    const [format,setFormat]=useState<string[]|null>(null);

    console.log({format,});

    const handleChange=(_event:React.MouseEvent<HTMLElement>,updatedFormats:string[]|null)=>{
        setFormat(updatedFormats);
    }

  return (
    <Stack spacing={4} direction="column">
        <Typography variant="h4" gutterBottom>Button demo for Material UI</Typography>

        <Stack spacing={2} direction="row">
            <Button variant="text" href="https://google.com">TEXT example for href to google website</Button>
            <Button variant="outlined">OUTLINED</Button>
            <Button variant="contained">Contained</Button>
        </Stack>

        <Stack spacing={4} direction="row">
            <Button variant="contained" color="primary"> Primary </Button>
            <Button variant="contained" color="secondary"> secondary </Button>
            <Button variant="contained" color="error">Error</Button>
            <Button variant="contained" color="info"> Info </Button>
            <Button variant="contained" color="warning"> Warning </Button>
            <Button variant="contained" color="success"> Success </Button>
        </Stack>

        <Stack display="block" spacing={2} direction="row">
            <Button variant="contained" size="small">Small</Button>
            <Button variant="contained" size="medium">Medium</Button>
            <Button variant="contained" size="large">Large</Button>
        </Stack>

        <Stack spacing={2} direction="column">
            <Button variant="contained" startIcon={<SendIcon/>} disableElevation>Send</Button>
            <Button variant="contained" endIcon={<SendIcon/>} disableRipple>Send</Button>

            <Typography variant="subtitle1">If you want to use it as a single then /v\  iconButton</Typography>

            <IconButton color="primary" size="large">
                <SendIcon/>
            </IconButton>
        </Stack>

        <Stack direction="row" spacing={3}>
            <ButtonGroup
                variant="contained"
                color="warning"
                orientation="vertical"
                aria-label="something"
                disableRipple
                disableElevation
            >
                <Button >Left</Button>
                <Button >Center</Button>
                <Button >Right</Button>
            </ButtonGroup>
        </Stack>

        <Stack>
            <ToggleButtonGroup 
            value={format} 
            onChange={handleChange} 
            orientation="vertical"
            color="success"
            size="small"
            exclusive
            >
                <ToggleButton value="Justify"><FormatAlignJustifyIcon/></ToggleButton>
                <ToggleButton value="Left"><FormatAlignLeftIcon/></ToggleButton>
                <ToggleButton value="Right"><FormatAlignRightIcon/></ToggleButton>
            </ToggleButtonGroup>
        </Stack>


    </Stack>
  )
}
