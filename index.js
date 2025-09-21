// import express from 'express';
const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send({ hi: 'there, I am now online.' });
});

app.listen(PORT, (req, res) => {
  console.log(`Server listening on port ${PORT}`);
});
