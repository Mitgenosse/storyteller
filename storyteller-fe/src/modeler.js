require('babel-register')({
    only: /react-modeler-canvas/
})

import React from 'react';
import ReactDOM from 'react-dom';

import {Canvas, PredefinedDrawableShape} from 'react-modeler-canvas';

function onElementDoubleClick(element) {
    console.log(`Element double click for`, element);
}

function onElementContextMenu(element) {
    console.log(`Context menu for`, element);
}

ReactDOM.render(
    <Canvas style={{backgroundColor: '#ddd'}}
        newElementShape={PredefinedDrawableShape.CircleShape}
        onElementDoubleClick={onElementDoubleClick}
        onElementContextMenu={onElementContextMenu}
    />,
    document.getElementById('modeler_root')
)