import React from 'react'
import { Concert_Evenement } from '../Concert_Evenement'
import { Date } from './Date'
import { Heure } from './Heure'
import { Lieu } from './Lieu'

function ProgrammationConcertEvenement() {
  return (
   <div>
    <div className='Programmmation'>
      <h2>Programmation des concerts</h2>
      <ul className='Ulprogrammation'>
        {Concert_Evenement.map((product) => (
          <li className='ListeProgrammation' key={product.id}>
           <p> {product.Autor}</p>
           <p> {product.date}</p>
           <p> {product.heure}</p>
           <p> {product.lieu}</p>
          </li>
        ))}
      </ul>
    </div>
    <div className='InputProgrammation'>
        <div>
            <Lieu/>
        </div>
        <div>
            <Heure/>
        </div>
        <div>
            <Date/>
        </div>
    
    </div>
    </div>
  )
}
export default ProgrammationConcertEvenement