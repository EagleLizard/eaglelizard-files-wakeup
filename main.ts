
import imageUris from './image-uris';
import request, { Response } from 'request';

// const INTERVAL:number = 6e4; // 1 minute
const PREVIEW_WIDTH = 300;
const INTERVAL:number = 9e5; // 15 minutes

main();

function main(): void{
  run(true);
  //start the loop
}

function run(firstRun: boolean){
  let date, hours;
  date = getMtnDate();
  hours = date.getHours();
  console.log(`firstRun: ${firstRun}`);
  if(hours >= 6){
    wake(firstRun || hours === 6);
    if(firstRun){
      firstRun = false;
    }
  }else{
    if(!firstRun) firstRun = true;
  }
  setTimeout(()=>{
    run(firstRun);
  }, INTERVAL);
}

function wake(firstCache:boolean = true){
  let uris: string[], promises: Promise<any>[];
  uris = firstCache 
    ? getAllImageUris()
    : [getRandomImageUri()];

  promises = uris.map(uri=>getImage(uri));

  if(firstCache){
    // cache previews
    promises = [
      ...promises,
      ...uris.map(uri=>getImage(uri, PREVIEW_WIDTH))
    ];
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

function getRandomImageUri(): string{
  let uris, randIdx;
  uris = getAllImageUris();
  randIdx = Math.floor( Math.random()*uris.length );
  return uris[randIdx];
}

function getImage(uri:string, width?: number){
  return new Promise((resolve, reject)=>{
    let options: any, qs: any;
    qs = {};
    if(width){
      qs.width = width;
    }
    options = {
      method: 'GET',
      json: true,
      uri,
      qs,
    };
    request(options, (err:any, resp:Response, body:any)=>{
      if(err) return reject(err);
      resolve({
        uri,
        statusCode: resp.statusCode
      });
    });
  });
}

function getAllImageUris(){
  let allUris: string[];
  allUris = [];
  Object.keys(imageUris).forEach(key=>{
    if(Array.isArray(imageUris[key])){
      imageUris[key].forEach((uri:string)=>{
        allUris.push(uri);
      });
    }else{
      allUris.push(imageUris[key]);
    }
  });
  return allUris;
}

function getMtnDate(){
  let date: Date, mtnDate: Date, utc: number;
  date = new Date();
  // utc = date.getTime() + (date.getTimezoneOffset() * 6e4);
  // mtnDate = new Date(utc + (36e5*(-6)));
  return date;
}
