import React from "react";
import { MainStyle } from "./MainPage.style";
import { RootState } from "../../store/store"; 
import { useSelector } from "react-redux";

export const MainPage = () => {
    const user = useSelector((state: RootState) => state.userSlice.user)

    return(
        <MainStyle>
            <div>
                <h1>{user?.name}</h1>
            </div>
        </MainStyle>
    )
}