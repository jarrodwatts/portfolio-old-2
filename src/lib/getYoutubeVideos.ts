import Video from "../types/Video";

export default async function getYoutubeVideos(): Promise<Video[]> {
  try {
    const apiUrl = "https://www.googleapis.com/youtube/v3/playlistItems";
    const uploadPlaylistId = "UUJae_agpt9S3qwWNED0KHcQ";
    const ytRes = await fetch(
      `${apiUrl}?key=${process.env.YOUTUBE_API_KEY}&part=snippet&playlistId=${uploadPlaylistId}`
    );
    const ytData = await ytRes.json();
    return (ytData?.items as Video[]) || [];
  } catch (error) {
    console.error("Error occurred returning YouTube API data", error);
    return [];
  }
}
