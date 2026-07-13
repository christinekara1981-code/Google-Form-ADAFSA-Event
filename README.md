# Green Motors x ADAFSA Event Form

This folder is ready to upload to GitHub Pages.

## Files

- `index.html` is the public event form.
- `green-motors-logo.png` is the form logo.
- `google_apps_script.gs` saves submitted form data to Google Sheets.
- `SETUP.md` has step-by-step setup instructions.

## Google Sheet Connection

1. Open the master Google Sheet.
2. Copy the Sheet ID from its URL.
3. Paste that ID into `google_apps_script.gs`:

```js
const SPREADSHEET_ID = "PASTE_MASTER_SHEET_ID_HERE";
```

4. Deploy the Apps Script as a web app.
5. Paste the deployed web app URL into `index.html`:

```js
const GOOGLE_SCRIPT_URL = "PASTE_WEB_APP_URL_HERE";
```

Submissions will save into the `Master Database` sheet tab.
