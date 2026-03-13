import React from 'react'
import PetButtonDetails from './AddButtonDetails'

const AddPetButton = ({ onClick }) => {
  return (
    <PetButtonDetails>
      <button type="button" onClick={onClick} className="firstButton" aria-label="Cadastre seu restaurante">
        <i className="uil uil-plus" />
      </button>
    </PetButtonDetails>
  )
}

export default AddPetButton
