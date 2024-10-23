import { Location } from "../../../core/models/location";

export interface AnalyzeRepository {
  urlExtractor: (url: string) => Promise<UrlExtracted>;
  lookup: (url: string) => Promise<Lookup>;

  // TODO: Perhaps qrBase64 gonna be removed
  registerQRCode: (
    url: string,
    qrBase64: string,
    location: Location
  ) => Promise<undefined>;
}
