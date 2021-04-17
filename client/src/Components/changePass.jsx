import React,{useState} from 'react';
import { Button, TextField ,makeStyles } from '@material-ui/core';
import { toast } from 'react-toastify';
import {updatePassword} from '../Services/userService';
import {useSelector} from 'react-redux'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
  },
  parent: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '250px',
      marginBottom: '25px'
  }
}));

const ChangePass = () => {
    const classes = useStyles();
    const [pass,setPass] = useState({
        pass1: '',
        pass2: ''
    });
    const {_id} = useSelector(state => state.User);

    async function passChange(e)
    {
        e.preventDefault();
        let {pass1 , pass2} = pass;
        if(pass1.length < 8){
            return toast.error('The password must be at least 8 words' , {
                position: 'bottom-left',
                closeOnClick: true
            })
        }
        else{
            if(pass1 !== pass2)
            {
                return toast.error('Passwords do not match',{
                    position: 'bottom-left',
                    closeOnClick: true
                })
            }

            let {data} = await updatePassword(_id , pass1);
            if(data.status !== 200){
                return toast.error(data.msg , {
                    position: 'bottom-left',
                    closeOnClick: true
                });
            }else{
                toast.success('Password changed!' , {
                    position: 'bottom-left',
                    closeOnClick: true
                });
            }
        }
    }

    return (  
        <div className={classes.parent}>
            <form onSubmit={e => passChange(e)} className={classes.root} noValidate autoComplete="off">
                <TextField 
                    id="filled-basic" 
                    label="New password" 
                    variant="filled" 
                    value={pass.pass1}
                    onChange={e => setPass({...pass, pass1: e.target.value})}
                />
                <TextField 
                    id="filled-basic" 
                    label="Repeat password" 
                    variant="filled"
                    value={pass.pass2}
                    onChange={e => setPass({...pass, pass2: e.target.value})}
                />
                <br />
                <Button style={{outline: 'none'}}
                    type="submit" variant="contained" color="primary">
                    Apply
                </Button>
            </form>
        </div>
    );
}
 
export default ChangePass;