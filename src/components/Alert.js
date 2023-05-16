import React from 'react'

export default function Alert(props) {
    function capitalize(word){
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }
  return (
   props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show my-0`}role="alert">
        <b>{capitalize(props.alert.type)}</b>{props.alert.msg}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}
