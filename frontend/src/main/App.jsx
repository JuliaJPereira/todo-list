import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import Menu from '../template/menu'
import Routes from './routes'
import '../template/custom.css'

export default props => (
  <div className='container'>
   <Menu />
   <Routes />
  </div>
)