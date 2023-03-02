import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" variant="h6" sx={{ mr: 2 }}>
            Checklist 
          </IconButton>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar

//box is your default element to wrap all other elements for your component in.
// position static - stays at the top of the screen
// Toolbar is like a box but it allows for special default styling classes, same with IconButton
