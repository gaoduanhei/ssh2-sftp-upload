##ssh2、sftp密钥上传文件
1、解决Error: (SSH) Channel open failure: open failed问题
异步同时打开10个时会造成该问题使用promise await解决
[https://github.com/yongkangchen/remote-sync/issues/98](https://github.com/yongkangchen/remote-sync/issues/98)
2、上传文件若遇到报错可参考
[https://f-e-d.club/topic/record-a-bugs-found-experience-use-an-ssh2-stream-error-sftp-upload-file.article](https://f-e-d.club/topic/record-a-bugs-found-experience-use-an-ssh2-stream-error-sftp-upload-file.article)
3、ssh2官方文档：[https://www.npmjs.com/package/ssh2](https://www.npmjs.com/package/ssh2)
4、sftpStream：ssh2配合sftpStream进行如有相关需要自行查阅sftpStream[https://github.com/mscdex/ssh2-streams/blob/master/SFTPStream.md](https://github.com/mscdex/ssh2-streams/blob/master/SFTPStream.md)
5、注意：上传文件时src和dest都需为绝对路径