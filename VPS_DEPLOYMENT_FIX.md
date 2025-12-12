# 🚨 VPS Deployment Not Updating - Fix Guide

## Problem Identified

Your live site at https://phoenixestimating.com/ is showing **old HTML** from a previous deployment.

**Proof:**
- **Live site has:** Old SVG favicon in the HTML
- **Your code has:** New PNG favicon with cache-busting (`?v=2`)
- **Asset hashes:** Live uses `index-BP-rxghO.js` but your local build creates `index-CGVJ8HuB.js`

This means your VPS deployment script **isn't building the frontend** or **isn't copying the new files**.

---

## Your Current Deployment Setup

**GitHub Actions Workflow:**
```yaml
- name: Deploy to Server
  uses: appleboy/ssh-action@v0.1.10
  with:
    host: ${{ secrets.VPS_HOST }}
    username: ${{ secrets.VPS_USER }}
    key: ${{ secrets.VPS_SSH_KEY }}
    script: |
      bash /home/deploy/deploy.sh
```

The workflow runs `/home/deploy/deploy.sh` on your VPS, but we don't know what that script does.

---

## ✅ What Your Deployment Script MUST Do

Your `/home/deploy/deploy.sh` script on the VPS **must** do these steps:

```bash
#!/bin/bash

# 1. Navigate to your project directory
cd /path/to/your/phoenix/project || exit

# 2. Pull latest code from GitHub
git pull origin main

# 3. Install/update dependencies
npm install

# 4. Build the frontend (THIS IS CRITICAL!)
npm run build

# 5. Copy the built files to your web server directory
# Example for Nginx:
rsync -av --delete dist/ /var/www/phoenixestimating.com/

# OR for Apache:
# rsync -av --delete dist/ /var/www/html/

# 6. Restart web server (if needed)
# sudo systemctl restart nginx
```

---

## 🔍 Diagnosis Steps

### Step 1: Check if deployment script exists and what it does

SSH into your VPS:
```bash
ssh your-username@your-vps-ip
```

Then check the script:
```bash
cat /home/deploy/deploy.sh
```

**Look for:**
- ✅ Does it run `npm run build`?
- ✅ Does it copy `dist/` folder to your web server directory?
- ✅ Does it have the correct project path?

### Step 2: Check GitHub Actions logs

1. Go to https://github.com/Jawa090/phoenix/actions
2. Click on the most recent workflow run
3. Check if it shows "Success" or "Failed"
4. Click on "Deploy to Server" step to see the logs

**Look for:**
- Any error messages
- Whether the script completed successfully

### Step 3: Manually test the build on VPS

SSH into your VPS and run:
```bash
cd /path/to/your/phoenix/project
git pull origin main
npm install
npm run build
ls -la dist/
```

Check the `dist/index.html` file:
```bash
cat dist/index.html | grep -A 5 "favicon"
```

You should see the NEW favicon tags with `?v=2`.

---

## 🛠️ Fix Option 1: Update Your Deployment Script

Update `/home/deploy/deploy.sh` on your VPS to include the build step:

```bash
#!/bin/bash

# Configuration
PROJECT_DIR="/path/to/phoenix"  # Change this to your actual path
WEB_DIR="/var/www/phoenixestimating.com"  # Change this to your web server directory

echo "🚀 Starting deployment..."

# Navigate to project
cd "$PROJECT_DIR" || exit 1

# Pull latest code
echo "📥 Pulling latest code..."
git pull origin main || exit 1

# Install dependencies
echo "📦 Installing dependencies..."
npm install || exit 1

# Build the project
echo "🔨 Building frontend..."
npm run build || exit 1

# Copy to web server
echo "📋 Copying files to web server..."
rsync -av --delete dist/ "$WEB_DIR/" || exit 1

# Set proper permissions
echo "🔒 Setting permissions..."
sudo chown -R www-data:www-data "$WEB_DIR"
sudo chmod -R 755 "$WEB_DIR"

echo "✅ Deployment complete!"
```

**To update the script on your VPS:**
```bash
ssh your-username@your-vps-ip
nano /home/deploy/deploy.sh
# Paste the updated script
# Save with Ctrl+X, then Y, then Enter
chmod +x /home/deploy/deploy.sh
```

---

## 🛠️ Fix Option 2: Add .env to VPS

**CRITICAL for Google Sheets:** Your `.env` file is **not in Git** (it's in `.gitignore`).

The VPS needs the Google Sheets URL! Create `.env` on your VPS:

```bash
ssh your-username@your-vps-ip
cd /path/to/your/phoenix/project

# Create .env file
cat > .env << 'EOF'
# Google Apps Script Web App URL
VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/AKfycbzcB6px-EVTiYTtKvp5b4QWDkNRVH8rZZBYxl6NUZtWIZaIx1UEokh6DhKg-d2_Sn1YkA/exec
EOF

# OR set it as environment variable in your deployment script
```

Then rebuild:
```bash
npm run build
rsync -av --delete dist/ /var/www/phoenixestimating.com/
```

---

## 🛠️ Fix Option 3: GitHub Secrets for Environment Variables

**Better approach:** Store the Google Sheets URL in GitHub Secrets

1. Go to your GitHub repo → Settings → Secrets and variables → Actions
2. Click "New repository secret"
3. Name: `VITE_GOOGLE_SCRIPT_URL`
4. Value: Your Google Apps Script URL

Then update your GitHub Actions workflow:

```yaml
- name: Deploy to Server
  uses: appleboy/ssh-action@v0.1.10
  env:
    GOOGLE_SCRIPT_URL: ${{ secrets.VITE_GOOGLE_SCRIPT_URL }}
  with:
    host: ${{ secrets.VPS_HOST }}
    username: ${{ secrets.VPS_USER }}
    key: ${{ secrets.VPS_SSH_KEY }}
    script: |
      cd /path/to/phoenix
      git pull origin main
      npm install
      echo "VITE_GOOGLE_SCRIPT_URL=${{ secrets.VITE_GOOGLE_SCRIPT_URL }}" > .env
      npm run build
      rsync -av --delete dist/ /var/www/phoenixestimating.com/
```

---

## 🚀 Quick Manual Deployment (Immediate Fix)

**If you need to deploy RIGHT NOW**, do this manually:

1. **Build locally:**
   ```bash
   # On your Mac
   cd /Users/abdullahshk/Desktop/Rush/phoenix
   npm run build
   ```

2. **Copy to VPS:**
   ```bash
   # Replace with your actual VPS details
   scp -r dist/* your-username@your-vps-ip:/var/www/phoenixestimating.com/
   ```

3. **Set permissions on VPS:**
   ```bash
   ssh your-username@your-vps-ip
   sudo chown -R www-data:www-data /var/www/phoenixestimating.com
   sudo chmod -R 755 /var/www/phoenixestimating.com
   ```

4. **Clear browser cache and test:**
   - Open https://phoenixestimating.com/ in incognito mode
   - Check the favicon
   - Test the contact form

---

## ✅ Verification Checklist

After fixing the deployment:

- [ ] SSH into VPS and verify deployment script has `npm run build`
- [ ] `.env` file exists on VPS with Google Sheets URL
- [ ] Manually trigger deployment (git push) and watch GitHub Actions
- [ ] Check live site HTML source - should see `logo.png?v=2`
- [ ] Favicon shows correctly (test in incognito mode)
- [ ] Contact form submits to Google Sheets (check your sheet)
- [ ] Asset hashes in HTML match your local build

---

## 🆘 Need Help?

Share:
1. Contents of `/home/deploy/deploy.sh` from your VPS
2. GitHub Actions logs (screenshot of any errors)
3. Web server directory path (where files should be copied)
4. Web server type (Nginx, Apache, etc.)

I can help you create the correct deployment script!
