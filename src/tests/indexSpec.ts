import supertest from 'supertest';
import app from '.././index';
import resize from '../routes/api/resize';

const req = supertest(app);

let a: null, b: null;

describe('test the endpoint status', () => {
  it('checks if it didnt take endpoint', async () => {
    await req.get('/');
    expect(200);
  });
  it('check if it took the right parameters', async () => {
    await req.get('/image?width=100&height=700');
    expect(200);
  });
  it('check if it took the wrong parameters', async () => {
    await req.get('/image?width=100&height=b');
    expect(400);
  });
});
describe('test the image', () => {
  it('check if it took null as paramaters', async () => {
    expect(async () => {
      await resize('assetts/test.jpg', a, b, 'resized/test_100_700.jpg');
    }).not.toThrow();
  });
});
