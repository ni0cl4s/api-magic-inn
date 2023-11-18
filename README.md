
# Auberge Magique - API

Bienvenue dans le référentiel de l'API de l'Auberge Magique, une solution de gestion pour une auberge située dans un monde médiéval-fantastique.

## Objectif

L'objectif de cette API est de permettre la gestion d'une auberge magique située dans un monde médiéval-fantastique. Les utilisateurs peuvent réserver des chambres, commander de la nourriture et profiter d'une expérience immersive dans cet univers fantastique.

## Technologies Utilisées

Ce projet utilise les technologies suivantes :

### [NestJS](https://nestjs.com/)

[NestJS](https://nestjs.com/) est un framework de développement d'applications serveur pour Node.js. Il utilise TypeScript et suit l'architecture modulaire.

<img src="https://nestjs.com/img/logo_text.svg" alt="NestJS Logo" width="200"/>

### [Prisma](https://www.prisma.io/)

[Prisma](https://www.prisma.io/) est un ORM (Object-Relational Mapping) moderne pour Node.js et TypeScript. Il permet de communiquer avec la base de données de manière sécurisée et efficace.

<img src="https://prismalens.vercel.app/header/logo-dark.svg" alt="Prisma Logo" width="200"/>

### [Supabase](https://supabase.io/)

[Supabase](https://supabase.io/) est une plateforme open-source qui fournit une base de données PostgreSQL en temps réel et des services backend. Elle facilite le développement d'applications modernes.

<img src="https://supabase.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsupabase-logo-wordmark--dark.b36ebb5f.png&w=256&q=75" alt="Supabase Logo" width="200"/>

## Fonctionnalités Principales

### 1. Gestion des Utilisateurs

- **Inscription :** Les utilisateurs peuvent s'inscrire en fournissant un nom d'utilisateur, un mot de passe et une adresse e-mail.
- **Authentification :** Les utilisateurs peuvent se connecter avec leurs identifiants.
- **Profils Utilisateur :** Chaque utilisateur a un profil avec des informations telles que le nom, la race, la classe (guerrier, mage, voleur, etc.).

### 2. Réservation de Chambres

- **Liste de Chambres :** Afficher une liste de chambres disponibles avec des détails tels que le type de chambre (standard, deluxe, magique), la capacité, le prix, etc.
- **Réservation :** Les utilisateurs peuvent réserver des chambres pour une ou plusieurs nuits.
- **Gestion des Réservations :** Les utilisateurs peuvent consulter et annuler leurs réservations.

### 3. Nourriture et Boissons

- **Menu :** Afficher un menu de plats et de boissons magiques disponibles à la commande.
- **Commande :** Les utilisateurs peuvent passer des commandes de nourriture et de boissons pour leur séjour.
- **Facturation :** Calculer le coût total de la commande et facturer les utilisateurs.

### 4. Administration

- **Gestion des Chambres :** Les administrateurs peuvent ajouter, mettre à jour ou supprimer des chambres, en spécifiant leurs caractéristiques et leur disponibilité.
- **Gestion du Menu :** Les administrateurs peuvent ajouter, mettre à jour ou supprimer des éléments du menu, en spécifiant leurs prix et leurs propriétés.

## Exigences Techniques

### 1. Sécurité

- **Authentification et Autorisation :** Assurer que seuls les utilisateurs authentifiés ont accès à la réservation de chambres et à la commande de nourriture.
- **Sécurité des Données :** Protéger les données utilisateur et les transactions contre les menaces potentielles.

### 2. Performances

- **Temps de Réponse Rapide :** Assurer des temps de réponse rapides pour les requêtes de réservation et de commande.

### 3. Base de Données

- **Stockage des Données :** Stocker les informations sur les chambres, les utilisateurs, les réservations, le menu de manière sécurisée et évolutive.

## Livrables

- API REST fonctionnelle avec des points d'extrémité bien documentés.
- Documentation complète de l'API pour les développeurs.

## Installation

Pour installer et exécuter cette API, suivez ces étapes :

1. **Clônez ce référentiel :**

    ```bash
    git clone https://github.com/ni0cl4s/api-magic-inn.git
    ```

2. **Accédez au répertoire du projet :**

    ```bash
    cd api-magic-inn
    ```

3. **Installez les dépendances nécessaires :**

    ```bash
    npm install
    ```

4. **Configurez les variables d'environnement requises, telles que les informations de connexion Supabase, les clés secrètes, etc.**

5. **Exécutez l'API :**

    ```bash
    npm start
    ```

L'API sera désormais accessible à l'adresse : [http://localhost:3333/api](http://localhost:3333/api).

## Documentation de l'API

La documentation de l'API est disponible à [http://localhost:3333/swagger](http://localhost:3333/swagger) et fournit des informations détaillées sur les points d'extrémité, les requêtes, les réponses et les exemples d'utilisation.

## Construction en Production et Lancement

Pour déployer l'API en production, suivez ces étapes :

1. **Construisez l'API :**

    ```bash
    npm run build
    ```

2. **Lancez l'API en mode production :**

    ```bash
    npm start:prod
    ```

L'API sera désormais accessible en production à l'adresse spécifiée.


