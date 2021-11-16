export const getRecords = (isbnNum = null) => {
  const results =  fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbnNum}`)
  .then(response => response.json());
  return results;
}