import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Dialog, DialogContent } from "@mui/material";
import "../User/UserBigCalendar.css";
import UserDialogContent from '../../dialogs/User/UserDialogContent';

moment.locale("en-GB");
const localizer = momentLocalizer(moment);

export default function UserBigCalendar() {
  const [selectedSlot, setSelectedSlot] = useState(null); 
  const [selectedDate,setSelectedDate] = useState(null);

  const handleSelect = ({ start, end }) => {
    setSelectedSlot({ start, end });
    setSelectedDate(moment(start).format("YYYY-MM-DD"));
  };

  const handleCloseDialog = () => {
    setSelectedSlot(null); 
    setSelectedDate(null);
  };

  return (
    <div className="App">
      <Calendar
        views={['month']}
        className="customBigCalendar"
        selectable
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        dayPropGetter={(date)=>({
            className: "customCell"
        })}
        onSelectSlot={handleSelect}
        onSelectEvent={(event)=>{
          setSelectedSlot(event);
          setSelectedDate(moment(event.start).format("YYYY-MM-DD"));
        }}
      />
      <Dialog open={selectedSlot !== null} onClose={handleCloseDialog} PaperProps={{ 
        style:{
            minWidth:'400px',
            maxWidth:'800px',       
            width:'80vw',
            margin:'auto'
        }
      }}>
        <DialogContent sx={{
          px:1,
          py:3
          }}>
            {selectedSlot && (
              <UserDialogContent start={selectedSlot.start} end={selectedSlot.end} />
            )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

