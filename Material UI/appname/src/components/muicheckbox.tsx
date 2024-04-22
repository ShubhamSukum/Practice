import React, {useState} from "react";
import{Box,FormControl,FormControlLabel,FormGroup,Checkbox,FormLabel} from "@mui/material";

import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

export const Muicheckbox = () => {
    const [accept,setAccepted]=useState(false);
    const [skills,setSkills]=useState<string[]>([]);

    // console.log(accept);
    console.log(skills)

    const tnC=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setAccepted(event.target.checked);
    }

    const skillHandled=(event:React.ChangeEvent<HTMLInputElement>)=>{
        const index=skills.indexOf(event.target.value);

        if(index===-1){
            setSkills([...skills,event.target.value])
        }
        else{
            setSkills(skills.filter(skills=>skills!== event.target.value));
        }
    }

    return (
    <Box>
        <Box>
            <FormControlLabel
                label="Accept Terms and Conditions"
                control={
                    <Checkbox
                    onChange={tnC}
                    checked={accept}
                    />
                }
            ></FormControlLabel>
        </Box>

        <Box>
            <Checkbox
                icon={<StarBorderIcon/>}
                checkedIcon={<StarIcon/>}
                checked={accept}
                onChange={tnC}
            />
        </Box>

        <Box>
            <FormControl>
                <FormLabel>
                    Skills
                </FormLabel>

                <FormGroup>
                    <FormControlLabel
                        label="HTML"
                        value="html"
                        control={
                            <Checkbox
                            onChange={skillHandled}
                            checked={skills.includes("html")}
                            />
                        }
                    ></FormControlLabel>

                    <FormControlLabel
                        label="CSS"
                        value="css"
                        control={
                            <Checkbox
                            onChange={skillHandled}
                            checked={skills.includes("css")}
                            />
                        }
                    ></FormControlLabel>

                    <FormControlLabel
                        label="JavaScript"
                        value="js"
                        control={
                            <Checkbox
                            onChange={skillHandled}
                            checked={skills.includes("js")}
                            />
                        }
                    ></FormControlLabel>

                </FormGroup>
            </FormControl>
        </Box>

    </Box>
  )
}
