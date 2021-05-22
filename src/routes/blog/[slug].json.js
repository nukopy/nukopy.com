const serviceName = process.env.SERVICE_NAME;
const apiKey = process.env.API_KEY;

export async function get(req, res) {
  const { slug } = req.params;
  const API_URL = `https://${serviceName}.microcms.io/api/v1/blog/${slug}`;

  fetch(API_URL, {
    headers: { "X-API-KEY": apiKey },
  })
    .then((res) => res.json())
    .then((json) => {
      res.writeHead(200, {
        "Content-Type": "application/json",
      });
      res.end(JSON.stringify(json));
    });
}
