import React from 'react';
import { FormControl, InputLabel, makeStyles, MenuItem, Select,Button} from '@material-ui/core';
import FilterListIcon from '@material-ui/icons/FilterList';
import {useDispatch} from 'react-redux';
import FilterAction from '../../Action/filterCourses';

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
    const dis = useDispatch();

    function applyPriceFilter()
    {
        let findInput = document.querySelector('.MuiSelect-nativeInput');
        if(!findInput.value) return null
        dis(FilterAction(null , findInput.value , null));
    }
    
    return ( 
        <div className="by-price">
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Price</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    >
                    <MenuItem value="highPrice">Sort by the most expensive price</MenuItem>
                    <MenuItem value="lowPrice">Sort by cheapest price</MenuItem>
                </Select>
            </FormControl>
            <Button onClick={applyPriceFilter} variant='contained' color='primary'>
                <FilterListIcon />
            </Button> 
        </div>
    );
}
 
export default FilterBox;