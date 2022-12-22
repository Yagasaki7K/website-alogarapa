import styled from 'styled-components'
import Colors from '../utils/Colors'

const AddPetButtonDetails = styled.div`
    .firstButton {
        background: #fff;
        width: 50px;
        height: 50px;
        color: ${Colors.primary};
        position: fixed;
        bottom: 50px;
        right: 50px;
        z-index: 99;
        padding: 13px 15px 15px 15px;
        border-radius: 10px; 
        font-size: 18px;

        :hover {
            transition: 1s;
            background: #ccc;
        }
    }
`

export default AddPetButtonDetails