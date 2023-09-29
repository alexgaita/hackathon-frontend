export const requestGenerator = (text) => {
  const requestData = {
    content: text,
    price: 0,
    start: "",
    end: "",
    location: "",
  };

// Define regular expressions to match the desired patterns
const locationRegex = /Give me 3 accommodations in ([^\s]+)/;
const dateRegex = /(\d{1,2}\/\d{1,2}\/\d{4})\s+until\s+(\d{1,2}\/\d{1,2}\/\d{4})/;
const priceRegex = /price\s+up\s+to\s+(\d+)/;

// Extract values using regular expressions
const locationMatch = text.match(locationRegex);
const dateMatch = text.match(dateRegex);
const priceMatch = text.match(priceRegex);

// Check if matches were found and extract the values
const location = locationMatch ? locationMatch[1] : null;
const startDate = dateMatch ? dateMatch[1] : null;
const endDate = dateMatch ? dateMatch[2] : null;
const price = priceMatch ? parseInt(priceMatch[1], 10) : null;

  requestData.price = price
  requestData.start = startDate
  requestData.end = endDate
  requestData.location = location
  
  // Output the extracted values
  console.log("Location:", location);
  console.log("Start Date:", startDate);
  console.log("End Date:", endDate);
  console.log("Price:", price);

  return requestData
};
