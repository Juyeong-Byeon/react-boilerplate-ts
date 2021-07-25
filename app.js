const express= require("express");
const app=express();
const path=require("path");
const port=process.env.PORT||3000;

app.listen(port,()=>{
    console.log(`${port} port 에서 서버를 열었습니다.`);
})

const DIST_DIR=path.join(__dirname,"dist");
const HTML_FILE=path.join(DIST_DIR,"index.html");

app.use(express.json());
//아래의 두 폴더에 있는 파일들은 static 하게 접근가능한 파일들로 지정
app.use(express.static("public"));
app.use(express.static("dist"));

app.get("/",function (request,result){
    // "/" root path로 접근하면 index.html 파일을 전송해준다.
    // error 가 있을 경우 500 code와 함께 error 를 전송해준다.
    result.sendFile(HTML_FILE,()=>{
        if(err){
            res.status(500).sent(err);
        }
    })
})