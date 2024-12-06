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

## Allowing Incoming HTTP Traffic on Port 80

To allow incoming HTTP traffic on port 80 through the firewall on your Ubuntu server, follow these steps:

1. Check the status of the firewall to see if it's active:
   ```bash
   sudo ufw status
   ```

   If the firewall is inactive, you'll see a message like "Status: inactive". If it's active, you'll see a list of allowed and denied rules.

2. If the firewall is inactive, enable it with the following command:
   ```bash
   sudo ufw enable
   ```

   This will activate the firewall with the default rules.

3. Allow incoming HTTP traffic on port 80 using the following command:
   ```bash
   sudo ufw allow 80/tcp
   ```

   This command allows incoming TCP traffic on port 80.

   Alternatively, you can use the service name "http" instead of the port number:
   ```bash
   sudo ufw allow http
   ```

4. If you want to allow incoming HTTP traffic only from a specific IP address or subnet, use the `from` option:
   ```bash
   sudo ufw allow from <ip-address> to any port 80
   ```

   Replace `<ip-address>` with the actual IP address or subnet you want to allow.

5. After adding the rule, verify the firewall status again to ensure the rule has been applied:
   ```bash
   sudo ufw status
   ```

   You should see the newly added rule in the list of allowed rules.

If you encounter any issues or the firewall still blocks incoming HTTP traffic after adding the rule, try restarting the Nginx service:

```bash
sudo systemctl restart nginx
```

This will ensure that Nginx is running and listening on the allowed port.

Remember to be cautious when modifying firewall rules, as it can impact the security of your server. Only allow the necessary ports and services required for your application to function properly.
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
