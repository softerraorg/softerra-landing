import SofterraLanding from "../src/Softerra-landing";

// Server component: Next pre-renders the client landing tree to HTML at build/
// request time (so there's no blank flash), then hydrates it in the browser.
export default function Page() {
  return <SofterraLanding />;
}
