export const getRandom = (array: Array<string>) => {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}
