import { rest } from 'msw';

export const handlers = [
  rest.get(
    'http://testapp.axreng.com:3000/crawl/123456789',
    (_req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          id: '123456789',
          status: 'done',
          urls: ['http://hiring.axreng.com/index2.html']
        })
      );
    }
  ),
  rest.post('http://testapp.axreng.com:3000/crawl', (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ id: '123456789' }));
  })
];
