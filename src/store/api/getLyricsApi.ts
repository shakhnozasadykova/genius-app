import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { lyricsUrl, xHost, xKey } from '../../utils/lyricsUrl'
import { LyricsItem } from "../../types/lyrics";

export const LyricsApi = createApi({
  reducerPath: 'LyricsApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: lyricsUrl,
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", xKey)
      headers.set("X-RapidAPI-Host", xHost)
      return headers 
    } 
  }),
  endpoints: (builder) => ({
    getChartSongs: builder.query<LyricsItem, string>({
      query: (time_period) => ({
        url: "/chart/songs",
        params: {
          time_period
        }
      }),
    }),
  }),
})


export const { useGetChartSongsQuery } = LyricsApi