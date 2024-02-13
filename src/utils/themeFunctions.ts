
type Theme =  {[key: string]: any} 

export const $uw = (uw: number) => ({ theme }: { theme: Theme }) => theme.uw(uw);
export const $color = (color: string) => ({ theme }: { theme: Theme }) => theme.colors[color]

export const $padding = (top: number, right: number = top, bottom: number = top, left: number = right) => {
    return ({ theme }: { theme: Theme }) => `${theme.uw(top)} ${theme.uw(right)} ${theme.uw(bottom)} ${theme.uw(left)}`
}
