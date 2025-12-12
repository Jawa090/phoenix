# Google Apps Script - Auto-Create Headers

## Updated Script with Automatic Header Creation

Replace your Google Apps Script with this version that automatically creates the headers:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // Check if headers exist, if not create them
    var headers = ["Timestamp", "Name", "Email", "Phone", "ZipCode", "Message", "File Link"];
    var firstRow = sheet.getRange(1, 1, 1, headers.length).getValues()[0];
    
    // If first row is empty or doesn't match headers, set headers
    var needsHeaders = firstRow.every(cell => cell === "") || 
                       firstRow[0] !== "Timestamp";
    
    if (needsHeaders) {
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      // Format header row
      sheet.getRange(1, 1, 1, headers.length)
        .setFontWeight("bold")
        .setBackground("#f3f3f3");
    }
    
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

## What's New:

✅ **Automatically creates headers** if they don't exist
✅ Headers are: Timestamp, Name, Email, Phone, ZipCode, Message, File Link
✅ Header row is **bold** and has a light gray background
✅ You don't need to manually add headers anymore!

## How to Update:

1. Go to your Google Sheet
2. Click **Extensions** → **Apps Script**
3. **Delete all existing code**
4. **Paste the code above**
5. Click **Save** (💾 icon)
6. Click **Deploy** → **Manage deployments**
7. Click the ✏️ (Edit) icon
8. Change **Version** to "New version"
9. Click **Deploy**

## That's It!

Now when the first form is submitted, the headers will be created automatically!

You can even delete all content in your sheet and start fresh - the headers will be recreated on the next submission.
