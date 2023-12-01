import React from 'react'
import { useAppContext } from '../hooks/useAppContext'
import Form from '../components/form/Form'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

export function Contact() {
  const { state } = useAppContext()

  return (
    <main className={`${state.theme ? 'dark' : ''} main`}>
      <section className='contact-section'>
        <h2>¿Necesitas más información?</h2>
        <p>Envia tu consulta y te contactaremos</p>
        <Form />
      </section>
    </main>
  )
}