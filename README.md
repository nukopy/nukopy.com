# nukopy.com

This repository is my personal web site made with Svelte / Sapper / microCMS.

- URL: [nukopy.com](https://www.nukopy.com)

## Requirements

To develop with the command `npm run dev`, you can create `.env` in the project root. The sample file of `.env` is [here](https://github.com/nukopy/nukopy.work/blob/master/.env.example) or like below.

- sample of `.env`

```sh
NODE_ENV="development"

# for microCMS
PORT="****"
SERVICE_NAME="****"
API_URL_BLOG="****"
API_KEY="****"
```

## Development

- Run development server

```sh
npm run dev
# access http://localhost:3000
```

- Preview in local
  - Before pushing to the repository, you'd better to execute the command `npm run export`. If this command failed, deploying to Svelte will failed.

```sh
npm run export
npm serve __sapper__/export
```
