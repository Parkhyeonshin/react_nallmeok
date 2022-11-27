import React from "react";
import { Loader } from "./";

const AsideGlobal = ({ pollution }) => {
    if (!pollution?.list) return <Loader />;

    return (
        <div className="subWeather__box">
            <div className="subWeather__inner">
                <article className="sub_info japan">
                    <h4>
                        CO
                        <br />
                        (일산화탄소)
                    </h4>
                    <div className="subInfo_box">
                        <div className="subWeather_img"></div>
                        <p className="sub_temp">
                            {pollution?.list[0].components.co} <br />
                            <em>μg/m 3</em>
                        </p>
                    </div>
                </article>
                <article className="sub_info china">
                    <h4>
                        NO
                        <br />
                        (일산화질소)
                    </h4>
                    <div className="subInfo_box">
                        <div className="subWeather_img"></div>
                        <p className="sub_temp">
                            {pollution?.list[0].components.no} <br />
                            <em>μg/m 3</em>
                        </p>
                    </div>
                </article>
                <article className="sub_info eastern">
                    <h4>
                        NO2
                        <br />
                        (이산화질소)
                    </h4>
                    <div className="subInfo_box">
                        <div className="subWeather_img"></div>
                        <p className="sub_temp">
                            {pollution?.list[0].components.no2} <br />
                            <em>μg/m 3</em>
                        </p>
                    </div>
                </article>
                <article className="sub_info russia">
                    <h4>
                        O3
                        <br />
                        (오존)
                    </h4>
                    <div className="subInfo_box">
                        <div className="subWeather_img"></div>
                        <p className="sub_temp">
                            {pollution?.list[0].components.o3} <br />
                            <em>μg/m 3</em>
                        </p>
                    </div>
                </article>
                <article className="sub_info us">
                    <h4>
                        PM2.5
                        <br />
                        (초미세먼지)
                    </h4>
                    <div className="subInfo_box">
                        <div className="subWeather_img"></div>
                        <p className="sub_temp">
                            {pollution?.list[0].components.pm2_5} <br />
                            <em>μg/m 3</em>
                        </p>
                    </div>
                </article>
                <article className="sub_info western">
                    <h4>
                        PM10
                        <br />
                        (초미세먼지)
                    </h4>
                    <div className="subInfo_box">
                        <div className="subWeather_img"></div>
                        <p className="sub_temp">
                            {pollution?.list[0].components.pm10} <br />
                            <em>μg/m 3</em>
                        </p>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default AsideGlobal;
