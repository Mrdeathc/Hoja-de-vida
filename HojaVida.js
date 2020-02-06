const express = require('express'),
    app = express(),
    path = require('path');

    app.use(express.static(path.join(__dirname, '/public')));

    app.get('/', (peticion, respuesta)=>{
        respuesta.sendFile(`${__dirname}/views/index.html`);
    });

    app.route('/descripcion').get((peticion, respuesta)=>{
        respuesta.sendFile(`${__dirname}/views/carlos.html`)
    });
    app.route('/exp').get((peticion, respuesta)=>{
        respuesta.sendFile(`${__dirname}/views/experiencia.html`)
    });
    app.route('/est').get((peticion, respuesta)=>{
        respuesta.sendFile(`${__dirname}/views/estudios.html`)
    });
    app.route('/apt').get((peticion, respuesta)=>{
        respuesta.sendFile(`${__dirname}/views/aptitudes.html`)
    });
    app.route('/cont').get((peticion, respuesta)=>{
        respuesta.sendFile(`${__dirname}/views/contacto.html`)
    });

    app.listen(8080);
    console.log('Corriendo...')