npm install express pg bcryptjs jsonwebtoken dotenv cors body-parser nodemailer uuid
npm install --save-dev nodemon eslint prettier jest supertest




-- Table des utilisateurs
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  phone VARCHAR(20),
  address TEXT,
  role INTEGER NOT NULL DEFAULT 0, -- 0 = client, 1 = admin
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

-- Table des tokens de réinitialisation
CREATE TABLE reset_tokens (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  token VARCHAR(255) NOT NULL,
  expires_at TIMESTAMP NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);






















Voici les requêtes Postman clés à tester pour votre API, avec les paramètres nécessaires pour chaque endpoint :

### 1. **AUTHENTIFICATION**

#### Register (Création compte client)
```
POST {{base_url}}/api/auth/register
Content-Type: application/json

{
    "email": "client@test.com",
    "password": "Test1234",
    "first_name": "Jean",
    "last_name": "Dupont",
    "phone": "+1234567890",
    "address": "123 Rue Test"
}
```

#### Login Client
```
POST {{base_url}}/api/auth/login
Content-Type: application/json

{
    "email": "client@test.com",
    "password": "Test1234"
}
```

#### Login Admin
```
POST {{base_url}}/api/auth/login
Content-Type: application/json

{
    "email": "admin@test.com",
    "password": "Admin1234"
}
```

#### Mot de passe oublié
```
POST {{base_url}}/api/auth/forgot-password
Content-Type: application/json

{
    "email": "client@test.com"
}
```

### 2. **GESTION UTILISATEURS** (Admin)

#### Liste des clients
```
GET {{base_url}}/api/users/clients
Authorization: Bearer {{admin_token}}
```

#### Bloquer/Débloquer client
```
PUT {{base_url}}/api/users/clients/:id/status
Authorization: Bearer {{admin_token}}
Content-Type: application/json

{
    "is_active": false
}
```

### 3. **CONTENU** (Exemples)

#### Balance
```
GET {{base_url}}/api/balance
Authorization: Bearer {{client_token}}
```

#### Crucifixion
```
POST {{base_url}}/api/crucifixion
Authorization: Bearer {{client_token}}
Content-Type: application/json

{
    "title": "Nouveau contenu",
    "content": "Lorem ipsum..."
}
```

### Configuration Postman :
1. Créez un nouvel environnement dans Postman avec ces variables :
   - `base_url`: `http://localhost:5000`
   - `admin_token`: (à remplir après login admin)
   - `client_token`: (à remplir après login client)

2. Séquence recommandée :
   - D'abord `Register` puis `Login` pour obtenir les tokens
   - Utilisez les tokens dans les headers des requêtes protégées

### Données de test recommandées :
- Compte admin existant (à créer manuellement en DB) :
  ```sql
  INSERT INTO users (id, email, password, role) 
  VALUES ('admin-123', 'admin@test.com', '$2a$10$hashedPassword', 1);
  ```

- Mot de passe : Utilisez toujours des mots de passe complexes (min. 8 caractères, majuscules/chiffres)

Pour les tests réels, vous pouvez utiliser ces valeurs ou les adapter selon vos besoins. Chaque requête devrait retourner :
- 200/201 pour les succès
- 401 pour les accès non autorisés
- 404 pour les ressources introuvables


















Non, vous ne devriez **jamais** insérer un mot de passe en clair comme ça dans la base de données ! Voici comment faire proprement :

### Solution sécurisée pour créer un admin

1. **D'abord, hashez le mot de passe** en Node.js :
```javascript
const bcrypt = require('bcryptjs');
const hashedPassword = await bcrypt.hash('votre_mot_de_passe_admin', 10);
console.log(hashedPassword);
// Copiez cette valeur hachée pour l'insertion SQL
```

2. **Requête SQL corrigée** (avec mot de passe hashé) :
```sql
INSERT INTO users (id, email, password, role, is_active) 
VALUES (
  'admin-123',
  'admin@gmail.com',
  '$2a$10$N9qo8uLOickgx2ZMRZoMy.MrYr9Z0w1Uq6XrYkZi.FGGJEh7nBV8O',  -- Exemple de hash bcrypt pour "admin"
  1,
  true
);
```

### Pourquoi c'est important ?

1. **Sécurité** :  
   - Le hash `$2a$10$...` est généré par bcrypt
   - Même si la DB est compromise, les mots de passe sont illisibles

2. **Fonctionnement de l'authentification** :  
   Votre système de login utilise `bcrypt.compare()` qui a besoin du hash original pour fonctionner.

### Alternative pratique : Utilisez un script d'initialisation

Créez un fichier `createAdmin.js` :
```javascript
require('dotenv').config();
const db = require('./config/db');
const bcrypt = require('bcryptjs');

async function createAdmin() {
  const hashedPassword = await bcrypt.hash('admin', 10);
  
  await db.query(`
    INSERT INTO users (id, email, password, role, is_active)
    VALUES ($1, $2, $3, $4, $5)
    ON CONFLICT (email) DO NOTHING
  `, [
    'admin-123',
    'admin@gmail.com',
    hashedPassword,
    1,  // role admin
    true
  ]);

  console.log('Admin créé ou déjà existant');
}

createAdmin();
```

Exécutez-le avec :
```bash
node createAdmin.js
```

### Vérification
Pour tester que ça fonctionne :
1. Essayez de vous connecter via Postman avec :
   - Email: `admin@gmail.com`
   - Password: `admin`

2. Vérifiez dans votre DB que le password n'est pas en clair :
```sql
SELECT email, LEFT(password, 10) || '...' as password_preview FROM users;
```











































Si vous souhaitez modifier votre table `users` pour utiliser un **ID auto-incrémenté** au lieu d'un UUID,
 voici comment procéder :

### 1. Modification de la structure de la table

Remplacez votre définition de table par :

```sql
-- Nouvelle version avec ID auto-incrémenté
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  phone VARCHAR(20),
  address TEXT,
  role INTEGER NOT NULL DEFAULT 0, -- 0 = client, 1 = admin
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

-- Mise à jour de la table reset_tokens
ALTER TABLE reset_tokens 
ALTER COLUMN user_id TYPE INTEGER USING user_id::TEXT::INTEGER,
ALTER COLUMN user_id SET NOT NULL,
ADD CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE;
```

### 2. Script createAdmin.js modifié

```javascript
require('dotenv').config();
const db = require("../config/db");
const bcrypt = require('bcryptjs');

async function createAdmin() {
  try {
    const hashedPassword = await bcrypt.hash('admin', 10);
    
    const result = await db.query(`
      INSERT INTO users (email, password, role, is_active)
      VALUES ($1, $2, $3, $4)
      ON CONFLICT (email) DO NOTHING
      RETURNING id
    `, [
      'admin@gmail.com',
      hashedPassword,
      1,  // role admin
      true
    ]);

    if (result.rows.length > 0) {
      console.log('✅ Admin créé avec succès');
      console.log(`ID: ${result.rows[0].id}\nEmail: admin@gmail.com\nPassword: admin`);
    } else {
      console.log('ℹ️ Admin existe déjà');
    }
  } catch (error) {
    console.error('❌ Erreur lors de la création admin:', error.message);
  }
}

createAdmin();
```

### 3. Migration si la table existe déjà

Si vous avez déjà une table avec des données :

```sql
-- 1. Créez une nouvelle table temporaire
CREATE TABLE users_new (
  id SERIAL PRIMARY KEY,
  -- [autres colonnes identiques à votre table actuelle]
);

-- 2. Copiez les données
INSERT INTO users_new (email, password, first_name, ...)
SELECT email, password, first_name, ... FROM users;

-- 3. Supprimez l'ancienne table et renommez la nouvelle
DROP TABLE users;
ALTER TABLE users_new RENAME TO users;

-- 4. Recréez les contraintes et index
ALTER TABLE users ADD CONSTRAINT unique_email UNIQUE (email);
-- [autres contraintes nécessaires]
```

### Points clés :

1. **SERIAL** est l'équivalent PostgreSQL pour les auto-increments
2. Vous n'avez plus besoin de fournir manuellement un ID
3. La colonne `user_id` dans `reset_tokens` doit être mise à jour pour référencer un INTEGER au lieu d'UUID
4. Le script `createAdmin.js` est simplifié car il ne gère plus d'UUID

### Avantages de cette approche :
- Plus simple à gérer que les UUID
- Meilleure performance pour les requêtes avec jointures
- Plus lisible pour le débogage

### Inconvénients :
- Moins sécurisé que les UUID (expose le nombre d'utilisateurs)
- Problèmes potentiels lors de la réplication de bases de données

Si vous préférez garder les UUID mais simplifier leur génération, vous pouvez aussi utiliser PostgreSQL en mode natif :

```sql
-- Dans votre requête INSERT
INSERT INTO users (id, email, ...)
VALUES (gen_random_uuid(), 'admin@gmail.com', ...)
```























CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  phone VARCHAR(20),
  address TEXT,
  role INTEGER NOT NULL DEFAULT 0, -- 0 = client, 1 = admin
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE reset_tokens (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  token VARCHAR(255) NOT NULL,
  expires_at TIMESTAMP NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);





















Voici les détails pour tester le système de réinitialisation de mot de passe avec Postman :

### 1. Endpoint pour demander un code de réinitialisation
**Méthode :** POST  
**URL :** `http://localhost:3000/api/auth/forgot-password`  
**Headers :**  
```
Content-Type: application/json
```

**Body (JSON) :**
```json
{
    "email": "votre_email@exemple.com"
}
```

**Réponse attendue :**
```json
{
    "message": "Un email avec un code de réinitialisation a été envoyé",
    "userId": 123
}
```

### 2. Endpoint pour réinitialiser le mot de passe
**Méthode :** POST  
**URL :** `http://localhost:3000/api/auth/reset-password`  
**Headers :**  
```
Content-Type: application/json
```

**Body (JSON) :**
```json
{
    "userId": 123,
    "code": "12345",
    "newPassword": "NouveauMotDePasse123!"
}
```

**Réponse attendue (succès) :**
```json
{
    "message": "Mot de passe mis à jour avec succès"
}
```

### Flux complet de test dans Postman :

1. **Envoyer la demande de code** :
   - Créez une requête POST vers `/forgot-password`
   - Dans le body, mettez l'email d'un utilisateur existant
   - Vous devriez recevoir un email avec le code à 5 chiffres

2. **Réinitialiser le mot de passe** :
   - Créez une requête POST vers `/reset-password`
   - Dans le body, mettez :
     - Le `userId` reçu dans la première réponse
     - Le code à 5 chiffres reçu par email
     - Le nouveau mot de passe

3. **Tester la connexion avec le nouveau mot de passe** :
   - Utilisez le endpoint `/login` avec le nouveau mot de passe pour vérifier que ça fonctionne

### Erreurs possibles et solutions :

1. **Code invalide ou expiré** :
   - Vérifiez que le code est exactement le même que celui reçu par email
   - Le code expire après 15 minutes

2. **Email non trouvé** :
   - Vérifiez que l'email existe bien dans votre base de données

3. **Problème d'envoi d'email** :
   - Vérifiez la configuration SMTP dans `emailConfig`
   - Vérifiez les logs du serveur pour les erreurs d'envoi

### Configuration Postman recommandée :
- Créez une collection pour votre API
- Sauvegardez les variables comme `userId` entre les requêtes
- Utilisez l'environnement Postman pour stocker l'URL de base

Vous pouvez maintenant tester complètement le flux de réinitialisation de mot de passe !






























Voici comment tester la route de déconnexion (`/logout`) dans Postman :

### Endpoint de déconnexion
**Méthode :** POST  
**URL :** `http://localhost:3000/api/auth/logout`  
**Headers :**  
```
Content-Type: application/json
Authorization: Bearer VOTRE_JWT_TOKEN
```

### Étapes pour tester dans Postman :

1. **D'abord connectez-vous** (pour obtenir un token valide) :
   - POST `http://localhost:3000/api/auth/login`
   - Body :
     ```json
     {
         "email": "admin@gmail.com",
         "password": "admin123"
     }
     ```
   - Sauvegardez le token reçu dans la réponse

2. **Ensuite testez /logout** :
   - Créez une nouvelle requête POST vers `/logout`
   - Dans l'onglet "Headers" :
     ```
     Key: Authorization
     Value: Bearer VOTRE_JWT_TOKEN
     ```
   - Laissez le body vide

3. **Réponse attendue** :
   ```json
   {
       "message": "Déconnexion réussie"
   }
   ```

### Pour une implémentation plus robuste (optionnel) :

Si vous voulez vraiment invalider le token (plutôt qu'une simple réponse JSON), vous pourriez :

1. Modifier `authController.js` :
```javascript
exports.logout = async (req, res) => {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '');
        
        // Option 1: Ajouter le token à une blacklist
        await Token.blacklistToken(token);
        
        // Option 2: Vider le token côté client
        res.setHeader('Clear-Site-Data', '"cookies", "storage"');
        
        res.json({
            message: 'Déconnexion réussie'
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
```

2. Ajouter cette méthode à `models/Token.js` :
```javascript
static async blacklistToken(token) {
    const expiresAt = new Date(); // Expire immédiatement
    await db.query(
        'INSERT INTO blacklisted_tokens (token, expires_at) VALUES ($1, $2)',
        [token, expiresAt]
    );
}
```

Mais votre implémentation actuelle est parfaitement valable pour un MVP. Le vrai travail de déconnexion se fait généralement côté client en supprimant le token du stockage local.