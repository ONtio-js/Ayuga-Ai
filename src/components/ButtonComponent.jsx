import React from 'react'

const ButtonComponent = ({title,style,onclick,type}) => {
  return (
    <button className={style} type={type} onClick={onclick}>
        {title}
    </button>
  )
}

export default ButtonComponent