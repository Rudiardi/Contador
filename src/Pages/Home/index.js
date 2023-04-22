import React, { useEffect, useState} from "react";
import './index.css';

function Home(){
    function OpenHome(){
        fetch("http://worldtimeapi.org/api/ip")
            .then((response) => response.json())
            .then((data) => setVarHome(data.datetime));
    }

    const [varHome, setVarHome] = useState([]);
    useEffect(() => {OpenHome()});

    return(
        <div className="containerGeral">
            <text className="textoRelogio">{varHome}</text>
        </div>
    )
}

export default Home;