import { useGetChartSongsQuery } from "../../store/api/getLyricsApi";
import { Heading } from "../Typography/Heading/Heading";




export const TopChart = () => {
    

    const [addTopChart] = useGetChartSongsQuery;

    const onAddTopChart = (data: {artistNameText: string, artistImage: string, songName: string}) => {
        addTopChart({
            artist_names: data.artistNameText,
            image_url: data.artistImage,
            title: data.songName
    
        })
    }

    return (
        <Heading headingText="Top Chart" headingType="h2" />
         
    )

}