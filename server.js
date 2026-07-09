// SAST bait: command injection, code injection, hardcoded secret
const cp = require('child_process');
const express = require('express');
const app = express();

app.get('/run', (req, res) => {
  cp.exec('ls ' + req.query.dir);      // CWE-78 OS command injection
  eval(req.query.code);                // CWE-95 code injection
  res.send('ok');
});

const AWS_ACCESS_KEY_ID = "AKIAIOSFODNN7EXAMPLE";          // hardcoded key
const AWS_SECRET = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"; // hardcoded secret
app.listen(3000);
