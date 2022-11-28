import React from "react";
import { Loader } from "./";

const AsideMain = ({ temp, pollution }) => {
    // console.log(pollution);
    const currenttemp = Math.floor(temp?.main?.temp);
    const feeltemp = Math.floor(temp?.main?.feels_like);
    if (!pollution?.list) return <Loader />;
    if (!temp?.main) return <Loader />;
    return (
        <div className="mainWeather__box">
            <div className="mainWeather__inner">
                <p className="main_cityName">
                    <img src={require("../assets/img/mapMarker_ico.svg").default} alt="" />
                    {temp?.name}
                </p>
                <p className="main_cityTemp">
                    <em>{currenttemp}</em> º
                </p>
                <div className="main_weatherImg">
                    {temp?.weather?.map((e, inx) =>
                        inx === 0 ? <img src={`http://openweathermap.org/img/wn/${e.icon}@2x.png`} alt="날씨아이콘" key={inx} /> : null
                    )}
                </div>
                <div className="main__weatherInfo">
                    <div className="mainWeatherInfo__inner">
                        <article className="info precipitation">
                            <h5>체감온도</h5>
                            <p>{feeltemp} º</p>
                        </article>
                        <article className="info humidity">
                            <h5>습도</h5>
                            <p>{temp?.main?.humidity} %</p>
                        </article>
                        <article className="info wind">
                            <h5>바람</h5>
                            <p>{temp?.wind?.speed} m/s</p>
                        </article>
                        <article className="info dust">
                            <h5>오염지수</h5>
                            <p>{pollution?.list[0].main?.aqi} </p>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AsideMain;
