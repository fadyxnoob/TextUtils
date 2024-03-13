import React from 'react'

export default function Alert(props) {
    const capitalize = (w) =>{
        const lower = w.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <>
        {props.alert && ( // Check if props.alert exists before rendering
          <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.type)}</strong>{props.alert.message}.
          </div>
        )}
      </>
      
    )
}
