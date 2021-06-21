import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonOutlineTwoToneIcon from '@material-ui/icons/PersonOutlineTwoTone';
import AccountTreeTwoToneIcon from '@material-ui/icons/AccountTreeTwoTone';
import InfoTwoToneIcon from '@material-ui/icons/InfoTwoTone';
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';

const Menu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        Open Menu
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemIcon>
            <HomeTwoToneIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="home" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <InfoTwoToneIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="about" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <AccountTreeTwoToneIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="work" />
        </StyledMenuItem>
        <StyledMenuItem>
          <istItemIconL>
            <PersonOutlineTwoToneIcon fontSize="small" />
          </istItemIconL>
          <ListItemText primary="contact" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}

export default Menu;