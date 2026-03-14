import styled from "styled-components";

const SobreDetails = styled.main`
    min-height: 100vh;
    background: linear-gradient(180deg, #f8faf7 0%, #edf5ec 100%);
    color: #213023;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 2rem 1rem;

    img {
        width: clamp(180px, 30vw, 280px);
        margin: 0.5rem 0 1rem;
    }

    .content {
        width: min(860px, 100%);
        background: #fff;
        border: 1px solid #dbe6db;
        border-radius: 16px;
        padding: 1.4rem;
        box-shadow: 0 10px 24px rgba(41, 57, 41, 0.1);

        a {
            color: #2b5a37;
        }

        h2 {
            margin-top: 1rem;
            margin-bottom: 0.5rem;
            font-size: 1.15rem;
        }

        p {
            color: #425744;
            line-height: 1.6;
            font-size: 0.95rem;
        }
    }

    .about-title {
        display: flex;
        align-items: center;
        gap: 0.55rem;
    }

    .content .about-icon {
        width: 38px;
        height: 38px;
        margin: 1rem 0 0.5rem;
        border-radius: 10px;
        box-shadow: 0 8px 18px rgba(26, 52, 33, 0.16);
    }

    .about-title h2 {
        margin: 1rem 0 0.5rem;
    }

    .backtoHome {
        display: flex;
        justify-content: center;
        margin: 1.4rem 0 0.3rem;
        font-size: 0.95rem;
        font-weight: 700;
    }

    .copyright {
        margin-top: 1rem;
        color: #6c806e;
        text-align: center;
        font-size: 0.85rem;
    }
`;

export default SobreDetails;
