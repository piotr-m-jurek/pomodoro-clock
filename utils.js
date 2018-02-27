export const toMinuteFormat = (seconds) => {
  return `${Math.floor(seconds / 60)}:${pad2(seconds % 60)}`
}

export const pad2 = (num) => {
  return `00${num}`.slice(-2)
}
