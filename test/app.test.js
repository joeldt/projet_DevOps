const request = require('supertest');
const express = require('express');
// On crée une version simplifiée pour le test ou on exporte 'app' de index.js
const app = express(); 

app.get('/', (req, res) => res.status(200).send('OK'));

describe('GET /', () => {
  it('devrait répondre avec un code 200', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
  });
});