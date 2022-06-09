import styled from 'styled-components'

const NavigatorMenu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('https://github.com/Yagasaki7K/website-alogarapa/blob/main/src/images/background.jpg');
    background-repeat: no-repeat;
    height: 88.7vh;
    width: 100%;
    overflow: hidden;

    @media (min-width: 1370px) {
        height: 92.3vh;
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

            a {
                border: none;
                border-radius: 15px;
                background: #aeaa46;
                color: #e5e5e5;
                text-transform: uppercase;
                font-size: 16px;
                font-weight: bold;
                padding: 5px 150px;
                cursor: pointer;
                text-decoration: none;

                :hover {
                    transition: 2s;
                    background: #8f8b2b;
                }
            }
        }
    }
`

export default NavigatorMenu
