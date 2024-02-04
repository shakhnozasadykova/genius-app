import React from "react";
import { MainStyle } from "./MainPage.style";
// import { RootState } from "../../store/store"; 
// import { useSelector } from "react-redux";
import { Header } from "../../components/UI/Header/Header";
import { useGetChartSongsQuery } from "../../store/api/getLyricsApi";

export const MainPage = () => {
    // const user = useSelector((state: RootState) => state.userSlice.user)
    const {data, isLoading, error} = useGetChartSongsQuery("day");

    if (data) {
        console.log(data)
    }

    if (error) {
        console.log(error)
    }
    return(
        <MainStyle>
            <div>
                <Header />
                {isLoading && <h1>Loading...</h1>}

                {/* <h1>{user?.name}</h1> */}
            </div>
        </MainStyle>
    )
}