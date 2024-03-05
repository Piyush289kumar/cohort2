const express = require('express')

const app = express()

let fs = require('fs')
const path = require('path');
const directory = './';

app.get('/', (req, res) => {

    fs.readdir(directory, (err, files) => {
        files.forEach(file => {
            // get the details of the file 
            let fileDetails = fs.lstatSync(path.resolve(directory, file));
            // check if the file is directory 
            if (fileDetails.isDirectory()) {
            } else {
                // res.writeHead(200, { 'Content-Type': 'text/plain' });
                // res.write(file);
                res.send(file);

                console.log('File: ' + file);
            }



        });
    });


});



app.listen(3000)