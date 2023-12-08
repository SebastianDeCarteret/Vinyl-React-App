import { Artist } from "./artist.model";
import { Band } from "./band.model";
import { Track } from "./track.model";

export interface Vinyl {
  id: number;
  title: string;
  artist: Artist;
  band: Band;
  numberOfLps: number;
  numberOfTracks: number;
  price: number;
  releaseDate: string;
  imageLink: string;
  tracks: Track[];
}
