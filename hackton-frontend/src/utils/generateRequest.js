export const requestGenerator = (text) => {
  console.log(text);
  const requestData = {
    content: text,
    price: 0,
    start: "",
    end: "",
    location: "",
  };

  const indexOfIn = text.indexOf("in");
  const indexOfStart = text.indexOf("starting");
  requestData.location = text.slice(indexOfIn + 2, indexOfStart - 1);

  const indexOfWith = text.indexOf("with");
  const indexOfUntil = text.indexOf("until");
  requestData.start = text.slice(indexOfWith + 5, indexOfUntil - 1);

  const indexOfAnd = text.indexOf("and");
  requestData.end = text.slice(indexOfUntil + 6, indexOfAnd - 1);

  requestData.price = Number(text.slice(text.length - 4, text.length - 1));

  return requestData;
};
