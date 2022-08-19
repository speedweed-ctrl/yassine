import React from 'react'
import a from './1.jpg'
import aa from './wetransfer_la-famille-de-coeur-logo-design-color-palette_2022-08-17_1330/lo.svg'
const Opener = () => {
  return (
      <div style={{position:'relative',top:'10.3rem'}}>
        <img style={{height:'35rem',width:'100%',filter:"blur(2px)"}} src={a} alt="" />
          <div style={{  position:'relative' ,bottom:'27rem' , left:'3rem', }}>
          <img src={aa} alt="" style={{height:'15rem'}} />
          </div>
      </div>
  )
}

export default Opener