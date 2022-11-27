import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { EffectCoverflow, Navigation } from "swiper";
import { Loader } from "./";

const ContentSlide = ({ temp }) => {
    if (!temp?.main?.temp) return <Loader />;
    const rainfood = [
        {
            img: require("../assets/img/꼬막.svg").default,
            name: "꼬막",
        },
        {
            img: require("../assets/img/바지락칼국수.svg").default,
            name: "바지락칼국수",
        },
        {
            img: require("../assets/img/라멘.svg").default,
            name: "라멘",
        },
        {
            img: require("../assets/img/쭈꾸미.svg").default,
            name: "쭈꾸미",
        },
        {
            img: require("../assets/img/키조개.svg").default,
            name: "키조개",
        },
    ];
    const snowfood = [
        {
            img: require("../assets/img/부대찌개.svg").default,
            name: "부대찌개",
        },
        {
            img: require("../assets/img/붕어빵.svg").default,
            name: "붕어빵",
        },
        {
            img: require("../assets/img/붕어빵.svg").default,
            name: "붕어빵",
        },
        {
            img: require("../assets/img/쭈꾸미.svg").default,
            name: "쭈꾸미",
        },
        {
            img: require("../assets/img/갈비탕.svg").default,
            name: "갈비탕",
        },
        {
            img: require("../assets/img/호박죽.svg").default,
            name: "호박죽",
        },
    ];
    const hotfood = [
        {
            img: require("../assets/img/빙수.svg").default,
            name: "빙수",
        },
        {
            img: require("../assets/img/콩국수.svg").default,
            name: "콩국수",
        },
        {
            img: require("../assets/img/냉모밀.svg").default,
            name: "냉모밀",
        },
        {
            img: require("../assets/img/화채.svg").default,
            name: "화채",
        },
        {
            img: require("../assets/img/냉면.svg").default,
            name: "냉면",
        },
        {
            img: require("../assets/img/수박.svg").default,
            name: "수박",
        },
        {
            img: require("../assets/img/삼계탕.svg").default,
            name: "삼계탕",
        },
    ];
    const normalfood = [
        {
            img: require("../assets/img/간장게장.svg").default,
            name: "간장게장",
        },
        {
            img: require("../assets/img/참치.svg").default,
            name: "참치",
        },
        {
            img: require("../assets/img/비빔밥.svg").default,
            name: "비빔밥",
        },
        {
            img: require("../assets/img/쭈꾸미.svg").default,
            name: "쭈꾸미",
        },
        {
            img: require("../assets/img/키조개.svg").default,
            name: "키조개",
        },
        {
            img: require("../assets/img/반미.svg").default,
            name: "반미",
        },
        {
            img: require("../assets/img/석류.svg").default,
            name: "석류",
        },
        {
            img: require("../assets/img/햄버거.svg").default,
            name: "햄버거",
        },
        {
            img: require("../assets/img/킹크랩.svg").default,
            name: "킹크랩",
        },
    ];
    const coldfood = [
        {
            img: require("../assets/img/라멘.svg").default,
            name: "라멘",
        },
        {
            img: require("../assets/img/훠궈.svg").default,
            name: "훠궈",
        },
        {
            img: require("../assets/img/바지락칼국수.svg").default,
            name: "바지락칼국수",
        },
        {
            img: require("../assets/img/부대찌개.svg").default,
            name: "부대찌개",
        },
        {
            img: require("../assets/img/똠양꿍.svg").default,
            name: "똠양꿍",
        },
        {
            img: require("../assets/img/갈비탕.svg").default,
            name: "갈비탕",
        },
        {
            img: require("../assets/img/호박죽.svg").default,
            name: "호박죽",
        },
        {
            img: require("../assets/img/떡볶이.svg").default,
            name: "떡볶이",
        },
    ];
    const errorfood = [
        {
            img: require("../assets/img/에러.svg").default,
            name: "관리자문의[에러]",
        },
    ];
    let FoodList = "";

    if (temp?.weather[0].id >= 200 && temp?.weather[0].id <= 531) {
        FoodList = rainfood;
    } else if (temp?.weather[0].id >= 600 && temp?.weather[0].id <= 622) {
        FoodList = snowfood;
    } else if (temp?.main?.temp >= 26) {
        FoodList = hotfood;
    } else if (temp?.main?.temp < 26 && temp?.main?.temp > 3) {
        FoodList = normalfood;
    } else if (temp?.main?.temp < 3) {
        FoodList = coldfood;
    } else {
        FoodList = errorfood;
    }

    console.log(temp);
    return (
        <div className="contetns__slideWrap">
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                loop={true}
                coverflowEffect={{
                    rotate: -10,
                    stretch: -200,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                }}
                navigation={true}
                // navigation={{
                //     prevEl: true,
                //     nextEl: false,
                // }}
                modules={[EffectCoverflow, Navigation]}
                className="mySwiper"
            >
                {FoodList.map((e, i) => (
                    <SwiperSlide>
                        <img src={FoodList[i].img} alt="이미지테스트" />
                        <div className="swiper-name">{FoodList[i].name}</div>
                    </SwiperSlide>
                ))}
                {/* <SwiperSlide>
                    <img src={foodList[0].img} alt="이미지테스트" />
                    <div className="swiper-name">{foodList[0].name}</div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={foodList[1].img} alt="이미지테스트" />
                    <div className="swiper-name">{foodList[1].name}</div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img1} alt="이미지" />
                    <div className="swiper-name">냉면</div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img1} alt="이미지" />
                    <div className="swiper-name">냉면</div>
                </SwiperSlide> */}
            </Swiper>
            {/* {addbtn()} */}
            {/* <div className="swiper mySwiper">
        <div className="swiper-wrapper">
            <div className="swiper-slide">
                <img src="/assets/img/냉면.png" alt="스와이프이미지" />
                <div className="swiper-name">냉면</div>
            </div>
            <div className="swiper-slide">
                <img src="./assets/img/삼계탕.png" alt="스와이프이미지" />
                <div className="swiper-name">삼계탕</div>
            </div>
            <div className="swiper-slide">
                <img src="./assets/img/화채.png" alt="스와이프이미지" />
                <div className="swiper-name">화채</div>
            </div>
            <div className="swiper-slide">
                <img src="./assets/img/냉면.png" alt="스와이프이미지" />
                <div className="swiper-name">냉면</div>
            </div>
            <div className="swiper-slide">
                <img src="./assets/img/삼계탕.png" alt="스와이프이미지" />
                <div className="swiper-name">삼계탕</div>
            </div>
            <div className="swiper-slide">
                <img src="./assets/img/화채.png" alt="스와이프이미지" />
                <div className="swiper-name">화채</div>
            </div>
            <div className="swiper-slide">
                <img src="./assets/img/냉면.png" alt="스와이프이미지" />
                <div className="swiper-name">냉면</div>
            </div>
            <div className="swiper-slide">
                <img src="./assets/img/삼계탕.png" alt="스와이프이미지" />
                <div className="swiper-name">삼계탕</div>
            </div>
            <div className="swiper-slide">
                <img src="./assets/img/화채.png" alt="스와이프이미지" />
                <div className="swiper-name">화채</div>
            </div>
        </div>
        <button className="swiper-button-next">Nope!</button>
        <button className="swiper-button-prev">Good!</button>
    </div> */}
        </div>
    );
};

export default ContentSlide;
