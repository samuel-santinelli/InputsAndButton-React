import React, { Component } from 'react'
import Input from "@mui/material/Input";
import SendIcon from '@mui/icons-material/Send';
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import WcIcon from '@mui/icons-material/Wc';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export class Inputs extends Component {
  render() {
    return (
        <div>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
         <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <CalendarTodayIcon />
            </InputAdornment>
          }
        />
         <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AlternateEmailIcon />
            </InputAdornment>
          }
        />
         <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <LocationOnIcon />
            </InputAdornment>
          }
        />
         <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <CallIcon />
            </InputAdornment>
          }
        />
         <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AssignmentIndIcon />
            </InputAdornment>
          }
        />
         <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <WcIcon />
            </InputAdornment>
          }
        />
        </div>
    )
  }
}

export default Inputs