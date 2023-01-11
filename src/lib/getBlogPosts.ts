import Blog from "../types/Blog";

export default async function getBlogPosts(): Promise<Blog[]> {
  try {
    const gqlQuery = `
    {
        user(username:"jarrodwatts") {
            publication {
                posts {
                    _id
                    title
                    dateFeatured
                    popularity
                    coverImage
                    brief
                    slug
                    cuid
                }
            }
        }
    }`;

    const response = await fetch("https://api.hashnode.com", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: gqlQuery }),
    });
    const body = (await response.json()).data?.user?.publication
      ?.posts as Blog[];

    return body || [];
  } catch (error) {
    console.error("Error occurred returning Hashnode API data", error);
    return [];
  }
}
