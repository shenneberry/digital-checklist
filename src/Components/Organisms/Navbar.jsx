import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import { MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';


function Navbar() {
  const shiftMenuItems = [
    {
      title: "7am-3pm"
    },
    {
      title: "3pm-11pm"
    },
    {
      title: "Night Audit"
    }
  ];
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = e => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLink = () => {

  }
  
  const nativeOnChange = e => {
    const detail = {
      selectedIndex: e.target.selectedIndex
    };
    e.target.selectedIndex = 0;
  
    e.target.dispatchEvent(new CustomEvent("itemClick", { detail }));
  };
  
  const itemClick = e => {
    console.log("Item Clicked " + e.detail);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          
          <IconButton
            aria-controls="shift-menu"
            aria-haspopup="true"
            onClick={handleClick}
            aria-label="Open to show more"
            title="Open to show more"
          >
            Checklists
          </IconButton>
          <Menu
            id="shift-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem>
              <Link to="seven-am-three-pm-shift">7am-3pm</Link>
            </MenuItem>
            </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar

//box is your default element to wrap all other elements for your component in.
// position static - stays at the top of the screen
// Toolbar is like a box but it allows for special default styling classes, same with IconButton



 
    