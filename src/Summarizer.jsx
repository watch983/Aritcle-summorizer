const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
  params: {
    url: 'https://redux-toolkit.js.org/rtk-query/overview',
    length: '3',
  },
  headers: {
    'X-RapidAPI-Key': 'd99907482cmsh9ab0fc66bc0daf3p153337jsn95f51e31894e',
    'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com',
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}

const Summarizer = () => {
  return <div>hello</div>;
};

export default Summarizer;
