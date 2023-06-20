import { rest } from 'msw';
import { BASE_URL } from '../services/api';

export const handlers = [
  rest.get(BASE_URL + '/crawl/123456789', (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: '123456789',
        status: 'done',
        urls: ['http://hiring.axreng.com/index2.html']
      })
    );
  }),
  rest.post(BASE_URL + '/crawl', (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ id: '123456789' }));
  })
];
