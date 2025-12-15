# Updated Google Apps Script for PDF File Uploads

## ⚠️ IMPORTANT: Update Your Google Apps Script

If PDF files are not appearing in your sheet, please update your Google Apps Script with this improved version:

### Complete Google Apps Script Code:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    var timestamp = new Date();
    var fileUrl = "";

    // Handle File Upload (Save to Drive)
    if (data.fileData && data.fileName && data.mimeType) {
      var folderName = "Phoenix Uploads";
      var folder;
      var folders = DriveApp.getFoldersByName(folderName);
      
      if (folders.hasNext()) {
        folder = folders.next();
      } else {
        folder = DriveApp.createFolder(folderName);
      }
      
      // Decode base64 and create file
      var blob = Utilities.newBlob(
        Utilities.base64Decode(data.fileData), 
        data.mimeType, 
        data.fileName
      );
      
      var file = folder.createFile(blob);
      
      // Set sharing permissions
      file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
      
      // Get the file URL
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

    return ContentService.createTextOutput(JSON.stringify({ 
      "result": "success",
      "fileUrl": fileUrl 
    })).setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Log the error for debugging
    Logger.log('Error: ' + error.toString());
    
    return ContentService.createTextOutput(JSON.stringify({ 
      "result": "error", 
      "error": error.toString() 
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

## How to Update:

1. Go to your Google Sheet
2. Click **Extensions** → **Apps Script**
3. **Replace ALL the code** with the script above
4. Click **Save** (💾 icon)
5. Click **Deploy** → **Manage deployments**
6. Click the ✏️ (Edit) icon on your existing deployment
7. Change **Version** to "New version"
8. Click **Deploy**

## What This Does:

✅ Saves form data to your sheet
✅ Uploads PDF files to Google Drive folder "Phoenix Uploads"
✅ Saves the file link in the "File Link" column
✅ Makes files viewable by anyone with the link
✅ Better error handling

## Troubleshooting:

If files still don't appear:

1. **Check your sheet headers** - Make sure row 1 has exactly:
   - Timestamp | Name | Email | Phone | ZipCode | Message | File Link

2. **Check Google Drive** - Look for a folder called "Phoenix Uploads" in your Drive

3. **Check the browser console** - Press F12, go to Console tab, submit a form, and look for any errors

4. **Test without a file first** - Submit the form without uploading a PDF. If that works, the issue is with file handling.

## File Size Limit:
Google Apps Script has a 50MB limit for file uploads. PDFs should work fine as long as they're under this limit.
