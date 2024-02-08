import React from "react";
import { MainStyle } from "./MainPage.style";
import { Header } from "../../components/UI/Header/Header";
import { TopChart } from "../../components/Lyrics/TopChart";
// import { ChartItem } from "../../components/Lyrics/TopChart";
import { LogoutButton } from "../../components/LogoutButton/LogoutButton";



export const MainPage = () => {
  
  return (
    <MainStyle>
      <div className="container">
        <Header />
        {/* <TopChart  /> */}
        <LogoutButton buttonLabel="Log out" /> 
      </div>
    </MainStyle>
  );
};
