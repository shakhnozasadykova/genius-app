import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface GetLyricsParams {
  q: string; 
  text_only?: boolean; 
  limit?: number; 
}

export const getLyricsApi = createApi({
    reducerPath: "getLyricsApi",
})

export const {} = getLyricsApi;