#  Utiliser une image de base Node.js légère
FROM node:18-slim

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

#Copier les fichiers de dépendances (package.json et package-lock.json)
COPY package*.json ./

#Installer les dépendances
RUN npm install

#Copier tout le reste du code du projet
COPY . .

#Exposer le port sur lequel ton serveur Node tourne
EXPOSE 3000

#Commande pour démarrer l'application
CMD ["node", "index.js"]