import {Link} from "@remix-run/react";

export default function Index() {
  return (
    <div>
      <Link to='about'>About</Link>
      <h1>Welcome to Remix</h1>
    </div>
  );
}
