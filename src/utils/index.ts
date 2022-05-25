export const getImagUrl = (name: string) => {
  return new URL(`../assets/img/${name}`, import.meta.url).href
}

// 函数返回 min（包含）～ max（包含）之间的数字：
export const getRndInteger = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
