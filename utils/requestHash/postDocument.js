import PORT from "./PORT";

const postDocument = async (title, text) => {
  const requestOptions = {
    method: "POST",
    body: JSON.stringify({ title, text }),
    headers: { "Content-Type": "application/json" },
  };

  const response = await fetch(PORT, requestOptions);
  const data = await response.json();
  if(response.status !== 200){
      throw new Error(data.error);
  }
  return data.hash;
};

export default postDocument;
