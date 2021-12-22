import { Theme } from "@mui/system";
import { StyleSheet } from "./stylesheet";

const createStyleSheet = <TTheme extends Theme>(theme: TTheme) => {
  return new StyleSheet<typeof theme>();
};

export default createStyleSheet;
