
// import React, { useState } from 'react'

// export const Chatassist = () => {

//     const [inputUser, cambiarInputUser] = useState('')
//     const [inputInc, cambiarInputInc] = useState('')

//     let showHour = new Date();
//     let displayTodayDate = showHour.getHours() + ':' + showHour.getMinutes();



//     const handleSubmit = (e) => {
//         e.preventDefault();
//     }

//     const handleInputUser = (e) => {
//         cambiarInputUser(e.target.value)
//     }

//     const handleInputInc = (e) => {
//         cambiarInputInc(e.target.value)
//     }

//     const saludo = () => {
//         if (displayTodayDate > getHours(12) && displayTodayDate > getMinutes(59)) {
//             console.log('Buenas tardes');
//         } else {
//             console.log('Buen dia');
//         }

//     }

//     return (
//         <>
//             <form onSubmit={handleSubmit} className='formulario'>
//                 <div>
//                     <input
//                         type="text"
//                         name='user'
//                         placeholder='Ingresa nombre del usuario'
//                         id='user'
//                         value={inputUser}
//                         onChange={handleInputUser}
//                     />
//                 </div>

//                 <div>
//                     <input
//                         type="text"
//                         name='inc'
//                         placeholder='INC123456'
//                         id='inc'
//                         value={inputInc}
//                         onChange={handleInputInc}

//                     />
//                 </div>



//                 <input type="text" value={displayTodayDate} />

//                 <button type='submit'>Enviar</button>


//             </form>

//             <form action="">
//                 <h1>Resultados:</h1>
//                 <p>{saludo} hola</p>
//             </form>

//         </>
//     )


// }

import React from 'react'
import AgregarTexto from './components/AgregarTexto'

export const Chatassist = () => {
    return (
        <>
            <h1>Bienvenido!!</h1>
            <AgregarTexto ></AgregarTexto>
        </>

    )
}

















// Buen dia Sra Carolina mi nombre es Oscar tovar Del area IT LAN
// ¿Como esta?, me comunico contigo por el INC2165458.

// - funcion date
// - 2 input tiene que ser en mayus y numeros
// -conicional para señor o sra
