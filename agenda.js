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
app.get('/eventos', (req, res) => {
    const eventosDir = path.join(__dirname, 'agenda');
    let eventos = [];

    if (fs.existsSync(eventosDir)) {
        fs.readdirSync(eventosDir).forEach(fecha => {
            const fechaDir = path.join(eventosDir, fecha);
            fs.readdirSync(fechaDir).forEach(archivo => {
                const contenido = fs.readFileSync(path.join(fechaDir, archivo), 'utf8');
                const lineas = contenido.split('\n');
                const titulo = lineas[0];
                const descripcion = lineas.slice(1).join(' '); // Junta el resto de líneas para la descripción
                eventos.push({
                    fecha,
                    hora: archivo.slice(0, -4).replace('-', ':'),
                    titulo,
                    descripcion
                });
            });
        });
    }

    res.json(eventos);
});

app.delete('/eventos/:fecha/:hora', (req, res) => {
    const { fecha, hora } = req.params;
    const archivo = path.join(__dirname, 'agenda', fecha, `${hora.replace(':', '-')}.txt`);
    if (fs.existsSync(archivo)) {
        fs.unlinkSync(archivo);
        res.json({ message: 'Evento eliminado con éxito.' });
    } else {
        res.status(404).json({ message: 'Evento no encontrado.' });
    }
});
app.put('/eventos/:fecha/:hora', (req, res) => {
    const { fecha, hora } = req.params;
    const { titulo, descripcion } = req.body;
    const archivo = path.join(__dirname, 'agenda', fecha, `${hora.replace(':', '-')}.txt`);
    if (fs.existsSync(archivo)) {
        fs.writeFileSync(archivo, `${titulo}\n${descripcion}`);
        res.json({ message: 'Evento actualizado con éxito.' });
    } else {
        res.status(404).json({ message: 'Evento no encontrado.' });
    }
});

app.get('/eventos/:fecha/:hora', (req, res) => {
    const { fecha, hora } = req.params;
    const archivo = path.join(__dirname, 'agenda', fecha, `${hora.replace(':', '-')}.txt`);
    if (fs.existsSync(archivo)) {
        const contenido = fs.readFileSync(archivo, 'utf8');
        const [titulo, ...descripcionArr] = contenido.split('\n');
        const descripcion = descripcionArr.join('\n');
        res.json({ titulo, descripcion });
    } else {
        res.status(404).json({ message: 'Evento no encontrado.' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
