import { DefaultTheme } from "styled-components";

export const $uw = (uw: number) => ({ theme }: { theme: DefaultTheme }) => theme.uw(uw);
export const $color = (color: string) => ({ theme }: { theme: DefaultTheme }) => theme.colors[color]

export const $padding = (top: number, right: number = top, bottom: number = top, left: number = right) => {
    return ({ theme }: { theme: DefaultTheme }) => `${theme.uw(top)} ${theme.uw(right)} ${theme.uw(bottom)} ${theme.uw(left)}`
}
