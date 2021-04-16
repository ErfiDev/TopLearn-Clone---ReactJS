import React,{useState} from 'react';
import SearchIcon from '@material-ui/icons/Search';
import {toast} from 'react-toastify';
import {useDispatch} from 'react-redux';
import filterCourse from '../../Action/filterCourses';

const SearchBox = () => {
    const [value , setValue] = useState('');
    const dis = useDispatch();

    function search(e)
    {
        e.preventDefault();
        if(value.length === 0){
            return toast.error('Field is empty!' , {
                position: 'bottom-left',
                closeOnClick: true
            });
        }
        dis(filterCourse(null,null,value));
    }
    
    return ( 
        <div className="by-search">
            <form onSubmit={e=> search(e)} style={{width: '100%',display: 'flex',justifyContent: 'center'}}>
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
                        aria-describedby="basic-addon1"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                </div>
            </form>
        </div>
    );
}
 
export default SearchBox;