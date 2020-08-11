
export const mkdir = async (
  dest,
  conn,
) => {
 
  return new Promise((resolve, reject) => {
    conn.sftp((err, sftp) => {
      if (err) reject(err);
      resolve(
          sftp.mkdir(dest,
            (err)=>{
            if(err){
            // throw err;
            // reject(err)
            console.log("reject"+err)
        }
        else{
        console.log("mkdir success")

        }

            sftp.end();
          }
          )
      )
        })
    })}
