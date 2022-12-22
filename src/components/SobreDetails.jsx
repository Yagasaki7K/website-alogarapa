import styled from 'styled-components'
import Colors from '../utils/Colors'

const SobreDetails = styled.div`
    background: ${Colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img {
        margin-top: 100px;
        width: 400px;
        padding: 20px 0 0 20px;
    }

    .break {
        flex-basis: 100%;
        height: 0;
    }

    .content {
        color: #fff;
        width: 60%;
        margin-top: 20px;

        a {
            color: #fff;
        }

        h2 {
            margin-top: 20px;
            margin-bottom: 10px;
        }
    }

    .backtoHome {
        display: flex;
        justify-content: center;
        margin: 20px 0;
        font-size: 18px;
        font-weight: bold;
    }

    .copyright {
        margin-top: 20px;
        margin-bottom: 20px;
        display: flex;
        justify-content: center;
        color: #fff;
    }


    @media screen and (max-width: 1920px) {
        .copyright {
            margin-bottom: 144px;
        }
    }
`

export default SobreDetails