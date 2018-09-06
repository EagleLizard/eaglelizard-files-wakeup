"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const image_uris_1 = __importDefault(require("./image-uris"));
const request_1 = __importDefault(require("request"));
// const INTERVAL:number = 6e4; // 1 minute
const PREVIEW_WIDTH = 300;
const INTERVAL = 9e5; // 15 minutes
const WAKEUP_TIME = 6;
main();
function main() {
    run(true);
    //start the loop
}
function run(firstRun) {
    let date, hours;
    date = getMtnDate();
    hours = date.getHours();
    console.log(`firstRun: ${firstRun}`);
    if (hours >= WAKEUP_TIME) {
        wake(firstRun || hours === WAKEUP_TIME);
        if (firstRun) {
            firstRun = false;
        }
    }
    else {
        if (!firstRun)
            firstRun = true;
    }
    setTimeout(() => {
        run(firstRun);
    }, INTERVAL);
}
function wake(firstCache = true) {
    let uris, promises;
    uris = firstCache
        ? getAllImageUris()
        : [getRandomImageUri()];
    promises = uris.map(uri => getImage(uri));
    if (firstCache) {
        // cache previews
        promises = [
            ...promises,
            ...uris.map(uri => getImage(uri, PREVIEW_WIDTH))
        ];
    }
    Promise.all(promises)
        .then(resArr => {
        console.log(resArr.map(res => `${res.statusCode}:${res.uri}`).join('\n'));
    }).then(() => {
        console.log('done.');
    });
}
function getRandomImageUri() {
    let uris, randIdx;
    uris = getAllImageUris();
    randIdx = Math.floor(Math.random() * uris.length);
    return uris[randIdx];
}
function getImage(uri, width) {
    return new Promise((resolve, reject) => {
        let options, qs;
        qs = {};
        if (width) {
            qs.width = width;
        }
        options = {
            method: 'GET',
            json: true,
            uri,
            qs,
        };
        request_1.default(options, (err, resp, body) => {
            if (err)
                return reject(err);
            resolve({
                uri,
                statusCode: resp.statusCode
            });
        });
    });
}
function getAllImageUris() {
    let allUris;
    allUris = [];
    Object.keys(image_uris_1.default).forEach(key => {
        if (Array.isArray(image_uris_1.default[key])) {
            image_uris_1.default[key].forEach((uri) => {
                allUris.push(uri);
            });
        }
        else {
            allUris.push(image_uris_1.default[key]);
        }
    });
    return allUris;
}
function getMtnDate() {
    let date, mtnDate, utc;
    date = new Date();
    // utc = date.getTime() + (date.getTimezoneOffset() * 6e4);
    // mtnDate = new Date(utc + (36e5*(-6)));
    return date;
}
