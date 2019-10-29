import React, { useEffect } from 'react'

function OutsideClickNotifier(callback, refComponent) {
  useEffect(() => {
    function handleClick(event) {
      refComponent.current
        && !refComponent.current.contains(event.target)
        && callback(event)
    }

    if (refComponent.current) {
      document.addEventListener('click', handleClick)
    }

    // on umount, remove the listener
    return () => document.removeEventListener('click', handleClick)
  }, [callback, refComponent])
}

export default OutsideClickNotifier
