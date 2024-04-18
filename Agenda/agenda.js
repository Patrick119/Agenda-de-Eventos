const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.static('public')); // Asumiendo que index.html está en una carpeta llamada 'public'

