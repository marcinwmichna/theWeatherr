const express = require("express");
const staticServer = require("serve-static");
const path = require("path");
const serveStatic = require('serve-static');

const app = express();
app.use('/', serveStatic(path.join(__dirname, '/dist')));

const port = process.env.PORT;
app.listen(port);