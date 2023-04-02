import React from 'react'

export default function Button(props) {
    const upcase=()=>{
        settext(text.toUpperCase())
    }
  return (
<button type="button" className="btn btn-danger mx-2 my-2" onClick={props.handel}>{props.text}</button>

  )
}
