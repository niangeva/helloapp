import React, {useEffect, useState} from 'react'

const NavBg = (props) => {
    const [toolbar, setToolbar] = useState(false);

    
    useEffect(_ => {
        const changeBackground = _ => { 
          if (window.pageYOffset > 300) {
            setToolbar(true)
          } else {
            setToolbar(false)
          }
        }
        window.addEventListener('scroll', changeBackground)
        return _ => {
          window.removeEventListener('scroll', changeBackground)
        }
      }, [])


    return (
        <div className={toolbar ? 'nav-bg nav-bg-active': 'nav-bg'} >{props.children}</div> 
    )
}

export default NavBg

