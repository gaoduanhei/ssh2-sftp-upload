// import { upload } from "./upload";

import { upload } from "./upload";
import { resolve } from "dns";
import { rejects } from "assert";
import { mkdir } from "./midir";

const { SFTP_OPEN_MODE } = require('ssh2');

var Client = require('ssh2').Client;
 
var conn = new Client();

conn.on('ready', async function() {

for (let i=0;i<14;i++){
    // console.log(i);
const src  = `/Users/gaoduanhei/workspace/key/tytest${i}.txt`
const dest  = `/test/${i}/tytest${i}.txt`
// const dest  = `/Users/maoguanpeng/chinese/tytest${i}.txt`



const makedest  = `/octus/env/kingfisher-staging/test/${i}`





await  mkdir(makedest, conn)
await upload(src,dest,conn)


}
}).connect({
  host: 'xxx.xxx.xxxx.xxx',
  port: 22,
  username: 'username',
privateKey: require('fs').readFileSync('your private key path')

})