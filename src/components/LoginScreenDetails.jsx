import styled from 'styled-components'

const NavigatorMenu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('/src/images/background.jpg');
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

    .content {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin-top: 0rem;

        @media (max-width: 1366px) {
            margin-top: -15rem;
        }
        
        .content-box {
            h2 {
                font-size: 4rem;
                color: #e5e5e5;
            }

            button {
                border: none;
                border-radius: 15px;
                background: #aeaa46;
                color: #e5e5e5;
                text-transform: uppercase;
                font-size: 16px;
                font-weight: bold;
                margin-top: 20px;
                padding: 10px 150px;
                cursor: pointer;

                :hover {
                    transition: 2s;
                    background: #8f8b2b;
                }
            }
        }
    }
`

export default NavigatorMenu
