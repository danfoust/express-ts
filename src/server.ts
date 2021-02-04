import express from 'express';

export const server = express();

server.get('/', (req, resp) => {
  console.log('/ hit');

  resp.contentType('.html').send('<h1>Hello, World</h1>');
});
