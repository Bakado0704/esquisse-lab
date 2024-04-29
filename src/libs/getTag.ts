export const getTag = (pathname: string) => {
  const segments = pathname.split("/").filter(Boolean);
  const lastSegment = segments[segments.length - 1];
  const categoryId = decodeURIComponent(lastSegment);
  return categoryId;
};
