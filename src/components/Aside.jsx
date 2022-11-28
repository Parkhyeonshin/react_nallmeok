import React, { useRef } from "react";
import { AsideMain, AsideGlobal, Loader } from "./";

const Aside = ({ temp, onSearch, pollution }) => {
    const inputRef = useRef();
    const handleSearch = () => {
        const value = inputRef.current.value;
        onSearch(value);
        inputRef.current.value = "";
    };
    const enterKey = (event) => {
        if (event.key === "Enter") {
            console.log(inputRef.current.value);
            handleSearch();
        }
    };
    const onClick = () => {
        handleSearch();
    };
    const faqclick = () => {
        if (document.querySelector(".faq").classList.contains("close")) {
            document.querySelector(".faqDesc").classList.add("close");
            document.querySelector(".faq").classList.remove("close");
        } else {
            document.querySelector(".faqDesc").classList.remove("close");
            document.querySelector(".faq").classList.add("close");
        }
    };

    if (!temp?.main) return <Loader />;
    return (
        <aside id="aside" className="aside__wrap">
            <div className="aside__inner">
                <p>
                    <label htmlFor="search" className="blind">
                        검색
                    </label>
                    <input ref={inputRef} type="text" id="search" title="검색" placeholder="도시 이름을 입력해주세요." onKeyPress={enterKey} />
                    <img src={require("../assets/img/search_ico.svg").default} alt="검색 아이콘" onClick={onClick} />
                </p>
                <div className="faq" onClick={faqclick}></div>
                <div className="faqDesc close">
                    1. 외국사이트 기반이라 한글은 검색이 잘 안될 수 도 있어요!
                    <br />
                    <em>ex_ 안산 : X(검색은되는데 프랑스도시 출력) , ansan-si : O</em>
                    <br /> 2. 검색이 안된다면 새로고침을 눌러서 재접속해주세요.
                    <br /> 3. 기본주소는 안산(ansan-si)입니다.
                </div>
                <AsideMain temp={temp} pollution={pollution} />
                <AsideGlobal pollution={pollution} />
            </div>
        </aside>
    );
};

export default Aside;
