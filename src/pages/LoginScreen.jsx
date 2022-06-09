import NavigatorHomeDetails from '../components/NavigatorHomeDetails'
import LoginScreenDetails from '../components/LoginScreenDetails'

import Logo from '../images/logo.png'

const LoginScreen = () => {

    return (
        <>
            <NavigatorHomeDetails>
                <div className="NavMenu">
                    <a href="/">
                        <img src={Logo}/>
                    </a>

                    <a href="/sobre">Sobre AlôGarapa!</a>
                    <a href="mailto:kalifyinc@gmail.com">Cadastre seu Restaurante</a>
                    <a href="mailto:kalifyinc@gmail.com">Contato</a>
                </div>
            </NavigatorHomeDetails>
            
            <LoginScreenDetails>
                <div className="content">
                    <div className="content-box">
                        <h2>Encontre um caldo de cana <br/> Próximo de você!</h2>
                        <a className="button" href="/dashboard">Acessar</a>
                    </div>
                </div>
            </LoginScreenDetails>
        </>
    )
}

export default LoginScreen