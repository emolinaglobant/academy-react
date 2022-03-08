
export function getRandom  (max=0, min=6) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}