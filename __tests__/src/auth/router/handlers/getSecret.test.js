'use strict';

process.env.SECRET = "TEST_SECRET";

const { handleSecret } = require('../../../../../src/auth/router/handlers.js');

describe.skip('testing the users route handler', () => {

  const res = {
    send: jest.fn(() => res),
    status: jest.fn(() => res),
    json: jest.fn(() => res),
  }
  const next = jest.fn();

  test.skip('Should respond with a secret response', () => {
    let req = {};

    handleSecret(req, res, next);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith(expect.anything());
  });
});
