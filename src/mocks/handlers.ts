import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("https://example.com/api/leaderboard", () => {
    const data = localStorage.getItem("leaderboard");
    const leaderboard = data ? JSON.parse(data) : [];
    return HttpResponse.json(leaderboard);
  }),

  http.post("https://example.com/api/leaderboard", async ({ request }) => {
    const newEntry = await request.json();
    const data = localStorage.getItem("leaderboard");
    const leaderboard = data ? JSON.parse(data) : [];

    const updated = [...leaderboard, newEntry]
      .sort((a, b) => b.score - a.score)
      .slice(0, 5);

    localStorage.setItem("leaderboard", JSON.stringify(updated));

    return HttpResponse.json(updated);
  }),
];
