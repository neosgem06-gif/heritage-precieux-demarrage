# Guide de Déploiement sur Vercel
## Héritage Précieux - Coming Soon

**Auteur** : Manus AI  
**Date** : 23 octobre 2025  
**Pour** : Philippe Seyrat

---

## 🎯 Objectif

Déployer votre site "Coming Soon" sur **www.heritage-precieux.fr** en utilisant Vercel (gratuit, rapide et automatique).

**Temps estimé** : 10-15 minutes

---

## 📋 Prérequis

- [ ] Un compte email valide
- [ ] Le nom de domaine `heritage-precieux.fr` (que vous possédez déjà)
- [ ] Accès aux paramètres DNS de votre registrar (où vous avez acheté le domaine)

---

## 🚀 Étape 1 : Créer un Compte Vercel

### 1.1 Inscription

1. Allez sur **[vercel.com](https://vercel.com)**
2. Cliquez sur **"Sign Up"** (Inscription)
3. Choisissez **"Continue with Email"**
4. Entrez votre email : `votre-email@example.com`
5. Vérifiez votre boîte mail et cliquez sur le lien de confirmation
6. Créez votre compte (gratuit, aucune carte bancaire nécessaire)

### 1.2 Configuration du Compte

1. Nom d'utilisateur : `heritage-precieux` (ou ce que vous voulez)
2. Type de compte : **Hobby** (gratuit)
3. Cliquez sur **"Continue"**

✅ **Votre compte Vercel est créé !**

---

## 📦 Étape 2 : Déployer le Projet

### Option A : Depuis Manus (RECOMMANDÉ) ⭐

1. **Dans l'interface Manus**, cliquez sur le bouton **"Publish"** (Publier)
2. Sélectionnez **"Vercel"**
3. Connectez votre compte Vercel
4. Le projet sera automatiquement déployé

**C'est tout !** Vercel vous donnera une URL temporaire du type :
```
https://heritage-precieux-coming-soon.vercel.app
```

### Option B : Import Manuel

Si l'option A ne fonctionne pas :

1. **Téléchargez le projet**
   - Cliquez sur le checkpoint `manus-webdev://ef62e451`
   - Téléchargez le ZIP

2. **Dans Vercel Dashboard**
   - Cliquez sur **"Add New..."** → **"Project"**
   - Cliquez sur **"Import"**
   - Uploadez le ZIP ou connectez via Git

3. **Configuration du Build**
   - Framework Preset : **Vite**
   - Build Command : `pnpm run build` (déjà configuré)
   - Output Directory : `dist` (déjà configuré)
   - Install Command : `pnpm install` (déjà configuré)

4. **Déployer**
   - Cliquez sur **"Deploy"**
   - Attendez 2-3 minutes

✅ **Votre site est en ligne sur une URL temporaire Vercel !**

---

## 🌐 Étape 3 : Configurer le Nom de Domaine

### 3.1 Ajouter le Domaine dans Vercel

1. Dans votre projet Vercel, allez dans **"Settings"** (Paramètres)
2. Cliquez sur **"Domains"** dans le menu de gauche
3. Cliquez sur **"Add"** (Ajouter)
4. Entrez : `www.heritage-precieux.fr`
5. Cliquez sur **"Add"**

Vercel va vous afficher les enregistrements DNS à configurer :

```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**Notez ces informations**, vous en aurez besoin à l'étape suivante.

### 3.2 Configurer le DNS chez votre Registrar

Vous devez maintenant aller chez le fournisseur où vous avez acheté `heritage-precieux.fr` (OVH, Gandi, Namecheap, etc.).

#### **Si votre domaine est chez OVH**

1. Connectez-vous à [ovh.com](https://www.ovh.com)
2. Allez dans **"Noms de domaine"**
3. Cliquez sur `heritage-precieux.fr`
4. Allez dans l'onglet **"Zone DNS"**
5. Cliquez sur **"Ajouter une entrée"**
6. Sélectionnez **"CNAME"**
7. Remplissez :
   - **Sous-domaine** : `www`
   - **Cible** : `cname.vercel-dns.com`
8. Cliquez sur **"Suivant"** puis **"Valider"**

#### **Si votre domaine est chez Gandi**

1. Connectez-vous à [gandi.net](https://www.gandi.net)
2. Allez dans **"Noms de domaine"**
3. Cliquez sur `heritage-precieux.fr`
4. Allez dans **"Enregistrements DNS"**
5. Cliquez sur **"Ajouter un enregistrement"**
6. Type : **CNAME**
7. Remplissez :
   - **Nom** : `www`
   - **Valeur** : `cname.vercel-dns.com`
8. Cliquez sur **"Créer"**

#### **Si votre domaine est chez un autre registrar**

Les étapes sont similaires :
1. Connectez-vous à votre compte
2. Trouvez la section "DNS" ou "Zone DNS"
3. Ajoutez un enregistrement **CNAME** :
   - **Nom/Host** : `www`
   - **Valeur/Target** : `cname.vercel-dns.com`
4. Sauvegardez

### 3.3 Redirection du Domaine Principal (Optionnel)

Si vous voulez que `heritage-precieux.fr` (sans www) redirige vers `www.heritage-precieux.fr` :

1. Dans Vercel, ajoutez aussi `heritage-precieux.fr` (sans www)
2. Vercel vous donnera une adresse IP (Type A)
3. Ajoutez un enregistrement **A** dans votre DNS :
   - **Nom** : `@` (ou vide)
   - **Valeur** : L'IP fournie par Vercel (ex: `76.76.21.21`)

### 3.4 Attendre la Propagation DNS

⏱️ **Délai** : 5 minutes à 48 heures (généralement 1-2 heures)

Pour vérifier si c'est actif :
1. Ouvrez un navigateur en navigation privée
2. Allez sur `www.heritage-precieux.fr`
3. Si ça ne fonctionne pas encore, attendez un peu plus

Vous pouvez vérifier la propagation DNS sur : [dnschecker.org](https://dnschecker.org)

---

## ✅ Étape 4 : Vérification Finale

### 4.1 Checklist

- [ ] Le site s'affiche sur `www.heritage-precieux.fr`
- [ ] Le compte à rebours fonctionne
- [ ] Le formulaire newsletter fonctionne
- [ ] Le formulaire de dépôt s'ouvre correctement
- [ ] La FAQ s'ouvre/ferme correctement
- [ ] Les liens Instagram/Facebook fonctionnent
- [ ] Le site est responsive (testez sur mobile)
- [ ] Le certificat HTTPS est actif (cadenas vert dans le navigateur)

### 4.2 Test Mobile

1. Ouvrez le site sur votre smartphone
2. Vérifiez que tout s'affiche correctement
3. Testez le formulaire d'inscription
4. Testez le formulaire de dépôt

---

## 🔄 Étape 5 : Mises à Jour Futures

### Comment Mettre à Jour le Site

**Option 1 : Depuis Manus** ⭐
1. Faites vos modifications dans Manus
2. Cliquez sur **"Publish"** → **"Vercel"**
3. Le site est automatiquement mis à jour (30 secondes)

**Option 2 : Via Git (Avancé)**
1. Connectez votre projet à GitHub
2. Chaque modification sur GitHub déploie automatiquement sur Vercel

---

## 📊 Étape 6 : Configurer les Analytics (Optionnel)

### 6.1 Activer Vercel Analytics (Gratuit)

1. Dans votre projet Vercel, allez dans **"Analytics"**
2. Cliquez sur **"Enable"**
3. Vous aurez accès à :
   - Nombre de visiteurs
   - Pages vues
   - Temps de chargement
   - Origine géographique

### 6.2 Ajouter Google Analytics (Optionnel)

Si vous voulez des statistiques plus détaillées :

1. Créez un compte [Google Analytics](https://analytics.google.com)
2. Créez une propriété pour `heritage-precieux.fr`
3. Copiez votre ID de mesure (ex: `G-XXXXXXXXXX`)
4. Contactez-moi pour l'intégrer au site

---

## 📧 Étape 7 : Configurer la Réception des Emails

### 7.1 Formulaire Newsletter

Actuellement, le formulaire newsletter simule l'envoi. Pour recevoir vraiment les emails :

**Option A : Utiliser un Service d'Emailing** ⭐ RECOMMANDÉ

1. **Mailchimp** (gratuit jusqu'à 500 contacts)
   - Créez un compte sur [mailchimp.com](https://mailchimp.com)
   - Créez une audience
   - Je peux intégrer l'API pour vous

2. **Brevo (ex-Sendinblue)** (gratuit jusqu'à 300 emails/jour)
   - Créez un compte sur [brevo.com](https://brevo.com)
   - Créez une liste de contacts
   - Je peux intégrer l'API pour vous

**Option B : Recevoir par Email Simple**

Je peux configurer le formulaire pour envoyer les inscriptions directement à votre email via un service comme :
- **Formspree** (gratuit jusqu'à 50 soumissions/mois)
- **EmailJS** (gratuit jusqu'à 200 emails/mois)

### 7.2 Formulaire de Dépôt-Vente

Même principe que la newsletter. Options :

1. **Email direct** (via Formspree/EmailJS)
2. **Base de données** (Airtable gratuit)
3. **CRM** (HubSpot gratuit)

**Dites-moi quelle option vous préférez, et je configure tout !**

---

## 🛡️ Étape 8 : Sécurité et Maintenance

### 8.1 HTTPS

✅ **Automatique avec Vercel** : Votre site aura automatiquement un certificat SSL (HTTPS) gratuit.

### 8.2 Sauvegardes

✅ **Automatique avec Vercel** : Toutes les versions sont sauvegardées. Vous pouvez revenir en arrière à tout moment.

### 8.3 Mises à Jour de Sécurité

✅ **Automatique avec Vercel** : Les dépendances sont automatiquement mises à jour.

---

## 💰 Coûts

### Vercel (Hébergement)

- **Plan Hobby** : **GRATUIT** ✅
  - Bande passante illimitée
  - 100 GB de transfert/mois (largement suffisant)
  - HTTPS automatique
  - CDN mondial

Vous ne paierez **rien** pour l'hébergement avec votre site Coming Soon.

### Nom de Domaine

- Vous possédez déjà `heritage-precieux.fr`
- Coût annuel : ~10-15 € (selon votre registrar)

### Services Optionnels

- **Mailchimp/Brevo** : Gratuit jusqu'à 500 contacts
- **Google Analytics** : Gratuit
- **Formspree** : Gratuit jusqu'à 50 soumissions/mois

**Total mensuel : 0 €** 🎉

---

## 🆘 Aide et Support

### Problèmes Courants

#### Le site ne s'affiche pas après 48h

1. Vérifiez que les enregistrements DNS sont corrects
2. Utilisez [dnschecker.org](https://dnschecker.org) pour vérifier la propagation
3. Videz le cache de votre navigateur (Ctrl + F5)

#### Le formulaire ne fonctionne pas

1. Ouvrez la console du navigateur (F12)
2. Regardez s'il y a des erreurs
3. Contactez-moi avec les détails

#### Le site est lent

1. Vérifiez votre connexion internet
2. Testez sur [GTmetrix](https://gtmetrix.com)
3. Le site devrait charger en < 2 secondes

### Contact

Si vous avez besoin d'aide :
1. Revenez dans Manus et posez votre question
2. Je suis là pour vous aider ! 😊

---

## 📝 Checklist Complète

### Avant le Déploiement

- [x] Site créé et testé
- [x] Compte à rebours configuré (15 novembre 2025)
- [x] Formulaire newsletter fonctionnel
- [x] Formulaire dépôt-vente fonctionnel
- [x] FAQ complète
- [x] Design responsive

### Déploiement

- [ ] Compte Vercel créé
- [ ] Projet déployé sur Vercel
- [ ] URL temporaire Vercel testée
- [ ] Domaine ajouté dans Vercel
- [ ] DNS configuré chez le registrar
- [ ] Propagation DNS attendue (1-48h)
- [ ] Site accessible sur www.heritage-precieux.fr
- [ ] HTTPS actif (cadenas vert)

### Après le Déploiement

- [ ] Test complet du site
- [ ] Test sur mobile
- [ ] Analytics activé
- [ ] Service d'emailing configuré (newsletter)
- [ ] Service de réception configuré (dépôt-vente)
- [ ] Liens réseaux sociaux vérifiés

---

## 🎉 Félicitations !

Votre site **Héritage Précieux** est maintenant en ligne sur **www.heritage-precieux.fr** !

Les visiteurs peuvent :
- ✅ Voir le compte à rebours jusqu'à l'ouverture
- ✅ S'inscrire à la newsletter
- ✅ Proposer leurs objets en dépôt-vente
- ✅ Consulter la FAQ
- ✅ Visiter votre boutique eBay

**Prochaines étapes** :
1. Partagez le lien sur vos réseaux sociaux
2. Installez la banderole avec le site web
3. Commencez à collecter des emails avant l'ouverture
4. Préparez l'ouverture mi-novembre 2025

**Besoin d'aide ?** Je suis là ! 🚀

---

**Document créé par Manus AI - Octobre 2025**  
**Pour Philippe Seyrat, Fondateur d'Héritage Précieux**

