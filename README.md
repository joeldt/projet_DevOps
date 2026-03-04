# 🚀 Projet Portfolio - Architecture DevOps

Ce projet consiste en la conception d'un **Portfolio personnel dynamique** couplé à une chaîne **CI/CD** (Intégration et Déploiement Continus). L'objectif est de démontrer la capacité à développer une application fonctionnelle et à automatiser sa validation technique (tests, build, conteneurisation).

---

## 🎯 Objectifs du Projet

* **Développement Applicatif** : Création d'un portfolio simple et élégant présentant mes compétences et mon parcours.
* **Formulaire de Contact** : Mise en place d'une interface de contact fonctionnelle utilisant **Nodemailer** pour l'envoi automatisé d'emails via un serveur Node.js.
* **Automatisation DevOps** : Garantir que chaque modification du code est testée et prête pour la production via **GitHub Actions**.

---

## 🛠️ Technologies Utilisées

| Secteur | Technologies |
| :--- | :--- |
| **Backend** | Node.js, Express.js |
| **Formulaire** | Body-parser, Nodemailer |
| **Tests** | Jest, Supertest |
| **DevOps** | GitHub Actions |
| **Conteneurisation** | Docker, Docker-Compose |

---

## 🏗️ Architecture et Fonctionnement

### 1. Le Portfolio & Formulaire
L'application sert une interface web (HTML/CSS) située dans le dossier `/public`. Le formulaire de contact permet aux visiteurs d'envoyer un message qui est traité par une route `POST` sécurisée, simulant ou exécutant l'envoi d'un email de notification.

### 2. Pipeline CI/CD (GitHub Actions)


À chaque `git push` sur la branche `main`, le pipeline exécute automatiquement :
1.  **Installation** : `npm install` pour récupérer les dépendances.
2.  **Tests Unitaires** : Vérification des routes (Accueil, Formulaire, Erreur 404).
3.  **Docker Build** : Création d'une image Docker pour isoler l'application.
4.  **Tagging** : Création automatique d'une version (ex: v1.0.12) en cas de succès.

---

## 🧪 Validation des Tests
Nous utilisons **Jest** pour valider le bon fonctionnement du serveur. Les tests vérifient :
* Que la page d'accueil renvoie un code `200 OK`.
* Que le formulaire de contact traite les données sans erreur.
* Que les pages inexistantes sont correctement redirigées (`Erreur 404`).

**Commande pour tester localement :**
```bash
npm test

##🐳 🧪 Validation des Tests

Pour garantir que l'application fonctionne sur n'importe quel serveur, nous utilisons Docker :



Construction de l'image :



Bash

docker build -t portfolio-joel .

Lancement de l'application :



Bash

docker run -p 3000:3000 portfolio-joel



## 🐳 Lancement avec Docker

1. Clonez le dépôt.

2. Créez un fichier `.env` avec vos identifiants Gmail (voir section Sécurité).

3. Lancez la commande :

   ```bash

   docker-compose up -d

📈 Conclusion du Projet

Ce projet m'a permis de maîtriser le cycle de vie complet d'un logiciel : du développement des fonctionnalités (Portfolio/Email) à la mise en place d'une infrastructure robuste et automatisée. Le dépôt GitHub affiche actuellement une pastille verte ✅, confirmant la réussite du pipeline.



Développé par Joël - Projet DevOps 2026 fait pareil pour le reste ci(presentation )
