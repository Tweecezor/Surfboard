const path = "/users/download/index.html";

const isHtml = (path) => {
  const extensionPos = path.lastIndexOf(".");
  if (!extensionPos) return;

  const extension = path.slice(extensionPos + 1);

  return extension === "html";
};

console.log(isHtml(path));
