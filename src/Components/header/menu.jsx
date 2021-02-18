import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Link , withRouter} from 'react-router-dom';
import {useSelector} from 'react-redux';

const SimpleMenu = ({location})=> {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const userName = useSelector(state => state.User);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  let buttonName = "Accounts";
  if(userName.fullname)
  {
    buttonName = userName.fullname;
  }
  else{
    if(location.pathname === "/register")
    { 
      buttonName = "Register";
    }
    if(location.pathname === "/login")
    {
      buttonName = "Login"
    }
  }
  

  return (
    <div>
      <Button className="menu-btn" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        {buttonName}
        &nbsp;
        <i className="fas fa-caret-down"></i>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Link to="/login">Login</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/register">Register</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/">Logout</Link>  
        </MenuItem>
      </Menu>
    </div>
  );
}

export default withRouter(SimpleMenu);