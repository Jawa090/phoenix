# Google Sheets Not Working on Live Site - Troubleshooting Guide

## 🔴 Problem
Forms work on localhost but fail when deployed to production (live website).

## ✅ Solution

### Step 1: Verify Your Google Apps Script Deployment

1. **Open your Google Sheet**
2. **Go to Extensions → Apps Script**
3. **Click Deploy → Manage deployments**
4. **Check these settings:**

   #### Critical Settings:
   - ✅ **Execute as**: Must be "Me" (your email)
   - ✅ **Who has access**: Must be **"Anyone"** (NOT "Anyone with a Google account")
   
   ⚠️ **IMPORTANT**: If "Who has access" is NOT set to "Anyone", it will only work on localhost and fail on live sites!

### Step 2: Update Your Deployment (If Needed)

If the settings are wrong:

1. Click the **✏️ Edit** icon (pencil) next to your deployment
2. Change "Who has access" to **"Anyone"**
3. Click **Deploy**
4. **COPY THE NEW URL** (it might change)

### Step 3: Update Your Website

If the URL changed:

1. Open `src/lib/constants.ts`
2. Replace the old URL with the new one
3. Make sure it ends with `/exec` (NOT `/dev`)
4. Rebuild and redeploy your website

```typescript
export const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/YOUR_NEW_ID/exec";
```

### Step 4: Test the Script Directly

**Test if your script is accessible:**

1. Open a new browser tab (incognito/private mode)
2. Paste your Google Apps Script URL
3. You should see a blank page or JSON response
4. If you get an "Authorization required" error, the deployment is wrong

### Step 5: Common Issues & Fixes

#### Issue: "Authorization Required" Error
**Fix**: Redeploy with "Who has access" = "Anyone"

#### Issue: Script works on localhost but not production
**Fix**: You might have set "Anyone with a Google account" instead of "Anyone"

#### Issue: CORS errors in browser console
**Fix**: Make sure your Google Apps Script has:
```javascript
return ContentService.createTextOutput(JSON.stringify({ "result": "success" }))
  .setMimeType(ContentService.MimeType.JSON);
```

#### Issue: No data appearing in sheet
**Fix**: 
1. Check Google Apps Script logs (View → Executions)
2. Look for errors in the execution log
3. Make sure your sheet has the correct headers

### Step 6: Complete Redeployment (If Nothing Works)

1. **In Google Apps Script:**
   - Click Deploy → Manage deployments
   - Click the ⋮ (three dots) → Archive
   - Create a NEW deployment:
     - Deploy → New deployment
     - Type: Web app
     - Description: "Phoenix Form Handler V2"
     - Execute as: "Me"
     - Who has access: **"Anyone"**
   - Click Deploy
   - Authorize when prompted
   - **Copy the new URL**

2. **Update your website:**
   - Update `src/lib/constants.ts` with new URL
   - Rebuild: `npm run build`
   - Redeploy to hosting

### Step 7: Environment Variables (Optional - Better Security)

For production, you might want to use environment variables instead of hardcoding:

**For Vite:**
1. Create `.env` file:
```
VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_ID/exec
```

2. Update `src/lib/constants.ts`:
```typescript
export const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || "YOUR_FALLBACK_URL";
```

3. Add `.env` to `.gitignore`
4. Set the environment variable in your hosting platform

## ✅ Verification Checklist

- [ ] Google Apps Script has "Who has access" set to **"Anyone"**
- [ ] Script URL ends with `/exec` (not `/dev`)
- [ ] Script URL is updated in `src/lib/constants.ts`
- [ ] Website has been rebuilt after URL change (`npm run build`)
- [ ] Website has been redeployed to hosting
- [ ] Test form submission on live site works

## 🆘 Still Not Working?

**Check browser console (F12) on your live site:**
- Look for error messages
- Check the Network tab for failed requests
- The Google Script request should show status 200

**Common error messages:**
- "403 Forbidden" → Wrong deployment permissions
- "401 Unauthorized" → Not set to "Anyone"
- "CORS error" → Normal with no-cors mode, ignore if data saves
- "404 Not Found" → Wrong URL

## 📧 Need More Help?

Share the following information:
1. Your Google Apps Script URL (ends with /exec)
2. Error messages from browser console (F12)
3. Hosting platform (Vercel, Netlify, etc.)
