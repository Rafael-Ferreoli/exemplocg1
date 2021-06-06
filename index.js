const express = require('express')
const app = express()
const path = require('path')
// aponta para o servidor publico
app.use(express.static(__dirname + '/public'))
// aponta para pasta build
app.use('/build/', express.static(path.join(__dirname, 'node_modules/three/build')));
// // aponta para pasta texturas
app.use('/texturas/', express.static(path.join(__dirname, 'texturas')));
app.use('/jsm/', express.static(path.join(__dirname, 'node_modules/three/examples/jsm')));
//
app.listen(3000, () =>
    console.log('Visit http://127.0.0.1:3000')
    );
