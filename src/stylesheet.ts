import type { Theme } from "@mui/system";
import type { ThemeCSSProperties } from "./types";

export class StyleSheet<TTheme extends Theme> {
  public create<Styles extends ThemeCSSProperties<TTheme>>(
    styles: Styles
  ): Styles {
    return styles;
  }
}
