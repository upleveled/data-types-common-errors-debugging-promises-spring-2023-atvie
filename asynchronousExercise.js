import fakeFetch from './utils/fake-fetch.js';

const youtube = {};
const instagram = {};

function print() {
  console.log(youtube.response.html);
  console.log(instagram.response.html);
  console.log('done');
}

// we want to only one console.log happen
// we don't want the faster fetch to being printed
// the output has to be in both places

fakeFetch('youtube')
  .then((response) => {
    youtube.response = response; // we are sure youtube is here

    // if youtube is here and instagram was faster
    if (youtube.response && instagram.response) {
      print();
    }
  })
  .catch(() => {});

fakeFetch('instagram')
  .then((response) => {
    instagram.response = response;

    // if instagram is here and youtube was faster
    if (youtube.response && instagram.response) {
      print();
    }
  })
  .catch(() => {});
