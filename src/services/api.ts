import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://example.com/api/" }),
  tagTypes: ["Leaderboard"],
  endpoints: (builder) => ({
    getLeaderboard: builder.query<{ name: string; score: number }[], void>({
      query: () => "leaderboard",
      providesTags: ["Leaderboard"],
    }),
    addScore: builder.mutation<
      { name: string; score: number }[],
      { name: string; score: number }
    >({
      query: (body) => ({
        url: "leaderboard",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Leaderboard"],
    }),
  }),
});

export const { useGetLeaderboardQuery, useAddScoreMutation } = api;
