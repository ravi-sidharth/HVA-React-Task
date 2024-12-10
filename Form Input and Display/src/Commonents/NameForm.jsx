import React from 'react'

function NameForm({name}) {
  return (
    <div>
      {name?`My name is ${name}`:""}
    </div>
  )
}
export default NameForm
