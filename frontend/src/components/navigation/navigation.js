import React from "react";

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import "./styles.scss";

import atenaLogoPurple from "../../assets/images/atena-logo-purple.png";


export default function SideBarNavigation(props) {
  return(
    <Box sx={{ display: 'flex' }}>
      <Drawer
        sx={{
          width: 300,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 300,
            boxSizing: 'border-box',
            backgroundColor: '#8187DC',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <img src={atenaLogoPurple} alt="logo"/>
        {/* <Divider /> */}
          <List>
            {props.modules.map((text) => (
              <ListItem button key={text}>
                <ListItemText
                  primary={text}
                  sx={{
                    color: '#FFF'
                  }}
                />
              </ListItem>
            ))}
          </List>
        {/* <Divider /> */}
      </Drawer>
    </Box>
  )
};
