const fs = require("node:fs");
const path = require("node:path");
const { DatabaseSync } = require("node:sqlite");
const env = require("../config/env");

fs.mkdirSync(path.dirname(env.dbFile), { recursive: true });

const db = new DatabaseSync(env.dbFile);
db.exec("PRAGMA foreign_keys = ON;");

module.exports = db;
