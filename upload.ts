import { resolve } from "path";
import { rejects } from "assert";

var Client = require('ssh2').Client;
// var conn = new Client();


export const upload = async (
  src,
  dest,
  conn,
) => {
  // let result = await new Promise((resolve, reject)=>{
  //   // fs.readFile('./zhaoolee.txt', (err, data)=>{
  //   //   resolve(data.toString("utf8"))
  //   // })


  // })
  return new Promise((resolve, reject) => {
    conn.sftp((err, sftp) => {
      if (err) reject(err);
      resolve(
        // ()=>{
          // sftp.mkdir(dest,(err)=>{
          //   if(err)
          //   throw err;
          // });
        // sftp.createWriteStream(dest, {
        //   // flags: 'w',
        //   encoding: 'utf8',
        //   mode: 0o666,
        //   autoClose: true
        // })
      sftp.fastPut(src, dest, (err) => {
        // resolve(succeed)
        if (err) {
          // throw err;
          reject(err)
          // reject("fail")
          console.log(reject + err);
        }
        else {
          // resolve("succeed")
          console.log("document upload succeed");

        }
        // conn.end();
        sftp.end();
      })
      
    // }
    )
      
  })

})
  }



//     console.log('Client :: ready');
// conn.sftp(function(err, sftp) {
//         if (err) throw err;
//         sftp.fastPut(src,dest,function(err) {
//                 // console.log("succeed"+i)

//           if (err) {
//               throw err;
//             }
//             else{
//                 console.log("succeed")
//             }
//           conn.end();
//           sftp.end();
//         });
//       });


//       return "success"


// }

