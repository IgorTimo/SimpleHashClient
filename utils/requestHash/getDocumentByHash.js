import PORT from "./PORT";

const getDocumentByHash = async (hash) => {
  const response = await fetch(`${PORT}hashs/${hash}`);
  const data = await response.json();
  if (response.status !== 200) {
    throw new Error(data.error);
  }
  return data.document;
};

export default getDocumentByHash;
