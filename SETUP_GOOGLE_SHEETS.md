# ✅ Google Sheets Integration Complete!

All your forms now save data to Google Sheets automatically. Here's what was done:

## Files Updated:
- ✅ `ContactForm.tsx`
- ✅ `PricingPaymentSection.tsx`  
- ✅ `ProcessFormSection.tsx`
- ✅ `ContactPage.tsx`

## What Happens Now:
When users submit any form on your website, the data (including any uploaded PDF files) will be sent to Google Sheets.

## ⚠️ IMPORTANT - You MUST Complete This Setup:

### Step 1: Create Your Google Sheet
1. Go to https://sheets.google.com
2. Create a new sheet called "Phoenix Leads"
3. In the first row, add these exact column headers:
   - `Timestamp`
   - `Name`
   - `Email`
   - `Phone`
   - `ZipCode`
   - `Message`
   - `File Link`

### Step 2: Add the Script
1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any existing code
3. Paste this code:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    var timestamp = new Date();
    var fileUrl = "";

    // Handle File Upload (Save to Drive)
    if (data.fileData) {
      var folderName = "Phoenix Uploads";
      var folder;
      var folders = DriveApp.getFoldersByName(folderName);
      
      if (folders.hasNext()) {
        folder = folders.next();
      } else {
        folder = DriveApp.createFolder(folderName);
      }
      
      var blob = Utilities.newBlob(Utilities.base64Decode(data.fileData), data.mimeType, data.fileName);
      var file = folder.createFile(blob);
      file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
      fileUrl = file.getUrl();
    }

    // Append to Sheet
    sheet.appendRow([
      timestamp,
      data.name || "",
      data.email || "",
      data.phone || "",
      data.zipCode || "",
      data.message || "",
      fileUrl
    ]);

    return ContentService.createTextOutput(JSON.stringify({ "result": "success" }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ "result": "error", "error": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click **Save** (💾 icon)

### Step 3: Deploy the Script
1. Click **Deploy** → **New deployment**
2. Click the gear icon ⚙️ → Select **Web app**
3. Settings:
   - **Description**: "Phoenix Form Handler"
   - **Execute as**: "Me"
   - **Who has access**: **"Anyone"** ⚠️ (CRITICAL!)
4. Click **Deploy**
5. If asked to authorize, click through the warnings (it's your own script, it's safe)
6. **COPY THE WEB APP URL** (it will end with `/exec`)

### Step 4: Update Your Website
1. Open the file: `src/lib/constants.ts`
2. Replace `"YOUR_GOOGLE_SCRIPT_URL_HERE"` with your actual URL
3. It should look like:
   ```typescript
   export const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/ABC123.../exec";
   ```

### Step 5: Test It!
1. Go to your website
2. Fill out any form
3. Click submit
4. Check your Google Sheet - you should see a new row with the data!

## 📁 Where Files Are Stored:
Uploaded PDFs are automatically saved to a Google Drive folder called "Phoenix Uploads" with a link in your sheet.

## Need Help?
- Make sure the Google Script URL ends with `/exec`
- Make sure "Who has access" is set to "Anyone"
- Check the browser console (F12) for any errors

---
**That's it! Your forms are now connected to Google Sheets! 🎉**
