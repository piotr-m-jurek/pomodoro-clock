export function toTimerString (seconds: number): string {
  let d = new Date(0)
  d.setSeconds(seconds)
  return d.toISOString().substr(14,5)
}


export const pad2 = (num: number): string => `00${num}`.slice(-2)
