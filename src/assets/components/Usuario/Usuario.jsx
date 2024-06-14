import React from 'react'
const users =[
    {
        Empresa: 'AMBIENTE LIVING',
        Contratacion: '12/12/2021',
        Salario: '50.000.000',
        Nombre: 'Juan Camilo Yepes',
        Correo: 'kamilo_35@hotmail.com'
    }
]

const Usuario = () => {
  return (
    <section>
        {
            users.map(user=>{
            <div key={user}>
                <h2 className='empresa'>{user.Empresa}</h2>
                <p className='contrato'>{user.Contratacion}</p>
                <p className='salario'>{user.Salario}</p>
                <p className='nombre'>{user.Nombre}</p>
                <p className='email'>{user.Correo}</p>
            </div>
            })
        }
    </section>
  )
}

export default Usuario