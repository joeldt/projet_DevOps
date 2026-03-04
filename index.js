require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 3000;

//configurations

// Sert les fichiers statiques (HTML, CSS, JS, Images) depuis le dossier 'public'
app.use(express.static('public'));

// Permet de lire les données envoyées par le formulaire de contact
app.use(bodyParser.urlencoded({ extended: true }));



// Route principale : affiche ton portfolio
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route POST : gère l'envoi du formulaire de contact
app.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body;

    // Configuration du transporteur (Gmail)
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER, //mon adresse email
            pass: process.env.EMAIL_PASS, 
        }
    });

    let mailOptions = {
        from: email,
        to: 'tapajoel16@gmail.com', // mon adresse de réception
        subject: `Nouveau message Portfolio de ${name}`,
        text: `Message de : ${name} (${email})\n\n${message}`
    };

    try {
        await transporter.sendMail(mailOptions);
        // Affiche une alerte de succès et redirige vers l'accueil
        res.send("<script>alert('Message envoyé avec succès !'); window.location.href='/';</script>");
    } catch (error) {
        console.error("Erreur Nodemailer :", error);
        res.status(500).send("Erreur lors de l'envoi du message.");
    }
});

// demarage du serveur

app.listen(PORT, () => {
    console.log(` Serveur lancé sur http://localhost:${PORT}`);
});

if (process.env.NODE_ENV !== 'test') {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Serveur lancé sur http://localhost:${PORT}`);
    });
}

module.exports = app;