import styled from 'styled-components'

const DashboardDetails = styled.div`

background: #94913c;
height: 91.7vh;

.garapa-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
        margin-left: 5px;
        margin-bottom: 30px;

        a {
            text-decoration: none;
            font-weight: 400;
            margin-top: 20px;
            color: #fff;
        }
    }

    .advice {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px 0px;
        background: #ffffff;
        border: none;
        font-weight: 500;
        text-decoration: none;
        outline: none;
        color: #aeaa46;

        :hover {
            color: #94913c;
            background: #eee;
            transition: 2s;
        }
    }

    .garapa-list-item {
        width: 320px;
        background: #fff;
        height: 130px;
        color: #aeaa46;
        border-radius: 15px;
        display: flex;

        img {
            padding-top: 10px;
            padding-left: 10px;
            border-radius: 15px;
            width: 130px;
            height: 120px;
        }

        h3, p {
            margin: 10px 0px 10px 10px;
        }

        p {
            font-size: 14px;
        }

        i {
            font-size: 14px;
        }
    }

    footer {
        display: flex;
        justify-content: center;
        margin-left: 100px;
        
        .footer-content {
            margin-right: 200px;
            display: flex;
            flex-direction: column;

            h2 {
                margin-bottom: -5px;
                color: #fff;
            }
            
            a {
                font-weight: 300;
                margin-top: 10px;
                color: #fff;
            }

            i {
                font-size: 14px;
            }
        }
    }

    .copyright {
        margin-top: 20px;
        display: flex;
        justify-content: center;
        color: #fff;
    }

    hr {
        margin-top: 20px;
        width: 50%;
    }
`

export default DashboardDetails