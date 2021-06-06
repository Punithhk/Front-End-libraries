import "./App.css";
import SiteLayout from "./component/SiteLayout.js";
import Callout from "react-callout-component";

function App() {
  return (
    <SiteLayout menu={<p>Menu</p>}>
      <>
        <Callout>Callout</Callout>
        <h1>Contents</h1>
        <p> This is the main part of example layout </p>
      </>
    </SiteLayout>
  );
}

export default App;
