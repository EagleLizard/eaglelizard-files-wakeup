const { promisify } = require('util');
const path = require('path');
const fs = require('fs');
const mkdir = promisify(fs.mkdir);
const access = promisify(fs.access);
const stat = promisify(fs.stat);

const { DateTime } = require('luxon');
const LOG_DIR = 'logs';
const LOG_PATH = path.resolve(__dirname, LOG_DIR);

module.exports = {
  info,
};

async function info(string) {
  let logDirExists;
  logDirExists = await dirExists(LOG_PATH);
  if(!logDirExists) {
    await mkdir(LOG_PATH);
  }
  // check if today's logfile exists
  console.log(getLogFileName());
}

async function dirExists(dirPath) {
  try {
    await stat(dirPath);
  } catch(e) {
    return false;
  }
  return true;
}

async function fileExists(filePath) {
  try {
    await access(filePath);
  } catch(e) {
    return false;
  }
  return true;
}

function getLogFileName() {
  let dateTime, format;
  format = "y'_'MM'_'dd'";
  dateTime = DateTime.local();
  return `${dateTime.toFormat(format)}.log`;
}
