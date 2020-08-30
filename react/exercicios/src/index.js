import React from 'react'
import ReactDom from 'react-dom'

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDom.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva">
            <Filho nome="Pedro"/>
            <Filho nome="Paulo"/>
            <Filho nome="Carla"/>
        </Pai>
    </div>
    , document.getElementById('root'))

//$('<h1>').html('React 1') mesma coisa

