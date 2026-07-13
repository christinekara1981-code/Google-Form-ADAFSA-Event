const SPREADSHEET_ID = "";
const SHEET_NAME = "Master Database";

function doPost(e) {
  try {
    const payload = parsePayload_(e);
    const sheet = getResponseSheet_();
    const headers = getHeaders_(sheet, payload);
    const row = headers.map((header) => payload[header] || "");

    sheet.appendRow(row);

    return json_({
      ok: true,
      message: "Saved"
    });
  } catch (error) {
    return json_({
      ok: false,
      message: error.message
    });
  }
}

function parsePayload_(e) {
  if (!e || !e.postData || !e.postData.contents) {
    throw new Error("No form data received.");
  }

  return JSON.parse(e.postData.contents);
}

function getResponseSheet_() {
  const spreadsheet = SPREADSHEET_ID
    ? SpreadsheetApp.openById(SPREADSHEET_ID)
    : SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
  }

  return sheet;
}

function getHeaders_(sheet, payload) {
  const payloadHeaders = Object.keys(payload);
  const lastColumn = Math.max(sheet.getLastColumn(), 1);
  const existingHeaders = sheet
    .getRange(1, 1, 1, lastColumn)
    .getValues()[0]
    .filter(String);

  if (existingHeaders.length === 0) {
    sheet.getRange(1, 1, 1, payloadHeaders.length).setValues([payloadHeaders]);
    sheet.setFrozenRows(1);
    return payloadHeaders;
  }

  const newHeaders = payloadHeaders.filter((header) => !existingHeaders.includes(header));
  if (newHeaders.length > 0) {
    sheet
      .getRange(1, existingHeaders.length + 1, 1, newHeaders.length)
      .setValues([newHeaders]);
  }

  return existingHeaders.concat(newHeaders);
}

function json_(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
