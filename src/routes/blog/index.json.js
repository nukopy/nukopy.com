import fetch from 'isomorphic-unfetch';

const serviceName = process.env.SERVICE_NAME;
const API_URL = `https://${serviceName}.microcms.io/api/v1/blog/`;
const apiKey = process.env.API_KEY;

export async function get(req, res) {
  fetch(API_URL, {
    headers: { 'X-API-KEY': apiKey },
  })
    .then((res) => res.json())
    .then((json) => {
      res.writeHead(200, {
        'Content-Type': 'application/json',
      });
      res.end(JSON.stringify(json));
    });
}
