import PORT from "./PORT";

const getAllHashes = async () => {
  const response = await fetch(PORT);
  const data = await response.json();
  if (response.status !== 200) {
    throw new Error(data.error);
  }
  return data.hashes;
};

export default getAllHashes;
