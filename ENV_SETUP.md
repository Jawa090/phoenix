# Environment Variables Setup

Your Phoenix website now uses environment variables for sensitive configuration like the Google Sheets API URL.

## 📁 Files Created

- **`.env`** - Your local environment variables (NOT committed to Git)
- **`.env.example`** - Example template (safe to commit to Git)

## 🔧 Local Development

The `.env` file is already configured with your Google Script URL. No changes needed!

```bash
# Just run your dev server as usual
npm run dev
```

## 🚀 Production Deployment

When deploying to hosting platforms, you need to set environment variables in their dashboard:

### For Vercel:
1. Go to your project dashboard
2. Settings → Environment Variables
3. Add:
   - **Name**: `VITE_GOOGLE_SCRIPT_URL`
   - **Value**: `your_google_script_url`
   - **Environment**: Production (and Preview if needed)
4. Redeploy

### For Netlify:
1. Go to Site settings → Build & deploy → Environment
2. Click "Edit variables"
3. Add:
   - **Key**: `VITE_GOOGLE_SCRIPT_URL`
   - **Value**: `your_google_script_url`
4. Redeploy

### For Other Platforms:
Look for "Environment Variables" or "Build Environment" in your hosting settings.

## 🔒 Security Benefits

✅ **Before**: Google Script URL was hardcoded in `constants.ts` and committed to Git
❌ Problem: Anyone with access to your code could see the URL

✅ **After**: URL is stored in `.env` which is in `.gitignore`
✅ Benefit: Your sensitive URLs are never committed to Git

## 📝 How It Works

**In your code** (`src/lib/constants.ts`):
```typescript
export const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || "";
```

**Vite automatically**:
- Loads variables from `.env` during development
- Replaces `import.meta.env.VITE_GOOGLE_SCRIPT_URL` with the actual value
- Only includes variables prefixed with `VITE_` for security

## 🆘 Troubleshooting

### Forms not working after adding .env?
**Solution**: Restart your dev server
```bash
# Press Ctrl+C to stop the server
npm run dev
```

### Environment variable not found in production?
**Solution**: Make sure you:
1. Added the variable in your hosting platform's dashboard
2. Used the exact name: `VITE_GOOGLE_SCRIPT_URL`
3. Redeployed after adding the variable

### Want to use different URLs for dev/production?
Create multiple env files:
- `.env` - Default (development)
- `.env.production` - Production only

## 📚 Learn More

- [Vite Environment Variables Docs](https://vitejs.dev/guide/env-and-mode.html)
- [Vercel Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)
- [Netlify Environment Variables](https://docs.netlify.com/configure-builds/environment-variables/)
