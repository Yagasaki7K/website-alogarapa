import styled from 'styled-components'

const NavigatorHomeDetails = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    .NavMenu {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        background: #aeaa46;
        height: 5rem;
        width: 100%;

        img {
            width: 10rem;
            margin-right: 300px;
        }

        a {
            color: #fff;
        }

        button {
            margin-right: 25px;
            border: none;
            width: 200px;
            height: 40px;
            color:  #aeaa46;
            background: transparent;
            font-weight: bold;
            border-radius: 5px;
            cursor: pointer;
        }
    }
`

export default NavigatorHomeDetails
