import React from 'react';
import { FormControl, InputLabel, makeStyles, MenuItem, Select,Button} from '@material-ui/core';
import FilterListIcon from '@material-ui/icons/FilterList';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 300,
    },
    formSearch: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

const FilterBox = () => {
    const classes = useStyles();
    
    return ( 
        <div className="by-price">
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Price</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    >
                    <MenuItem value={10}>The highest price</MenuItem>
                    <MenuItem value={20}>lowest price</MenuItem>
                </Select>
            </FormControl>
            <Button variant='contained' color='primary'>
                <FilterListIcon />
            </Button> 
        </div>
    );
}
 
export default FilterBox;