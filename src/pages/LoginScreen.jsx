import NavigatorHomeDetails from '../components/NavigatorHomeDetails'
import LoginScreenDetails from '../components/LoginScreenDetails'

import Logo from '../images/logo.png'

function redirectHome() {
    window.location.href="/home"
}

const LoginScreen = () => {

    return (
        <>
            <NavigatorHomeDetails>
                <div className="NavMenu">
                    <a href="/">
                        <img src={Logo}/>
                    </a>

                    <a href="/sobre">Sobre AlôGarapa!</a>
                    <a href="/seu-restaurante">Cadastre seu Restaurante</a>
                    <a href="/contato">Contato</a>
                </div>
            </NavigatorHomeDetails>
            
            <LoginScreenDetails>
                <div className="content">
                    <div className="content-box">
                        <h2>Encontre um caldo de cana <br/> Próximo de você!</h2>
                        <button className="button" onClick={redirectHome}>Acessar</button>
                    </div>
                </div>
            </LoginScreenDetails>
        </>
    )
}

export default LoginScreen