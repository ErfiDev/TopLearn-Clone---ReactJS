import React from 'react';
import {withRouter} from 'react-router-dom';

const Test = (props) => {

    // fetch('./img/logo.svg')
    // .then(response =>{
    //     console.log(response);
    //     return response.blob();
    // }).then(blob =>{
    //     console.log(blob);
    //     document.getElementById("img").src = URL.createObjectURL(blob);
    // })
    console.log(props);
    const click = (e)=>{
        let target = e.target.innerHTML;
        console.log(e.target.innerHTML);
        const urlAPI = `http://api.openweathermap.org/data/2.5/weather?q=${target}&appid=6cead677b4563809592af602e1e2344a&units=metric`;
        fetch(urlAPI).then(response =>{
            console.log(response)
            return response.json();
        }).then(json =>{
            console.log(json);
            document.getElementById("result").innerHTML = `${json.main.temp} Celsios`;
        });
    };
    
    return (  
        <div style={{height: "500px"}}>
            <button onClick={click}>tehran</button>
            <button onClick={click}>london</button>
            <button onClick={click}>tokyo</button>
            <button onClick={click}>paris</button>
            <button onClick={click}>barcelona</button>
        
            <hr />

            <h2 id="result">
            </h2>
        </div>
    );
}
 
export default withRouter(Test);
