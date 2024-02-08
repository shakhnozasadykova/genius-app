import React from "react";
import { MainStyle } from "./MainPage.style";
import { Header } from "../../components/UI/Header/Header";
import { TopChart } from "../../components/Lyrics/TopChart";
import { ChartItem } from "../../components/Lyrics/TopChart";
import { LogoutButton } from "../../components/LogoutButton/LogoutButton";
import { useGetChartSongsQuery } from "../../store/api/getLyricsApi";
import { useNavigate } from "react-router-dom";

export const MainPage = () => {
  const { data, error, isLoading } = useGetChartSongsQuery("day");
  const navigate = useNavigate();

  const chartItem = data?.chart_items;
  console.log("Top Charts Data:", chartItem);

  const onCardClick = (song: ChartItem) => {};

  return (
    <MainStyle>
      <div className="container">
        <Header />
        {chartItem &&
          chartItem.map((elem: any) => (
            <TopChart
              title={elem.item.title}
              imgLink={elem.item.song_art_image_url}
              altText={""}
              artistName={elem.item.artist_names}
              onClick={() => navigate("/song", { state: { id: elem.item.id } })}
            />
          ))}
        <LogoutButton buttonLabel="Log out" />
      </div>
    </MainStyle>
  );
};
