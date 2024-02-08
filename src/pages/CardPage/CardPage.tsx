import React from "react";
import { useGetSongLyricsQuery } from "../../store/api/getLyricsApi";
import { useLocation } from "react-router-dom";
import { TopChart } from "../../components/Lyrics/TopChart";
import { title } from "process";

export const SongDetails = () => {
  const location = useLocation();
  const { data, error, isLoading } = useGetSongLyricsQuery(location.state.id);
  console.log(data);

//   const item = data.lyrics.tracking_data
//   const handleClick = () => {};

  return (
    <div className="Card">
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>Error</h1>}
      {/* {isSuccess && <TopChart elem={songItem} handleClick={handleClick} />}    */}
      {/* {data && (
        <div>
            {data.lyrics.tracking_data.title}
            {data.lyrics.tracking_data.release_date}
        </div>
      )} */}
      
    </div>
  );
};
