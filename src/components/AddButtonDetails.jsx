import styled from 'styled-components'

const AddPetButtonDetails = styled.div`
  .firstButton {
    background: #1f5a33;
    width: 52px;
    height: 52px;
    color: #fff;
    position: fixed;
    bottom: 24px;
    right: 24px;
    z-index: 99;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 14px;
    font-size: 20px;
    box-shadow: 0 14px 28px rgba(20, 50, 30, 0.3);

    :hover {
      transition: 0.2s;
      transform: translateY(-2px);
    }
  }
`

export default AddPetButtonDetails
