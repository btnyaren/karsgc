const {
  onDocumentCreated,
  onDocumentUpdated,
} = require("firebase-functions/v2/firestore");
const { defineSecret } = require("firebase-functions/params");
const { google } = require("googleapis");
const { setGlobalOptions } = require("firebase-functions/v2");


setGlobalOptions({ region: "europe-west4" });

const CLIENT_EMAIL = defineSecret("GOOGLE_SHEETS_CLIENT_EMAIL");
const PRIVATE_KEY = defineSecret("GOOGLE_SHEETS_PRIVATE_KEY");
const SHEET_ID = defineSecret("GOOGLE_SHEET_ID");
const SHEET_NAME = defineSecret("GOOGLE_SHEET_NAME");


function getSheets() {
  const auth = new google.auth.JWT({
    email: CLIENT_EMAIL.value(),
    key: (PRIVATE_KEY.value() || "").replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  return google.sheets({ version: "v4", auth });
}


// Her rolün sekmesi + kolonları
const SCHEMAS = {
  delegate: {
    tab: "Delege",
    cols: [
      { header: "applicationId", get: (_d, id) => id },
      { header: "type", get: (d) => d.type || "" },
      { header: "fullName", get: (d) => d.fullName || "" },
      { header: "email", get: (d) => d.email || "" },
      { header: "phone", get: (d) => d.phone || "" },
      { header: "school", get: (d) => d.school || "" },
      { header: "grade", get: (d) => d.grade || "" },
      { header: "firstCommitteePreference", get: (d) => d.firstCommitteePreference || "" },
      { header: "secondCommitteePreference", get: (d) => d.secondCommitteePreference || "" },
      { header: "thirdCommitteePreference", get: (d) => d.thirdCommitteePreference || "" },
      { header: "experiences", get: (d) => d.experiences || "" },
      { header: "intro", get: (d) => d.intro || "" },
      { header: "reason", get: (d) => d.reason || "" },
      { header: "expectation", get: (d) => d.expectation || "" },
      { header: "disorder", get: (d) => d.disorder || "" },
      { header: "state", get: (d) => d.state ?? "submitted" },
      { header: "payment", get: (d) => d.payment ?? "" },
      { header: "country", get: (d) => d.country || "" },
      { header: "committee", get: (d) => d.committee || "" },
      { header: "mailPosition", get: (d) => d.mailPosition || "" },
    ],
  },

  chair: {
    tab: "Divan",
    cols: [
      { header: "applicationId", get: (_d, id) => id },
      { header: "type", get: (d) => d.type || "" },
      { header: "fullName", get: (d) => d.fullName || "" },
      { header: "email", get: (d) => d.email || "" },
      { header: "phone", get: (d) => d.phone || "" },
      { header: "school", get: (d) => d.school || "" },
      { header: "grade", get: (d) => d.grade || "" },
      { header: "firstCommitteePreference", get: (d) => d.firstCommitteePreference || "" },
      { header: "secondCommitteePreference", get: (d) => d.secondCommitteePreference || "" },
      { header: "thirdCommitteePreference", get: (d) => d.thirdCommitteePreference || "" },
      { header: "experiences", get: (d) => d.experiences || "" },
      { header: "intro", get: (d) => d.intro || "" },
      { header: "proficiency1", get: (d) => d.proficiency1 || "" },
      { header: "proficiency2", get: (d) => d.proficiency2 || "" },
      { header: "proficiency3", get: (d) => d.proficiency3 || "" },
      { header: "proficiency4", get: (d) => d.proficiency4 || "" },
      { header: "state", get: (d) => d.state ?? "submitted" },
      { header: "payment", get: (d) => d.payment ?? "" },
      { header: "country", get: (d) => d.country || "" },
      { header: "committee", get: (d) => d.committee || "" },
      { header: "mailPosition", get: (d) => d.mailPosition || "" },
    ],
  },
};

function normalizePosition(position) {
  const key = String(position || "").trim().toLowerCase();
  switch (key) {
    case "delege":
    case "delegate":
      return "delegate";
    case "komite divanı":
    case "komite divan":
    case "chair":
      return "chair";
    default:
      return key;
  }
}

function getSchema(type) {
  const key = normalizePosition(type);
  return SCHEMAS[key] || null;
}

function getSourceData(doc) {
  const application = doc.application || {};
  const form = application.form || {};

  return {
    type: application.position || "",
    fullName: form.fullName || "",
    email: application.email || doc.email || "",
    phone: form.phone || "",
    school: form.school || "",
    grade: form.grade || "",
    firstCommitteePreference: form.firstPreference || "",
    secondCommitteePreference: form.secondPreference || "",
    thirdCommitteePreference: form.thirdPreference || "",
    experiences: form.experiences || "",
    intro: form.intro || "",
    reason: form.reason || "",
    expectation: form.expectation || "",
    disorder: form.disorder || "",
    proficiency1: form.proficiency1 || "",
    proficiency2: form.proficiency2 || "",
    proficiency3: form.proficiency3 || "",
    proficiency4: form.proficiency4 || "",
    state: application.state ?? "submitted",
    payment: application.payment ?? "",
    country: application.country || "",
    committee: application.committee || "",
    mailPosition: application.mailPosition || "",
    delegationName: application.delegationName || "",
    headName: application.headName || "",
    headEmail: application.headEmail || "",
    headPhone: application.headPhone || "",
    headSchool: application.headSchool || "",
    numberOfDelegates: application.numberOfDelegates ?? "",
    members: application.members || [],
  };
}

function colToA1(n) {
  let s = "";
  while (n > 0) {
    const m = (n - 1) % 26;
    s = String.fromCharCode(65 + m) + s;
    n = Math.floor((n - 1) / 26);
  }
  return s;
}


async function ensureHeaderRow(sheets, tab, headers) {
  // Sadece A1’e bak: doğru header var mı?
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: SHEET_ID.value(),
    range: `${tab}!A1`,
  });

  // eslint-disable-next-line max-len
  const a1 = (res.data.values && res.data.values[0] && res.data.values[0][0]) ?
      String(res.data.values[0][0]).trim() :
      "";

  if (a1 !== headers[0]) {
    const lastCol = colToA1(headers.length);
    await sheets.spreadsheets.values.update({
      spreadsheetId: SHEET_ID.value(),
      range: `${tab}!A1:${lastCol}1`,
      valueInputOption: "RAW",
      requestBody: { values: [headers] },
    });
  }
}


async function getHeaderMap(sheets, tab) {
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: SHEET_ID.value(),
    range: `${tab}!1:1`,
  });

  // eslint-disable-next-line max-len
  const headers = (res.data.values && res.data.values[0]) ? res.data.values[0] : [];
  const map = new Map();
  headers.forEach((h, i) => {
    const key = String(h || "").trim();
    if (key) map.set(key, i + 1); // 1-based
  });
  return map;
}

async function appendUserRow(doc, id) {
  if (!doc || !doc.application) return;

  const schema = getSchema(doc.application.position);
  if (!schema) return;
  const sheets = getSheets();
  const headers = schema.cols.map((c) => c.header);
  await ensureHeaderRow(sheets, schema.tab, headers);

  const source = getSourceData(doc);
  const row = schema.cols.map((c) => c.get(source, id));

  await sheets.spreadsheets.values.append({
    spreadsheetId: SHEET_ID.value(),
    range: `${schema.tab}!A1`,
    valueInputOption: "USER_ENTERED",
    requestBody: { values: [row] },
  });
}

// 1️⃣ Yeni başvuru gelince satır ekle
exports.onApplicationCreate = onDocumentCreated(
    {
      document: "users/{id}",
      secrets: [CLIENT_EMAIL, PRIVATE_KEY, SHEET_ID, SHEET_NAME],
    },
    async (event) => {
      const data = event.data ? event.data.data() : null;
      if (!data || !data.application) return;
      await appendUserRow(data, event.params.id);
    },
);

// 2️⃣ Değişen alanları ilgili sekmede güncelle
exports.onApplicationUpdate = onDocumentUpdated(
    {
      document: "users/{id}",
      secrets: [CLIENT_EMAIL, PRIVATE_KEY, SHEET_ID, SHEET_NAME],
    },
    async (event) => {
      const before = event.data ? event.data.before.data() : null;
      const after = event.data ? event.data.after.data() : null;
      if (!after || !after.application) return;

      const beforeSource = getSourceData(before || {});
      const afterSource = getSourceData(after);

      if (!before || !before.application) {
        await appendUserRow(after, event.params.id);
        return;
      }

      const beforeType = normalizePosition(beforeSource.type);
      const afterType = normalizePosition(afterSource.type);
      if (beforeType !== afterType) {
        await appendUserRow(after, event.params.id);
        return;
      }

      const schema = getSchema(after.application.position);
      if (!schema) return;
      const sheets = getSheets();
      const headerMap = await getHeaderMap(sheets, schema.tab);

      const idCol = headerMap.get("applicationId") || 1;
      const idColA1 = colToA1(idCol);

      const idColValues = await sheets.spreadsheets.values.get({
        spreadsheetId: SHEET_ID.value(),
        range: `${schema.tab}!${idColA1}:${idColA1}`,
      });

      const values = idColValues.data.values || [];
      const idx = values.findIndex((r) => r[0] === event.params.id);
      if (idx < 0) {
        await appendUserRow(after, event.params.id);
        return;
      }

      const rowNumber = idx + 1;

      const updates = schema.cols
          .map((col) => ({
            header: col.header,
            beforeValue: beforeSource[col.header],
            afterValue: afterSource[col.header],
          }))
          .filter((item) => item.header !== "applicationId" && item.beforeValue !== item.afterValue)
          .map((item) => {
            const col = headerMap.get(item.header);
            if (!col) return null;
            return {
              range: `${schema.tab}!${colToA1(col)}${rowNumber}`,
              values: [[item.afterValue ?? ""]],
            };
          })
          .filter(Boolean);

      if (updates.length === 0) return;

      await sheets.spreadsheets.values.batchUpdate({
        spreadsheetId: SHEET_ID.value(),
        requestBody: {
          valueInputOption: "USER_ENTERED",
          data: updates.map((u) => ({
            range: u.range,
            values: u.values,
          })),
        },
      });
    },
);


