import { Vinyl } from "./vinyl.model";

export interface Track {
  id: number;
  title: string;
  length: number;
  vinylId: number;
  vinyl: Vinyl;
}
