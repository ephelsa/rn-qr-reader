import React, { useEffect } from "react";
import { AnalyzeRepository } from "../repositories/analyze-repository";
import { AnalyzeResult } from "../models/analyze-result";

// This is just to give an idea once I start to consume services.
//
// Ideally, this looks more like an use case than call the repository perse,
// becase here all the logic to call the different services will be done.
// Even extract the longitude and latitude for localization.
export const useAnalyze = (
  analyzeRepository: AnalyzeRepository, // This might be inyected. Here just for the idea.
  url: string
): AnalyzeResult => {
  return {
    url: url,
    veredict: "Malicious",
    score: -0.2,
    provider: "Who knows??",
  };
};
