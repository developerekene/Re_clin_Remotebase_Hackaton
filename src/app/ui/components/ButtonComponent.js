import React from 'react'

const ButtonComponent = (props) => {
  return (
    <div>
      <button className={props.mainButton} onClick={props.press}></button>
    </div>
  )
}

export default ButtonComponent