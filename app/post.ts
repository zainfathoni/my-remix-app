export type Post = {
  slug: string;
  title: string;
}

export function getPosts() {
  let posts: Post[] = [
    {
      slug: "my-first-post",
      title: "My first post",
    },
    {
      slug: "90s-mixtape",
      title: "A Mixtape I Made Just for You"
    }
  ]
  return posts;
}
