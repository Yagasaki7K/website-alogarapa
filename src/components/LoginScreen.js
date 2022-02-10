import { useEffect, useState } from 'react'
import NavigatorHomeDetails from './NavigatorHomeDetails'
import LoginScreenDetails from './LoginScreenDetails'


const LoginScreen = () => {
    const [username, setUsername] = useState(null)
    
    function handleCredentialResponse(response) {
        const data = jwt_decode(response.credential)
        setUsername(data)

        if (username != null) {
            if (response.type === 'success') {
                window.location.href('/home')
            } else {
                console.log('Login falhou');
                alert('Login falhou, tente novamente!');
                window.location.reload()
            }
        }
    }

    const ActionLoginGoogle = () => {
        google.accounts.id.initialize({
            client_id: "707708876227-3pqn2rfcl6n1konc9rq3ssp184b44o68.apps.googleusercontent.com",
            callback: handleCredentialResponse
        });
        google.accounts.id.renderButton(
            document.getElementById("ActionLoginGoogle"),
            {   
                theme: "outline", 
                size: "large",
                type:"standard",
                shape:"pill",
                theme:"outline",
                text:"signin_with",
                size:"large",
                locale:"pt-BR",
                logo_alignment:"left"
            }
          );
        google.accounts.id.prompt();
    }
    
    useEffect(() => {
        ActionLoginGoogle();
    }, handleCredentialResponse, [])


    return (
        <>
            <head>
                <title>AlôGarapa! | Encontre um caldo de cana próximo de você!</title> 
                <link rel="icon" type="image/png" href="/images/icon.png"/>
                <script src="https://accounts.google.com/gsi/client" async defer></script>
                <script src="https://unpkg.com/jwt-decode/build/jwt-decode.js"></script>
            </head>

            <NavigatorHomeDetails>
                <div className="NavMenu">
                    <a href="/">
                        <img src="/images/logo.png"/>
                    </a>

                    <a href="/sobre">Sobre AlôGarapa!</a>
                    <a href="/seu-restaurante">Cadastre seu Restaurante</a>
                    <a href="/contato">Contato</a>
                    <button id="ActionLoginGoogle" onClick={ActionLoginGoogle}></button>
                </div>
            </NavigatorHomeDetails>
            
            <LoginScreenDetails>
                <div className="Content">
                    <h2>Encontre um caldo de cana <br/> Próximo de você!</h2>
                </div>
            </LoginScreenDetails>
        </>
    )
}

export default LoginScreen
