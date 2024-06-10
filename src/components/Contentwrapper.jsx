import React from 'react'
import { Contentrowtop } from './Contentrowtop'
import { Topbar } from './Topbar'
import { Footer } from './Footer'


export const Contentwrapper = () => {
  return (
    <div id="content-wrapper" class="d-flex flex-column">
      <Topbar/>
      <Contentrowtop/>
      <Footer/>
    </div>
  )
}
