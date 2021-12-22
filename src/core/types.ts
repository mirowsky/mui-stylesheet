import type { SxProps, Theme } from "@mui/system";

export type StyleSheetHandler<TTheme extends Theme> = (
  ...args: unknown[]
) => SxProps<TTheme>;

export type ThemeCSSProperties<TTheme extends Theme> = {
  [key: string]: SxProps<TTheme> | StyleSheetHandler<TTheme>;
};

export type PartialRecord<K extends keyof never, T> = {
  [P in K]?: T;
};

export type StyleSheetType<
  T extends ThemeCSSProperties<TTheme>,
  TTheme extends Theme
> = PartialRecord<keyof T, SxProps<TTheme>>;
