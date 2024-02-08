import { useGetChartSongsQuery } from "../../store/api/getLyricsApi";
import { Heading } from "../Typography/Heading/Heading";
import { TopChartStyle } from "./TopChart.style";
import { useNavigate } from "react-router-dom";

export interface ChartItem {
  id: number;
  item: {
    title: string;
    song_art_image_url: string;
    artist_names: string;
  };
}



export const TopChart = () => {
  const { data, error, isLoading } = useGetChartSongsQuery("day");
  const navigate = useNavigate()
  
  const chartItem = data?.chart_items;
  console.log("Top Charts Data:", chartItem);

  const onCardClick = (song: ChartItem) =>{
    navigate(`/song/${song.id}`)

  }

  return (
    <TopChartStyle>
      <Heading headingText="CHARTS" headingType="h2" />
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>Error</h1>}
      {chartItem &&
        chartItem.map((elem: ChartItem) => (
          <div className="Card">
            <h3 onClick = {() => onCardClick(elem)}>{elem.item.title}</h3>
            <img src={elem.item.song_art_image_url} alt={elem.item.title} />
            <p>Artist: {elem.item.artist_names}</p>
          </div>
        ))}
    </TopChartStyle>
  );
};
