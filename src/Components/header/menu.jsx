import React from 'react';
import {isEmpty} from 'lodash';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Link} from 'react-router-dom';
import {useSelector , useDispatch} from 'react-redux';
import {deleteUser} from '../../Action/userAction';

const SimpleMenu = ()=> {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dis = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const userInfo = useSelector(state => state.User);

  return(

    <React.Fragment>
      {isEmpty(userInfo) ? (
        <div>
          <Button className="menu-btn" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            Account
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
      ) : (
        <div>
        <Button className="menu-btn" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          {userInfo.fullname}
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
            <Link to="/">Setting</Link>
          </MenuItem>
          <MenuItem onClick={()=> dis(deleteUser())}>
            <Link to="/">Logout</Link>
          </MenuItem>
        </Menu>
      </div>
      )}
    </React.Fragment>

  );
}

export default SimpleMenu;
