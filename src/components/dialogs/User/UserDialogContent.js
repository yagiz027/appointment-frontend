import React, { useEffect, useState } from 'react';
import { Box, Container, FormControl, Grid, TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import './UserDialog.css';
import timeLapsData from './timeLapsData.json';

const TimePicker = () => {
    const [selectedHour, setSelectedHour] = useState(8);
    const [selectedTimeLaps, setSelectedTimeLaps] = useState('');
    const [selectedTimeRange, setSelectedTimeRange] = useState('');
    const [selectedLesson,setSelectedLesson] = useState('Antreman 1');

    const timeLaps = ['Sabah', 'Öğlen', 'Akşam'];
    const lessons  = ['Antreman 1','Antreman 2','Antreman 3'];


    const handleTimeLapsChange = (event) => {
        setSelectedTimeLaps(event.target.value);
        setSelectedTimeRange('');
    };

    const handleLessonSelect = (event) => {
        setSelectedLesson(event.target.value);
    }

    useEffect(() => {
        setSelectedTimeLaps('Sabah');
        setSelectedTimeRange('');
    }, []);

    const handleHourChange = (hour, index) => {
        setSelectedHour(hour);
        const selectedRange = timeLapsData[selectedTimeLaps][index];
        setSelectedTimeRange(selectedRange);
    };

    const filteredTimeSlots = () => {
        if (selectedTimeLaps === 'Sabah') {
            return Object.values(timeLapsData[selectedTimeLaps]);
        } else if (selectedTimeLaps === 'Öğlen') {
            return Object.values(timeLapsData[selectedTimeLaps]);
        } else if (selectedTimeLaps === 'Akşam') {
            return Object.values(timeLapsData[selectedTimeLaps]);
        } else {
            return Object.values([timeLapsData[selectedTimeLaps]]);
        }
    };

    return (
        <Container className='main-container'>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <FormControl className='time-picker-header' sx={{ m: 1, minWidth: 120 }}>
                    <Select
                        size='small'
                        labelId='time-laps-label'
                        id='time-laps-select'
                        value={selectedTimeLaps}
                        onChange={handleTimeLapsChange}
                        displayEmpty
                        defaultValue=''
                    >
                        {timeLaps.map((lap, index) => (
                            <MenuItem
                                key={index}
                                value={lap}
                            >
                                {lap}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl>
                    <Select
                    size='small'
                    labelId='lessons'
                    id='lessons-select'
                    value={selectedLesson}
                    displayEmpty
                    onChange={handleLessonSelect} >
                        {lessons.map((lesson,index) =>(
                            <MenuItem key={index} value={lesson}>{lesson}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>
            <Container className='time-list-container'>
                <Box 
                    component="div" sx={{
                    display: 'block',
                    height: '300px',
                    overflowY: 'scroll',
                    margin: "0%",
                    boxShadow:'2'
                }}>
                    {filteredTimeSlots().map((timeSlot, index) => (
                        <div className='timeSlots' key={index} onClick={() => handleHourChange(8 + index, index)}>
                            {timeSlot}
                        </div>
                    ))}
                </Box>
            </Container>
            <footer className='time-picker-footer' style={{ height: '40px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <span style={{ paddingTop: '12px', marginRight: '8px', flexShrink: 0 }}>Seçilen Saat Aralığı:</span>
                <TextField
                    size='small'
                    value={selectedTimeRange}
                    InputProps={{
                        readOnly: true,
                    }}
                    sx={{
                        width: '150px',
                        height: '20px',
                        textAlign: 'center',
                    }}
                />
            </footer>
        </Container>
    );
};

export default TimePicker;
