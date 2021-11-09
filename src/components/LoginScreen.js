import NavigatorMenu from './NavigatorMenu'
import LoginScreenDetails from './LoginScreenDetails'

const LoginScreen = () => {
    return (
        <>
            <NavigatorMenu>
                <div className="NavMenu">
                    <a href="/">
                        <img src="/images/logo.png"/>
                    </a>

                    <a href="/">Sobre AlôGarapa!</a>
                    <a href="/">Cadastre seu Restaurante</a>
                    <a href="/">Contato</a>
                    <button>Entrar ou cadastrar</button>
                </div>
            </NavigatorMenu>
            
            <LoginScreenDetails>
                <div className="Content">
                    <h2>Encontre um caldo de cana <br/> Próximo de você!</h2>
                </div>
            </LoginScreenDetails>
        </>
    )
}

export default LoginScreen
