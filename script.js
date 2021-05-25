"use strict";
let sleep = (time) => new Promise(resolve => setTimeout(resolve, time));
let upload = document.querySelector(".upload");
let uploadBtn = document.querySelector(".upload__button");
uploadBtn.addEventListener("click", async () => {
    upload.classList.add("uploading");
    await sleep(3000);
    upload.classList.add("uploaded");
    await sleep(2000);
    upload.classList.remove("uploading");
    upload.classList.add("uploaded-after");
    await sleep(1000);
    upload.className = "upload";
    upload_file()
});

function upload_file(){
    document.getElementById("rnd_str").value = parseInt(10000000000000000*Math.random()).toString()
    document.getElementById("submit1").click()
}
