import styled from 'styled-components'

const NavigatorMenu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('/images/background.jpg');
    background-repeat: no-repeat;
    height: 88vh;
    width: 100%;
    overflow: hidden;

    @media (min-width: 1370px) {
        height: 92vh;
        background-size: cover;

        h2 {
            margin-top: -300px;
        }
    }

    .Content {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        
        h2 {
            margin-top: -200px;
            font-size: 4rem;
            color: #414143;
        }
    }
`

export default NavigatorMenu
