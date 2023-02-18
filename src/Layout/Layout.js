import React from 'react'
import { Header } from '../Components'

function Layout({children}) {
  return (
    <>
      <Header />

      <main>
        {children}
      </main>

      {/* <Footer /> */}
    </>
  )
}

export default Layout