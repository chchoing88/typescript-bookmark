export function isURL(url: string) {
  console.log('test')
  return /^(http|https):\/\/[^ "]+$/.test(url);
}


