import React from "react";
import { useGetSongLyricsQuery } from "../../store/api/getLyricsApi"; 
import { useParams } from "react-router-dom";
import { TopChart } from "../../components/Lyrics/TopChart";

export const SongDetails = () => {
    const { SongId } = useParams()
    const { data: songItem, isError, isSuccess, isLoading } = useGetSongLyricsQuery(SongId as string)
    
    
    const handleClick = () => {

    }
    

    

    return (
        <div className="Card">
            {isLoading && <h1>Loading...</h1>}
            {isError && <h1>Error</h1>}
            {isSuccess && <TopChart elem={songItem} handleClick={handleClick} />}
        </div>
    )
}



