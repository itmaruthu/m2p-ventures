export const BASE_PATH = "/m2p-ventures";

export function prefixPath(path: string): string {
  if (!path.startsWith("/")) {
    path = "/" + path;
  }
  return `${BASE_PATH}${path}`;
}
