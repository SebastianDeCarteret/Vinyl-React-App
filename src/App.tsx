import { useEffect, useState } from "react";
import "./App.css";
import { Vinyl } from "./models/vinyl.model";
import Card from "./components/Card";

function App() {
  const [vinyls = [], setVinyls] = useState<Vinyl[]>();

  useEffect(() => {
    fetchVinyls();
  }, []);

  async function fetchVinyls() {
    const response = await fetch("https://localhost:7197/api/Vinyls");
    // const response = await fetch("https://api.publicapis.org/entries");
    const data = (await response.json()) as Vinyl[];
    setVinyls(data);
    console.log(vinyls);
  }

  function loaded() {
    return (
      <table>
        <td>
          <tr>Album</tr>
          {vinyls!.map((vinyl) => (
            <tr>{vinyl.title}</tr>
          ))}
        </td>
        <td>
          <tr>Number Of Tracks</tr>
          {vinyls!.map((vinyl) => (
            <tr>{vinyl.numberOfTracks}</tr>
          ))}
        </td>
        <td>
          <tr>Number Of LPs</tr>
          {vinyls!.map((vinyl) => (
            <tr>{vinyl.numberOfLps}</tr>
          ))}
        </td>
        <td>
          <tr>Price</tr>
          {vinyls!.map((vinyl) => (
            <tr>£{vinyl.price}</tr>
          ))}
        </td>
        <td>
          <tr>Release Date</tr>
          {vinyls!.map((vinyl) => (
            <tr>{vinyl.releaseDate}</tr>
          ))}
        </td>
        <td>
          <tr>Tracks</tr>
          {vinyls!.map((vinyl) => (
            <tr>
              {vinyl.tracks.map((track) => (
                <>{track.title} </>
              ))}
            </tr>
          ))}
        </td>
      </table>
    );
  }

  function vinylsGrid() {
    return (
      <div className="grid-view">
        <Card vinyls={vinyls} />
      </div>
    );
  }

  return <>{vinyls ? loaded() : "loading..."}</>;
}

export default App;
