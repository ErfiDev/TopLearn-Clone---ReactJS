import React,{useState} from 'react';
import {AppBar, Button, IconButton, makeStyles, Toolbar, Typography} from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import {useSelector} from 'react-redux';
import ChangePass from './changePass';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  }));

const Dashboard = () => {
    const classes = useStyles();
    const [toggle , setToggle] = useState(false);

    const user = useSelector(state => state.User);

    let date = new Date();
    let year = date.getFullYear(user.createdAt);
    let month = date.getMonth(user.createdAt) + 1;

    return (  
        <div className="dashboard-container" style={{boxShadow: "0 1px 12px -4px rgba(0, 0, 0, 0.35)"}}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <PersonIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit">
                        {user.fullname}
                    </Typography>
                </Toolbar>
            </AppBar>
            {!toggle ? (
                <div className="dashboard">
                    <div className="user-info">
                        <ul>
                            <li>
                                <span className="info-span">fullname:</span>
                                {user.fullname}
                            </li>

                            <li>
                                <span className="info-span">email:</span> 
                                {user.email}
                            </li>

                            <li>
                                <span className="info-span">join date:</span> 
                                {year + '/' + month }
                            </li>
                        </ul>
                    </div>
                </div>
            ) : (
                <ChangePass />
            )}
            <div className="dahboard-btn-container">
                <Button 
                    variant="contained" 
                    color="secondary" 
                    style={{outline: "none",width: '50%'}}
                    onClick={()=> setToggle(!toggle)}>
                    {!toggle ? 'Change passwords' : 'Go to dashboard'}
                </Button>
            </div>
        </div>
    );
}
 
export default Dashboard;