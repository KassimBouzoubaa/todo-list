import React from 'react'

const Delete = ({onClick}) => {
  return (
    <div className='btn-delete-pl'>
        <button
        className='btn-delete'
        type='submit'
        onClick={onClick}
      >
        Tout supprimer
      </button>
        </div>
  )
}

export default Delete