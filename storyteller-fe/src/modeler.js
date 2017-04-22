require('babel-register')({
    only: /react-modeler-canvas/
})

import React from 'react';
import ReactDOM from 'react-dom';

import {Canvas} from 'react-modeler-canvas';
console.log(Canvas);

ReactDOM.render(
    <Canvas />,
    document.getElementById('modeler_root')
)