import React, { useEffect, useState } from "react";
import { Box } from "../../../core/components/Box";
import { AnalyzeRepositoryMock } from "../repositories/analyze-repository-mock";
import { useAnalyze } from "../hooks/useAnalyze";
import { Text } from "../../../core/components/Text";

const AnalyzingScreen = (): React.JSX.Element => {
  const [canContinue, setCanContinue] = useState(false);

  const analyzeRepository = new AnalyzeRepositoryMock();
  const analyze = useAnalyze(analyzeRepository, "http://fortra.com");

  useEffect(() => {
    setTimeout(() => {
      setCanContinue(true);
    }, 7_000);
  }, []);

  return (
    <Box width="100%" height="100%" alignItems="center" justifyContent="center">
      <Text variant="header">
        {canContinue ? "Navigating to results :)" : "Analyzing..."}
      </Text>
    </Box>
  );
};

export default AnalyzingScreen;
