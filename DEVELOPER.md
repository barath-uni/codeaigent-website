# Developer Guide

## Setting up the Production Environment

### 1. Install Required Software 

```bash
sudo apt update
sudo apt upgrade
```

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
```

```bash
sudo apt install nginx
```

```bash
sudo npm install -g pm2
```

```bash
su
```

```bash
sudo apt install certbot python3-certbot-nginx
```

```bash
sudo certbot --nginx -d codeaigent.com -d www.codeaigent.com
```

```bash
sudo certbot renew --dry-run
```

```bash
sudo nano /etc/nginx/sites-available/codeaigent.com.conf
```

```bash
sudo ln -s /etc/nginx/sites-available/codeaigent.com.conf /etc/nginx/sites-enabled/
```

```bash
sudo nginx -t
```

```bash
sudo systemctl restart nginx
```

```bash
cd /path/to/codeaigent-website
```

```bash
npm install
```

```bash
npm run build
```

```bash
pm2 start npm --name "codeaigent-website" -- start
```

```bash
pm2 save
```

```bash
pm2 startup
```

```bash
chmod +x start-database.sh
./start-database.sh
```

```bash
npm run db:migrate
```

```bash
cp .env.example .env
```

# Authentication
AUTH_SECRET="generated_secret_here"
AUTH_DISCORD_ID="your_discord_id"
AUTH_DISCORD_SECRET="your_discord_secret"

# Database
DATABASE_URL="postgresql://postgres:password@localhost:5432/codeaigent-website"
```

```
codeaigent-website/
├── src/
│   ├── app/   # Next.js app directory
│   ├── server/   # Server-side code
│   ├── styles/   # Global styles
│   └── env.js    # Environment configuration
├── prisma/       # Database schema and migrations
├── public/       # Static files
└── .env          # Environment variables
```
.
