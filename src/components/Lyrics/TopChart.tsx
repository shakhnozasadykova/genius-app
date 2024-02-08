// import { useGetChartSongsQuery } from "../../store/api/getLyricsApi";
import { Heading } from "../Typography/Heading/Heading";
import { TopChartStyle } from "./TopChart.style";
// import { useNavigate } from "react-router-dom";

export interface ChartItem {
  id: string;
  item: {
    title: string;
    song_art_image_url: string;
    artist_names: string;
  };
}

export interface ITopChart {
  title: string
  imgLink: string
  altText: string
  artistName: string
  onClick?: () => void
}

export const TopChart = ({ title, imgLink, altText, artistName, onClick}: ITopChart) => {
 

  return (
    <TopChartStyle>
      <Heading headingText="CHARTS" headingType="h2" />
          <div className="Card">
            <h3 onClick={onClick}>{title}</h3>
            <img src={imgLink} alt={altText} />
            <p>Artist: {artistName}</p>
          </div>
    </TopChartStyle>
  );
};
