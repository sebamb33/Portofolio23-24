# Gestion des services systemd

## Emplacement des services

Les services systemd doivent être placés dans :
```
/etc/systemd/system/
```

## Organisation recommandée

Créez un dossier `services` dans votre home pour organiser vos fichiers de service :
```bash
mkdir -p ~/services
cd ~/services
```

## Créer un service

1. Créez le fichier de service dans votre dossier `services` :
```bash
nano ~/services/mon-service.service
```

2. Exemple de contenu :
```ini
[Unit]
Description=Mon application
After=network.target

[Service]
Type=simple
User=votre-user
WorkingDirectory=/chemin/du/projet
ExecStart=/chemin/vers/l/executable
Restart=always
RestartSec=10
Environment=NODE_ENV=production

[Install]
WantedBy=multi-user.target
```

## Déployer le service

Déplacez le fichier vers le dossier systemd :
```bash
sudo mv ~/services/mon-service.service /etc/systemd/system/
```

## Activer et démarrer le service

```bash
sudo systemctl daemon-reload
sudo systemctl enable mon-service
sudo systemctl start mon-service
```

## Vérifier le statut

```bash
sudo systemctl status mon-service
```

## Commandes utiles

Lister tous les services actifs :
```bash
sudo systemctl list-units --type=service --state=running
```

Voir les logs :
```bash
sudo journalctl -u mon-service -f
```

Arrêter/Désactiver :
```bash
sudo systemctl stop mon-service
sudo systemctl disable mon-service
```