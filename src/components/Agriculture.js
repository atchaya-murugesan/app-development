import React from 'react';
import { Link } from 'react-router-dom';
import { 
  AppBar, Toolbar,  Typography, Drawer, List, ListItem, ListItemIcon, ListItemText,
  CssBaseline, Divider, Box, Collapse 
} from '@mui/material';
import GrassIcon from '@mui/icons-material/Grass';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import PestControlIcon from '@mui/icons-material/PestControl';
import './Agriculture.css';

const drawerWidth = 240;

const Agriculture = () => {
  const [openSubmenu, setOpenSubmenu] = React.useState(false);

  const handleSubmenuToggle = () => {
    setOpenSubmenu(!openSubmenu);
  };

  return (
    <div className='agri'>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            position: 'relative', 
                        top: '20px', 
            height: 'calc(100% - 300px)',
            backgroundColor: 'white',
          },
        }}
        variant="persistent"
        anchor="left"
        open={true} 
      >
        <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)` }}>
        </AppBar>
        <Toolbar />
        <Divider />
        <List>
         
          <ListItem button onClick={handleSubmenuToggle} sx={{ '&:hover': { backgroundColor: '#e0e0e0' } }}>
            <ListItemIcon><GrassIcon/></ListItemIcon>
            <ListItemText primary="Crop Management" />
          </ListItem>
          <Collapse in={openSubmenu}>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/agriculture/crop-management/overview" sx={{ pl: 4, '&:hover': { backgroundColor: '#f1f1f1' } }}>
                <ListItemText primary="Overview" />
              </ListItem>
              <ListItem button component={Link} to="/agriculture/crop-management/techniques" sx={{ pl: 4, '&:hover': { backgroundColor: '#f1f1f1' } }}>
                <ListItemText primary="Techniques" />
              </ListItem>
            </List>
          </Collapse>
          <ListItem button component={Link} to="/agriculture/pest-management" sx={{ '&:hover': { backgroundColor: '#e0e0e0' } }}>
            <ListItemIcon><PestControlIcon/></ListItemIcon>
            <ListItemText primary="Pest Management" />
          </ListItem>
          <ListItem button component={Link} to="/agriculture/irrigation" sx={{ '&:hover': { backgroundColor: '#e0e0e0' } }}>
            <ListItemIcon><WaterDropIcon/></ListItemIcon>
            <ListItemText primary="Irrigation" />
          </ListItem>
          <ListItem button component={Link} to="/agriculture/market-trends" sx={{ '&:hover': { backgroundColor: '#e0e0e0' } }}>
            <ListItemIcon><AddBusinessIcon/></ListItemIcon>
            <ListItemText primary="Market Trends" />
          </ListItem>
        </List>
      </Drawer>
      <Box
        component="main"
        className="mainContent"
        sx={{ 
          flexGrow: 1, 
          p: 3, 
          marginLeft: `${drawerWidth}px` 
        }}
      >
      
        <Toolbar />
      
        <Typography variant="h4" gutterBottom>

        </Typography>
        
      </Box>
    </div>
  );
};

export default Agriculture;
