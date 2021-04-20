const request = require('request');

const imageUris = require('./image-uris');

const logger = require('./logger');

// const INTERVAL:number = 6e4; // 1 minute
const PREVIEW_WIDTH = 350;
const INTERVAL = 15 * 60 * 1000; // 15 minutes
// const INTERVAL:number = 4.32e7; // 12 hours
const WAKEUP_TIME = 7;

main();

function main(){
  run(true);
  //start the loop
}


function run(firstRun){
  let date, hours;
  date = getMtnDate();
  hours = date.getHours();
  console.log(`firstRun: ${firstRun}`);
  console.log(new Date().toISOString());
  if(firstRun === true || hours >= WAKEUP_TIME){
    wake(firstRun || hours === WAKEUP_TIME);
    if(firstRun){
      firstRun = false;
    }
  }else{
    console.log('Sleeping...');
    if(!firstRun) firstRun = true;
  }
  setTimeout(()=>{
    run(firstRun);
  }, INTERVAL);
}

function wake(firstCache){
  let uris, promises, randomUri, allUris;
  console.log(`First cache: ${firstCache}`);
  // uris = getAllImageUris();
  uris = [];
  promises = uris.map(uri=>getImage(uri));
    
  // add the main website html
  promises.push(getWebsite());
  // get a random image
  randomUri = getRandomImageUri();
  console.log(`Selected URI: ${randomUri}`);
  promises.push(getImage(randomUri));

  if(firstCache){
    // cache previews
    allUris = getAllImageUris();
    allUris.forEach(imgUri => {
      promises.push(getImage(imgUri, PREVIEW_WIDTH));
    });
  }

  Promise.all(promises)
    .then(resArr=>{
      console.log(
        resArr.map(res=>
          `${res.statusCode}:${res.uri}`
        ).join('\n')
      );
    }).then(()=>{
      console.log('done.');
    });
}

function getRandomImageUri(){
  let uris, randIdx;
  uris = getAllImageUris();
  randIdx = Math.floor( Math.random()*uris.length );
  return uris[randIdx];
}

function getWebsite(){
  return new Promise((resolve, reject)=>{
    let uri;
    uri = 'https://janicechan.design';
    request({
      uri,
      strictSSL: false,
    }, (err, resp)=>{
      if(err) return reject(err);
      resolve({
        uri,
        statusCode: resp.statusCode
      });
    });
  });
}

function getImage(uri, width){
  return new Promise((resolve, reject)=>{
    let options, qs;
    qs = {};
    if(width){
      qs.width = width;
    }
    options = {
      method: 'GET',
      json: true,
      uri,
      qs,
      strictSSL: false,
    };
    request(options, (err, resp, body)=>{
      if(err) return reject(err);
      resolve({
        uri,
        statusCode: resp.statusCode
      });
    });
  });
}

function getAllImageUris(){
  let allUris;
  allUris = [];
  Object.keys(imageUris).forEach(key=>{
    if(Array.isArray(imageUris[key])){
      allUris.push(...imageUris[key]);
    }else{
      allUris.push(imageUris[key]);
    }
  });
  return allUris;
}

function getMtnDate(){
  let date, mtnDate, utc;
  date = new Date();
  // utc = date.getTime() + (date.getTimezoneOffset() * 6e4);
  // mtnDate = new Date(utc + (36e5*(-6)));
  return date;
}
