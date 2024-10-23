import { Veredict } from "./veredict";

export type AnalyzeResult = {
  url: string;
  veredict: Veredict;
  score: number;
  provider: string;
};
