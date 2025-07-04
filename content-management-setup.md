# Content Management Setup Guide

## Overview
This guide will help you set up a Google Sheet that allows non-technical staff to update website content without touching code.

## Step 1: Create the Google Sheet

1. **Create a new Google Sheet** with the following structure:

| section | content | last_updated |
|---------|---------|--------------|
| hero_subtitle | Your starting place for living, growing, and thriving in Berkeley's District 5. | 2025-01-15 |
| issue_1_title | Middle Housing Development | 2025-01-15 |
| issue_1_description | Learn about opportunities for middle housing development in District 5, including duplexes, triplexes, and small apartment buildings that can help address our housing shortage. | 2025-01-15 |
| issue_2_title | Ember Alert System | 2025-01-15 |
| issue_2_description | Stay informed about emergency situations in Berkeley through the Ember Alert system, providing real-time notifications about fires, evacuations, and other critical events. | 2025-01-15 |
| issue_3_title | Marina Fees and Services | 2025-01-15 |
| issue_3_description | Information about Berkeley Marina fees, services, and upcoming changes. Learn about boat storage, parking, and recreational opportunities at the marina. | 2025-01-15 |
| contact_phone | 510-981-7150 | 2025-01-15 |
| contact_email | district5@berkeleyca.gov | 2025-01-15 |
| office_hours | Monday to Friday<br>9:00 a.m. - 5:00 p.m.<br>Pacific Time Zone | 2025-01-15 |
| community_idea_1 | "We need more bike lanes on Telegraph Avenue to improve safety for cyclists and pedestrians." | 2025-01-15 |
| community_idea_2 | "More street lighting would make our neighborhood safer for evening walks." | 2025-01-15 |
| community_idea_3 | "A community garden in the vacant lot on College Avenue would be great for the neighborhood." | 2025-01-15 |

## Step 2: Publish the Sheet

1. **Go to File > Share > Publish to web**
2. **Select "Entire Document"** and **"Web page"** format
3. **Click "Publish"**
4. **Copy the URL** that appears

## Step 3: Update the Website Code

1. **Open `script.js`** in your website files
2. **Find this line:**
   ```javascript
   const sheetUrl = 'https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/pub?output=json';
   ```
3. **Replace `YOUR_SHEET_ID`** with your actual sheet ID from the URL
4. **Save the file**

## Step 4: Test the Integration

1. **Open your website** in a browser
2. **Open Developer Tools** (F12)
3. **Check the Console** for any errors
4. **Verify** that content is loading from the sheet

## Available Content Fields

### Hero Section
- `hero_subtitle` - Main subtitle under the title

### Issue Spotlight
- `issue_1_title` - First issue title
- `issue_1_description` - First issue description
- `issue_2_title` - Second issue title
- `issue_2_description` - Second issue description
- `issue_3_title` - Third issue title
- `issue_3_description` - Third issue description

### Contact Information
- `contact_phone` - Office phone number
- `contact_email` - Office email address
- `office_hours` - Office hours (use <br> for line breaks)

### Community Ideas
- `community_idea_1` - First community idea quote
- `community_idea_2` - Second community idea quote
- `community_idea_3` - Third community idea quote

## How to Update Content

1. **Open the Google Sheet**
2. **Find the section** you want to update
3. **Edit the content** in the "content" column
4. **Update the last_updated** timestamp
5. **Save the sheet**
6. **Refresh the website** to see changes

## Adding New Content Fields

To add new editable content areas:

1. **Add a new row** to the Google Sheet
2. **Update the `updateWebsiteContent` function** in `script.js`
3. **Add the corresponding HTML element** with the right selector

## Troubleshooting

### Content Not Updating
- Check that the sheet is published to web
- Verify the sheet URL in the code
- Check browser console for errors
- Ensure the section names match exactly

### CORS Errors
- The sheet must be published to web
- Try using a different browser
- Check that the sheet is publicly accessible

### Performance Issues
- Consider caching the content locally
- Add loading indicators for better UX
- Implement error handling for offline scenarios

## Security Considerations

- The Google Sheet will be publicly accessible
- Don't include sensitive information
- Consider using Google Apps Script for more secure access
- Implement rate limiting if needed

## Advanced Features

### Auto-refresh
Add this to automatically refresh content every 5 minutes:
```javascript
setInterval(loadContentFromGoogleSheet, 5 * 60 * 1000);
```

### Content Versioning
Add a version column to track content changes:
```javascript
if (contentMap.version !== currentVersion) {
    updateWebsiteContent(contentMap);
    currentVersion = contentMap.version;
}
```

### Fallback Content
Keep the original HTML content as fallback if the sheet is unavailable.

## Support

If you need help:
1. Check the browser console for errors
2. Verify the Google Sheet URL
3. Ensure the sheet is published correctly
4. Test with a simple content update first 