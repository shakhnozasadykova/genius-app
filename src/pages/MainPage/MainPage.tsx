import React from "react";
import { MainStyle } from "./MainPage.style";
import { Header } from "../../components/UI/Header/Header";
import { TopChart } from "../../components/Lyrics/TopChart";
import { TopChartStyle } from "../../components/Lyrics/TopChart.style";

export const MainPage = () => {
  return (
    <MainStyle>
      <div className="container">
        <Header />
        <TopChartStyle>
          <TopChart />
        </TopChartStyle>
      </div>
    </MainStyle>
  );
};
