import { FC } from "react";
import { SearchButton } from "../../UI/Button";
import { Input, Select } from "../../UI/Input";
import { region } from "../../variadle/search";

export const Search: FC = () => {
    return (
        <div className="search" >
            <div className="container">
                <div className="search-items">
                    <Input className="main-input"  />
                    <Select option={region} className="select-input"/>
                    <SearchButton name="Search" />
                </div>
            </div>
        </div>
    )
}