import React from 'react'
import Card from './Card'

export default function SearchList({filteredPersons}) {

    const filtered = filteredPersons.map(person => <Card key={person.id} person={person}/>)

  return (
    <div className='flex'>
      {filtered}
    </div>
  )
}
