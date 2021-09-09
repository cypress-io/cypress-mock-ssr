const connect = require("connect");
const request = require('supertest');
const { cypressMockMiddleware } = require("..");

describe('Cypress Mock SSR Middleware', function () {
  let app;
  beforeEach(function () {
    app = connect();
    app.use(cypressMockMiddleware);
  })
  it('should accept a mock', function (done) {
    request(app)
      .post('/__cypress_server_mock')
      .set('Content-Type', 'application/json')
      .send(JSON.stringify({
        hostname: 'https://icanhazdadjoke.com',
        method: 'GET',
        path: '/',
        statusCode: 200,
        body: {
          id: 'NmbFtH69hFd',
          joke: "The Joke",
          status: 200
        }
      }))
      .expect(200, '', done)
  })

  it('should clear mocks', function (done) {
    request(app)
      .get('/__cypress_clear_mocks')
      .expect(200, '', done)
  })
})