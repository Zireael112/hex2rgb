import React, { useState } from 'react'
import './Convert.css';

export default function Convert() {
  const [rgb, setRgb] = useState('')

  function hex2rgb(c) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(c);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : 'Ошибка!';
  }

  const handleSubmit = e => {
    if (e.target.value.length === 7) {
        const result = hex2rgb(e.target.value)
        console.log(result)
        if (result === 'Ошибка!') {
            setRgb('Ошибка!')
            document.querySelector(".color-rgb").innerText = 'Ошибка!'
            return
        } else {
            console.log(result)
            const {r, g, b} = result
            setRgb(`rgb(${r}, ${g}, ${b})`)
            return
        }
    } else {
        document.querySelector(".color-rgb").innerText = ''
    }
  }

  return (
    <div className='bg' style={{backgroundColor: rgb}}>
        <div className='modal'>
            <form id={'color-form'} onChange={handleSubmit}>
                <input type='text' id={'hex-color'} name='hex'/>
                <div className='color-rgb'>{rgb}</div>
            </form>
        </div>
    </div>
  )
}
