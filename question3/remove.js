const fs = require('fs');
const path = require('path');


if (fs.existsSync("Logs")) {
    fs.readdir("Logs", (err, files) => {

        for (const file of files) {

            const filePath = path.join("Logs", file);
            fs.unlink(filePath, err => {

                if (err) throw err;
            });

            console.log(`delete files...${file}`);
        }

        fs.rmdirSync("Logs");
    });
}