const endpoint = 'https://raw.githubusercontent.com/umdio/umdio-data/master/courses/data/202008.json';

const gened = [];
fetch(endpoint)
  .then((blob) => blob.json())
  .then((data) => gened.push(...data));

function findMatches(wordToMatch, gened) {
  return gened.filter((course) => {
    const regex = new RegExp(wordToMatch, 'gi');
    return course.gened.match(regex);
  });
}