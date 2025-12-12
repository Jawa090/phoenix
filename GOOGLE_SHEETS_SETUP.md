# How to Connect Your Forms to Google Sheets

Since your website is static (running in the browser), we can't save data directly to a database without a backend. However, we can use **Google Sheets** as a database by using a small "Google Apps Script".

## Step 1: Create the Google Sheet
1. Go to [Google Sheets](https://sheets.google.com) and create a new sheet.
2. Name it "Phoenix Leads" (or whatever you prefer).
3. In the first row (Header), add these columns exactly:
   - **Timestamp**
   - **Name**
   - **Email**
   - **Phone**
   - **ZipCode**
   - **Message**
   - **File Link**

## Step 2: Add the Script
1. In your Google Sheet, go to **Extensions** > **Apps Script**.
2. Delete any code in the editor and paste the code below.

```javascript
// GOOGLE APPS SCRIPT CODE
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    var timestamp = new Date();
    var fileUrl = "";

    // Handle File Upload (Save to Drive)
    if (data.fileData) {
      var folderName = "Phoenix Uploads"; // Change folder name if desired
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

## Step 3: Deploy the Script
1. Click the blue **Deploy** button > **New deployment**.
2. Click the gear icon (Select type) > **Web app**.
3. Fill in the details:
   - **Description**: "Phoenix Form Handler"
   - **Execute as**: "Me" (your email)
   - **Who has access**: **"Anyone"** (This is critical so your website visitors can submit).
4. Click **Deploy**.
5. You might be asked to "Authorize access". Click it, sign in, click **Advanced**, and **Go to (Script Name) (unsafe)** (it is safe, it's your own script).
6. Copy the **Web App URL** (it ends in `/exec`).

## Step 4: Add URL to Website
1. Create a file named `.env` in your project root (if you are running locally) or just update the variable in the code.
2. For now, since we are editing the code, you need to paste this URL into the `GOOGLE_SCRIPT_URL` constant I created in `src/lib/constants.ts` (I will create this for you).

---
**Note:** Since I cannot deploy this for you, the forms are currently set up to use a *placeholder* URL. You MUST update this URL for the data to actually appear in your sheet.
