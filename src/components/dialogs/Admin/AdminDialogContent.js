import React from 'react';
import { Box, Container, FormControl, InputLabel, MenuItem, Select, TextField, Button, Autocomplete } from '@mui/material';
import { useState } from 'react';
import dayjs from 'dayjs';

const AdminDialogContent = () => {
    const [selectedStudent, setSelectedStudent] = useState('');
    const [selectedTimeStart, setSelectedTimeStart] = useState('08:00');
    const [selectedTimeEnd, setSelectedTimeEnd] = useState('');
    const [selectedUzunluk, setSelectedUzunluk] = useState('');
    const [selectedKontenjan, setSelectedKontenjan] = useState('');
    const students = ['Öğrenci 1', 'Öğrenci 2', 'Öğrenci 3'];
    const [open, setOpen] = useState(true);
    const kontenjanOptions = Array.from({ length: 11 }, (_, i) => i + 1);
    const uzunlukOptions = Array.from({ length: 12 }, (_, i) => i + 1)

    const handleSelectedStudent = (event) => {
        setSelectedStudent(event.target.value);
    }

    const handleSelectedTime = (event) => {
        setSelectedTimeStart(event.target.value);
    }

    const handleSelectedUzunluk = (event) => {
        setSelectedUzunluk(event.target.value);
    }

    const handleSelectedKontenjan = (event) => {
        setSelectedKontenjan(event.target.value);
    }

    const restrictedTimes = [
        dayjs().set('hour', 8),
        dayjs().set('hour', 22)
    ]

    const isTimeDisabled = (time) => {
        return restrictedTimes.some((restrictedTime) =>
            time.isSame(restrictedTime)
        );
    };

    return (
        <Container style={{ height: '300px' }}>
            <Box display="flex" flexDirection="row">
                <FormControl sx={{ flexBasis: '50%', mr: 1 }} fullWidth>
                    <Autocomplete
                        disablePortal
                        size='small'
                        id='student-combo-box'
                        options={students}
                        fullWidth
                        filterOptions={(options, state) =>
                            options.filter(option => option.toLowerCase().includes(state.inputValue.toLowerCase()))
                        }
                        onChange={handleSelectedStudent}
                        renderInput={(params) => <TextField {...params} label="Öğrenci Seçimi" />}
                        sx={{marginTop:'10px'}}
                    />

                </FormControl>
                <FormControl sx={{ flexBasis: '50%' }} fullWidth>
                    <TextField
                        label="Başlangıç Saati"
                        type="time"
                        value={selectedTimeStart}
                        onChange={handleSelectedTime}
                        variant="outlined"
                        size="small"
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={{ min: '08:00', max: '21:00' }}
                        sx={{ marginTop: '10px' }}
                    />
                </FormControl>
            </Box>
            <Box display="flex" flexDirection="row">
                <FormControl sx={{ marginTop: '10px', flexBasis: '50%', mr: 1 }} fullWidth>
                    <InputLabel sx={{ textAlign: 'center' }} id="lesson-select-label">
                        {'Ders Kontenjanı'}
                    </InputLabel>
                    <Select
                        label="Kontenjan Seçimi"
                        value={selectedKontenjan}
                        onChange={handleSelectedKontenjan}
                        variant="outlined"
                        size="small"
                        fullWidth
                        MenuProps={{
                            anchorOrigin: {
                                vertical: 'bottom',
                                horizontal: 'left',
                            },
                            transformOrigin: {
                                vertical: 'top',
                                horizontal: 'left',
                            },
                            sx: {
                                '& .MuiPaper-root': {
                                    maxHeight: 200,
                                },
                            },
                        }}
                    >
                        <MenuItem value="">Kontenjan Seçiniz</MenuItem>
                        {kontenjanOptions.map((option, index) => (
                            <MenuItem key={index} value={option}>{option}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl sx={{ marginTop: '10px', flexBasis: '50%' }} fullWidth>
                    <InputLabel sx={{ textAlign: 'center' }} id="lesson-select-label">
                        {'Ders Uzunluğu'}
                    </InputLabel>
                    <Select
                        label="Ders Uzunluğu"
                        value={selectedUzunluk}
                        onChange={handleSelectedUzunluk}
                        variant='outlined'
                        size='small'
                        fullWidth
                        MenuProps={{
                            anchorOrigin: {
                                vertical: 'bottom',
                                horizontal: 'left',
                            },
                            transformOrigin: {
                                vertical: 'top',
                                horizontal: 'left',
                            },
                            sx: {
                                '& .MuiPaper-root': {
                                    maxHeight: 200,
                                },
                            },
                        }}
                    >
                        {uzunlukOptions.map((uzunluk, index) => (
                            <MenuItem key={index} value={uzunluk}>{uzunluk} Saat</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>
            <Box>
                <FormControl sx={{ marginTop: '10px' }} fullWidth>
                    <TextField
                        label="Ders Açıklaması"
                        multiline
                        rows={4}
                        placeholder="Ders Açıklaması"
                        variant="outlined"
                    />
                </FormControl>
            </Box>
            <Box display="flex" justifyContent="flex-end" mt={2}>
                <Button variant="contained" color="primary" >Onayla</Button>
                <Button variant="outlined" color="error" sx={{ ml: 1 }} >İptal</Button>
            </Box>
        </Container>
    );
};

export default AdminDialogContent;
