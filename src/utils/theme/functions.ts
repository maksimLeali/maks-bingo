
type Theme = { [key: string]: any }

const uw = (val: number)=> `calc(1vw * 100 / 48 * ${val})`

export const $uw = (val: number) => ({}) => uw(val);
export const $color = (color: string) => ({ theme }: { theme: Theme }) => theme.colors[color]
export const $padding = (top: number, right: number = top, bottom: number = top, left: number = right) => ({})=> `${uw(top)} ${uw(right)} ${uw(bottom)} ${uw(left)}`
export const $break_point = (val: number) => ({})=>`@media only screen and (max-width: ${val}px)`;