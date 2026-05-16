const https = require('https');
const fs = require("fs");

const options = { 
    hostname: "en.wikipedia.org",
    port: 443,
    path: "/wiki/Cher",
    method: "GET",
    headers: {
        "User-Agent": "MyNodeApp/1.0 (learning project)"
     }
};

const request = https.request(options, (res) => {
    let resContent = "";
    res.setEncoding("UTF-8");
    res.on("data", (chunk) => {
        console.log("---chunk:", chunk.length);
        resContent += chunk;
    });

    res.on("end", () => {
        fs.writeFile("newfile.html", resContent, (err) => {
            if (err)    {
                throw err;
            }
            console.log("file downloaded");
    });

});

});

request.end();