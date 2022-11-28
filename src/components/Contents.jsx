import React from "react";
import { ContentSlide, ContentDesc, Loader } from "./";

const Contetns = ({ hour, temp }) => {
    // console.log(temp?.main?.temp);
    // const temper = temp?.main?.temp;
    const date = new Date();
    // console.log(date.getHours());
    if (!temp?.main) return <Loader />;
    if (date.getHours() < 18 && date.getHours() > 6) {
        if (temp?.weather[0].id >= 200 && temp?.weather[0].id <= 531) {
            return (
                <section id="contents" className="contents__wrap day rainyday ">
                    <div className="contents__inner">
                        <h2>이런날 이런 음식 어때?</h2>
                        <ContentSlide temp={temp} />
                        <ContentDesc hour={hour} temp={temp} />
                    </div>
                </section>
            );
        } else if (temp?.weather[0].id >= 600 && temp?.weather[0].id <= 622) {
            return (
                <section id="contents" className="contents__wrap day snowday ">
                    <div className="contents__inner">
                        <h2>이런날 이런 음식 어때?</h2>
                        <ContentSlide temp={temp} />
                        <ContentDesc hour={hour} temp={temp} />
                    </div>
                </section>
            );
        } else {
            return (
                <section id="contents" className="contents__wrap day normalday">
                    <div className="contents__inner">
                        <h2>이런날 이런 음식 어때?</h2>
                        <ContentSlide temp={temp} />
                        <ContentDesc hour={hour} temp={temp} />
                    </div>
                </section>
            );
        }
    } else {
        if (temp?.weather[0].id >= 200 && temp?.weather[0].id <= 531) {
            return (
                <section id="contents" className="contents__wrap night rainynight ">
                    <div className="contents__inner">
                        <h2>이런날 이런 음식 어때?</h2>
                        <ContentSlide temp={temp} />
                        <ContentDesc hour={hour} temp={temp} />
                    </div>
                </section>
            );
        } else if (temp?.weather[0].id >= 600 && temp?.weather[0].id <= 622) {
            return (
                <section id="contents" className="contents__wrap night snownight ">
                    <div className="contents__inner">
                        <h2>이런날 이런 음식 어때?</h2>
                        <ContentSlide temp={temp} />
                        <ContentDesc hour={hour} temp={temp} />
                    </div>
                </section>
            );
        } else {
            return (
                <section id="contents" className="contents__wrap night normalnight">
                    <div className="contents__inner">
                        <h2>이런날 이런 음식 어때?</h2>
                        <ContentSlide temp={temp} />
                        <ContentDesc hour={hour} temp={temp} />
                    </div>
                </section>
            );
        }
    }
    // return (
    //     <section id="contents" className="contents__wrap night normalnight">
    //         <div className="contents__inner">
    //             <h2>이런날 이런 음식 어때?</h2>
    //             <ContentSlide temp={temp} />
    //             <ContentDesc hour={hour} temp={temp} />
    //         </div>
    //     </section>
    // );
};

export default Contetns;
