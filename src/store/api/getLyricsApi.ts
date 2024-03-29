import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { lyricsUrl, xHost, xKey } from '../../utils/lyricsUrl'

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
    getChartSongs: builder.query<any, string>({
      query: (time_period) => ({
        url: "/chart/songs",
        params: {
          time_period
        }
      }),
    }),
    getSongLyrics: builder.query<any, any>({
      query: (id) => ({
        url: "/song/lyrics",
        params: {
          id
        }
      }),
    }),
  }),
})


export const { useGetChartSongsQuery, useGetSongLyricsQuery } = LyricsApi
