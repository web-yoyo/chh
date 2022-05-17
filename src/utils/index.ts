export const getImagUrl = (name: string) => {
  return new URL(`../assets/img/${name}`, import.meta.url).href
}
