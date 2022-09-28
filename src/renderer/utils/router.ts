export function isHttpOrHttpsUrl(url: string): boolean {
  const regRule = /(http|https):\/\/([\w.]+\/?)\S*/;
  return regRule.test(url.toLowerCase());
}
