import { useGetChartSongsQuery } from "../../store/api/getLyricsApi";
import { Heading } from "../Typography/Heading/Heading";

export const TopChart = () => {
    
    const { data: topCharts, error, isLoading } = useGetChartSongsQuery("day");

    console.log("Top Charts Data:", topCharts);
    
    
    return (
        <>
        <div>
            <Heading headingText="Top Chart" headingType="h2" />
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>Error</h1>}
            {topCharts && topCharts.result && topCharts.result.map((song, index) => (
                <div key={index}>
                    <h3>{song.title}</h3>
                    <img src={song.song_art_image_url} alt={song.title} />
                    <p>Artist: {song.artist_names}</p>
                </div>
            ))}
        </div>
    </>   
    )
}
