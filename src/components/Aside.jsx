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
                <AsideMain temp={temp} pollution={pollution} />
                <AsideGlobal pollution={pollution} />
            </div>
        </aside>
    );
};

export default Aside;
