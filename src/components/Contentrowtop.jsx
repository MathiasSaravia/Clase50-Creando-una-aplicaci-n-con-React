import React from 'react'
import { Contentrowmovies } from './Contentrowmovies'
import { Contentlastmovie } from './Contentlastmovie'
import { Contentgenres } from './Contentgenres'

export const Contentrowtop = () => {
  return (
       <div class="container-fluid">
       <div class="d-sm-flex align-items-center justify-content-between mb-4">
         <h1 class="h3 mb-0 text-gray-800">App Dashboard</h1>
       </div>
     
       {/* <!-- Content Row Movies--> */}
      <Contentrowmovies/>
     {/*   <!-- End movies in Data Base --> */}
       
 
       {/* <!-- Content Row Last Movie in Data Base --> */}
       <div class="row">
         {/* <!-- Last Movie in DB --> */}
       <Contentlastmovie/>
        {/*  <!-- End content row last movie in Data Base --> */}
 
        {/*  <!-- Genres in DB --> */}
         <Contentgenres/>
       </div>
     </div>
  )
}
