import React,  { Suspense }  from 'react'

const About = React.lazy(() => import('./About'));
const Contact = React.lazy(() => import('./Contact'));

function Home(){
    return(
        <div>
        <h1> This is Home Page</h1>
        <Suspense fallback={<div>Loading...</div>}>
        <section>
          <About />
          <Contact/> 
        </section>
      </Suspense>
    </div>
    )
}
 
export default Home;