import React, { useState, useEffect } from "react";
import { Contents, Aside, Loader } from "./";
import { fetchAPI } from "../utils/fetchAPI";

const Maincont = () => {
    const [Area, setArea] = useState("ansan-si");
    const [lon, setlon] = useState([]);
    const [temp, setTemp] = useState([]);
    const [hour, setHour] = useState([]);
    const [pollution, setPollution] = useState([]);

    useEffect(() => {
        fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${Area}&limit=1&appid=65952c4c1ac0a9569e67db9e1e7dd70d`)
            .then((response) => response.json())
            .then((result) => setlon(result[0]))
            .catch((error) => console.log("error", error));
    }, [Area]);

    useEffect(() => {
        fetchAPI(`data/2.5/weather?lat=${lon.lat}&lon=${lon.lon}&lang=kr&units=metric`).then((data) => setTemp(data));
    }, [lon]);
    useEffect(() => {
        fetchAPI(`data/2.5/forecast?lat=${lon.lat}&lon=${lon.lon}&lang=kr&units=metric`).then((data) => setHour(data));
    }, [lon]);
    useEffect(() => {
        fetchAPI(`data/2.5/air_pollution?lat=${lon.lat}&lon=${lon.lon}`).then((data) => setPollution(data));
    }, [lon]);
    if (!lon) return <Loader />;

    return (
        <main id="main" className="main__wrap">
            <div className="main__inner">
                <Contents hour={hour} temp={temp} />
                <Aside temp={temp} pollution={pollution} onSearch={setArea} />
            </div>
        </main>
    );
};

export default Maincont;
