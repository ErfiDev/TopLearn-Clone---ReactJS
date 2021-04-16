import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

const SearchBox = () => {
    return ( 
        <div className="by-search">
            <form style={{width: '100%',display: 'flex',justifyContent: 'center'}}>
                <div className="input-group mb-3 w-75">
                    <div className="input-group-prepend">
                        <button 
                            className="btn btn-secondary" 
                            type="submit"
                            >
                            <SearchIcon fontSize="inherit" />
                        </button>
                    </div>
                    <input 
                        type="text" 
                        className="form-control"
                        placeholder="Seacrh by course title" 
                        aria-label="" 
                        aria-describedby="basic-addon1"
                    />
                </div>
            </form>
        </div>
    );
}
 
export default SearchBox;