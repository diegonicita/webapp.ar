import React, { useEffect, useRef, useState } from 'react'
import { useStore } from '@nanostores/react'
import { counter } from '../store/store'

export const Github = ({title}) => {
  const miElementoRef = useRef(null)
  const [color, setColor] = useState(undefined)
  const $counter = useStore(counter)

  useEffect(() => {
    const miElemento = miElementoRef.current
    const estilosComputados = window.getComputedStyle(miElemento)
    const colorDelTexto = estilosComputados.color
    // Obtener los componentes R, G y B del color en formato RGB
    const rgbComponents = colorDelTexto.match(/\d+/g)

    // Convertir los componentes a formato hexadecimal
    const colorHex = rgbComponents
      .map((component) => parseInt(component).toString(16).padStart(2, '0'))
      .join('') // Esto mostrará el valor del color en formato RGB, por ejemplo "rgb(59, 130, 246)"
    setColor('#' + colorHex)
    console.log('#' + colorHex)
  }, [])

  return (
    <>
      <div ref={miElementoRef} className="text-accent">
      </div>
      <div className='flex flex-row gap-1 p-2'>
      <svg
        id="Layer_1"
        data-name="Layer 1"
        viewBox="0 0 72.32 70.39"
        width={25}        
        version="1.1"
      >
        <defs id="defs124"></defs>
        <title id="title117">github</title>
        <path
          d="M153.06,165.36c.64-.14,1.29-.27,1.93-.42a24.36,24.36,0,0,0,8.45-3.6,15.62,15.62,0,0,0,6.71-10,19.36,19.36,0,0,0,.33-4.81,20.23,20.23,0,0,0-1.18-6.05,16,16,0,0,0-3.26-5.34.37.37,0,0,1-.08-.29,7.92,7.92,0,0,0,.82-2.73,12.21,12.21,0,0,0-.32-5.17,8.43,8.43,0,0,0-1.16-2.44.46.46,0,0,0-.42-.21,14.48,14.48,0,0,0-8.46,3,22.12,22.12,0,0,0-1.85,1.64.29.29,0,0,1-.36.07,22.21,22.21,0,0,0-4.63-1,34,34,0,0,0-6.46-.15,22.81,22.81,0,0,0-6.39,1.22.29.29,0,0,1-.37-.1,14.78,14.78,0,0,0-8-4.44,22.51,22.51,0,0,0-2.32-.24.43.43,0,0,0-.31.16,8.05,8.05,0,0,0-1.45,3.51,11.48,11.48,0,0,0,.38,5.67,15.54,15.54,0,0,0,.65,1.48c-.26.29-.56.61-.84,1a16.8,16.8,0,0,0-3.71,8.31,19.94,19.94,0,0,0-.21,4.82,15.51,15.51,0,0,0,5.37,10.83,21.78,21.78,0,0,0,8.59,4.47c1.11.31,2.25.53,3.37.79l.1,0c-.16.47-.35.92-.47,1.39a12.79,12.79,0,0,0-.32,3.14.44.44,0,0,1-.36.48,10.55,10.55,0,0,1-7.62-.59,7.71,7.71,0,0,1-3-2.82,7.34,7.34,0,0,0-4.92-3.49,3.38,3.38,0,0,0-1.84.08c-.52.18-.64.52-.29,1a3.6,3.6,0,0,0,.8.76,9.57,9.57,0,0,1,3.09,3.62,13.64,13.64,0,0,1,.7,1.44,8.88,8.88,0,0,0,3.58,4.17,10.85,10.85,0,0,0,6.53,1.69c1.07,0,2.13-.24,3.2-.36l.15,0v.37c0,1.52,0,3,0,4.56a3.07,3.07,0,0,1-2.12,2.8,2,2,0,0,1-1.17,0,36.2,36.2,0,0,1-23.4-25.28,34.89,34.89,0,0,1-1.1-10.18,36.17,36.17,0,0,1,22.74-32.26,34.6,34.6,0,0,1,7.54-2.1,36.33,36.33,0,0,1,8.59-.36,36.19,36.19,0,0,1,32.41,27.52,34.86,34.86,0,0,1,1,9.81,36.16,36.16,0,0,1-22,31.89c-.76.33-1.54.58-2.3.89a2.29,2.29,0,0,1-2.64-.68,3.27,3.27,0,0,1-.85-2.23c0-3.64,0-7.29,0-10.93a10.62,10.62,0,0,0-.32-3.08C153.38,166.11,153.21,165.74,153.06,165.36Z"
          transform="translate(-109.33 -113.2)"
          id="path119"
          style={{ fill: color ? color : '#ffffff' }}
        ></path>
      </svg>
      <div>{title}</div>
      </div>
    </>
  )
}
