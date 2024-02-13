import { DefaultTheme } from "styled-components";

export const uw = (uw: number) => ({ theme }: { theme: DefaultTheme }) => theme.uw(uw);
export const themeColor = (color: string) => ({theme}: {theme: DefaultTheme})=> theme.colors[color]