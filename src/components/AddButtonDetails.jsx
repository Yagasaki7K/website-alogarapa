import styled from 'styled-components'

const AddPetButtonDetails = styled.div`
  .firstButton {
    background: #1f5a33;
    width: 52px;
    height: 52px;
    color: #fff;
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 99;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 14px;
    font-size: 20px;
    box-shadow: 0 14px 28px rgba(20, 50, 30, 0.3);
    cursor: pointer;

    :hover {
      transform: translateY(-2px);
    }
  }

  @media (max-width: 768px) {
    .firstButton {
      width: 48px;
      height: 48px;
      right: 12px;
      bottom: 12px;
    }
  }
`

export default AddPetButtonDetails
