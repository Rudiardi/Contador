import React, { useEffect, useState} from "react";
import './index.css';

function Home(){
    function OpenHome(){
        fetch('http://worldtimeapi.org/api/ip')
        .then(response => response.json())
        .then(data => console.log(data));
    }

    useEffect(() => {OpenHome()});

    return(
        <div className="containerGeral">
            <text className="textoRelogio">00h:01m:00s</text>
        </div>
    )
}

export default Home;