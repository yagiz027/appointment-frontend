import { FormControl } from "@mui/material";
import { TimePicker } from "@mui/x-date-pickers";
import React from "react";
const CreateLessonForm = () => {
    return(
        <Container>
            <FormControl>                
                <Box>
                    <TimePicker>

                    </TimePicker>
                </Box>
            </FormControl>
            <FormControl>
                <Box>
                    <TimePicker>

                    </TimePicker>
                </Box>
            </FormControl>
        </Container>
    );
}

export default CreateLessonForm;