import React from "react";
import { Loader } from "./";

const ContentDesc = ({ hour, temp }) => {
    // console.log(hour.list);
    if (!hour?.list) return <Loader />;
    let DescList = "기본문구";

    if (temp?.weather[0].id >= 200 && temp?.weather[0].id <= 531) {
        DescList = "오늘은 비소식이 있어요.\n 잊지말고 우산 챙겨서 나가세요!";
    } else if (temp?.weather[0].id >= 600 && temp?.weather[0].id <= 622) {
        DescList = "오늘은 눈소식이 있네요.\n 지갑에 붕어빵살 현금정도는 챙기고 나가시겠죠?";
    } else if (temp?.main?.temp >= 26) {
        DescList = "오늘은 날씨가 너무 더워요. \n시원한 음식으로 더위를 풀어보는 건 어떨까요?";
    } else if (temp?.main?.temp < 26 && temp?.main?.temp > 3) {
        DescList = "오늘은 날씨가 화창해요.\n뭐하세요? 날먹 그만보고 돗자리 들고 한강으로 달려가세요";
    } else if (temp?.main?.temp < 3) {
        DescList = "오늘은 추운날이에요.\n 따뜻하게 입고 나가세요";
    } else {
        DescList = "Error/관리자문의요청";
    }

    console.log("desc");
    return (
        <div className="contents__descWrap">
            <div className="time_weather">
                <div>
                    <img src={`http://openweathermap.org/img/wn/${hour?.list[3].weather[0].icon}@2x.png`} alt="icon" className="time_weather_svg" />
                    <div>{hour?.list[3].dt_txt}</div>
                </div>
                <div>
                    <img src={`http://openweathermap.org/img/wn/${hour?.list[4].weather[0].icon}@2x.png`} alt="icon" className="time_weather_svg" />
                    <div>{hour?.list[4].dt_txt}</div>
                </div>
                <div>
                    <img src={`http://openweathermap.org/img/wn/${hour?.list[5].weather[0].icon}@2x.png`} alt="icon" className="time_weather_svg" />
                    <div>{hour?.list[5].dt_txt}</div>
                </div>
                <div>
                    <img src={`http://openweathermap.org/img/wn/${hour?.list[6].weather[0].icon}@2x.png`} alt="icon" className="time_weather_svg" />
                    <div>{hour?.list[6].dt_txt}</div>
                </div>
                <div>
                    <img src={`http://openweathermap.org/img/wn/${hour?.list[7].weather[0].icon}@2x.png`} alt="icon" className="time_weather_svg" />
                    <div>{hour?.list[7].dt_txt}</div>
                </div>
                <div>
                    <img src={`http://openweathermap.org/img/wn/${hour?.list[8].weather[0].icon}@2x.png`} alt="icon" className="time_weather_svg" />
                    <div>{hour?.list[8].dt_txt}</div>
                </div>
            </div>
            <div className="time__desc">
                <div>
                    <p>{DescList}</p>
                </div>
            </div>
        </div>
    );
};

export default ContentDesc;
