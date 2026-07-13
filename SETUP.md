# Green Motors x ADAFSA Event Form

## Files

- `index.html` is the customer-facing form.
- `green-motors-logo.png` is the Green Motors logo used by the form.
- `google_apps_script.gs` is the Google Apps Script code that saves submissions into a Google Sheet.

## Connect It To Google Sheets

1. Create or open the master Google Sheet where responses should be saved.
2. Copy the Sheet ID from the sheet URL.
3. Open `google_apps_script.gs` and paste the Sheet ID here:

```js
const SPREADSHEET_ID = "PASTE_MASTER_SHEET_ID_HERE";
```

4. In the master Google Sheet, go to **Extensions > Apps Script**.
5. Paste the contents of `google_apps_script.gs`.
6. Save the project.
7. Click **Deploy > New deployment**.
8. Select **Web app**.
9. Set **Execute as** to **Me**.
10. Set **Who has access** to **Anyone**.
11. Deploy and copy the Web app URL.
12. Open `index.html` and paste that URL here:

```js
const GOOGLE_SCRIPT_URL = "PASTE_WEB_APP_URL_HERE";
```

After that, every submitted form entry will be added to the `Master Database` sheet tab automatically.

## Put It On GitHub

1. Create a GitHub repository.
2. Upload all files from this folder.
3. Go to **Settings > Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the branch and root folder.
6. Save.

GitHub will provide the public form link after the Pages deployment finishes.
