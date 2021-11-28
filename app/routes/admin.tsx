import { Outlet, Link, useLoaderData } from "remix";
import { getPosts } from "~/post";
import type { Post } from "~/post";
import adminStyles from "~/styles/admin.css";

export let links = () => {
  return [{ rel: "stylesheet", href: adminStyles }];
}

export let loader = () => {
  return getPosts();
}

export default function Admin() {
  let posts = useLoaderData<Post[]>();
  return (
    <div className="admin">
      <nav>
        <Link to="/admin"><h1>Admin</h1></Link>
        <ul>
          {posts.map(post => (
            <li key={post.slug}>
              <Link to={`edit/${post.slug}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
