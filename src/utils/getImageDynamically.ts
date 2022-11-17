export function getImageDynamically(path: string) {
  return new URL(`../assets/images/${path}`, import.meta.url).href
}
