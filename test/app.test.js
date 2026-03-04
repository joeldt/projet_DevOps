const request = require('supertest');
const nodemailer = require('nodemailer');
const app = require('../index');

// Mock de Nodemailer pour ne pas envoyer de vrais emails
jest.mock('nodemailer');
const sendMailMock = jest.fn().mockResolvedValue({ messageId: '12345' });
nodemailer.createTransport.mockReturnValue({ sendMail: sendMailMock });

describe('Test des routes du Portfolio', () => {

    // Test Page d'accueil
    it('GET / doit charger la page HTML', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.type).toBe('text/html');
    });

    // Test Formulaire de Contact (Succès)
    it('POST /send-email doit simuler l\'envoi avec succès', async () => {
        const res = await request(app)
            .post('/send-email')
            .type('form')
            .send({
                name: 'Joël Test',
                email: 'test@example.com',
                message: 'Ceci est un test unitaire'
            });
        
        expect(res.statusCode).toBe(200);
        expect(sendMailMock).toHaveBeenCalled();
    });

    // Test Route inexistante
    it('GET /unknown doit renvoyer une 404', async () => {
        const res = await request(app).get('/unknown');
        expect(res.statusCode).toEqual(404);
    });
});