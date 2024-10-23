import { Location } from "../../../core/models/location";
import { AnalyzeRepository } from "./analyze-repository";

export class AnalyzeRepositoryMock implements AnalyzeRepository {
  async urlExtractor(url: string): Promise<UrlExtracted> {
    return {};
  }

  async lookup(url: string): Promise<Lookup> {
    return {};
  }

  async registerQRCode(
    url: string,
    qrBase64: string,
    location: Location
  ): Promise<undefined> {
    return undefined;
  }
}
