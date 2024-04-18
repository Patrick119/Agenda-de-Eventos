const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.static('public')); // Asumiendo que index.html está en una carpeta llamada 'public'

app.post('/eventos', (req, res) => {
    const { fecha, hora, titulo, descripcion } = req.body;
    const directorio = path.join(__dirname, 'agenda', fecha);
    const archivo = path.join(directorio, `${hora}.txt`);

    if (!fs.existsSync(directorio)) {
        fs.mkdirSync(directorio, { recursive: true });
    }

    if (fs.existsSync(archivo)) {
        return res.status(400).json({ message: 'El evento ya existe.' });
    }

    fs.writeFileSync(archivo, `${titulo}\n${descripcion}`);
    res.json({ message: 'Evento creado con éxito.' });
});
