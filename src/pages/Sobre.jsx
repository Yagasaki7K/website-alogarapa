import SobreDetails from '../components/SobreDetails'
import Logo from '../images/logo.png'

const Sobre = () => {
    return (
        <SobreDetails>
            <img src={Logo}/>

            <div className="content">
                <h2>Sobre o AlôGarapa!</h2>
                <p>Nós do AlôGarapa, somos um serviço de aplicativo web que visa compartilhar informações e localidade sobre estabelecimentos que oferecem o tão amado, caldo de cana em seus cardápios. Atualmente mantido pela equipe da Kalify Inc, o AloGarapa é rápido, fácil e simples de se utilizar.</p>
                
                <h2>Como funciona?</h2>
                <p>Para utilizar o AloGarapa, não é necessário se cadastrar no site. Ao entrar na nossa plataforma, você verá restaurantes cadastrados com seus respectivos telefones e a localidade de onde se encontram, dessa maneira, você conseguirá localizar um próximo de você e também, ao clicar sobre o restaurante selecionado, você consegue entrar em contato com o restaurante ou estabelecimento diretamente através do Whatsapp.</p>

                <h2>Sou dono de um negócio, como me cadastrar?</h2>
                <p>Você pode enviar um e-mail para a <a href="mailto:kalifyinc@gmail.com"></a> ou acessar os três links disponíveis em nosso sistema, sendo eles "Contato", "Cadastrar restaurante" e o botão de [+] no canto inferior direito, além de claro, você poderá tirar dúvidas também de outras seções da nossa plataforma.</p>

                <h2 id="developer">Sou desenvolvedor e quero apoiar o projeto</h2>
                <p>Você poderá acessar nosso <a href="https://github.com/Yagasaki7k/website-alogarapa" target="_blank">repositório no Github</a> e enviar um pull request com a alteração que você fez, nossa equipe irá analisar e em seguida subirá a para a brench de produção. Você também pode participar de outros projetos como FindYourPet e Web Essentials que pertencem ao grupo da Kalify Inc através de <a href="https://discord.gg/CFhzRE6ztp">nosso Discord</a>.</p>

                <div className="backtoHome">
                    <a href="/dashboard">Voltar ao Início</a>       
                </div>                        
            </div>

            <div className="copyright">
                <i>
                © 2018 - {new Date().getFullYear()} - Kalify Inc |
                © {new Date().getFullYear()} - AlôGarapa</i>
            </div>
        </SobreDetails>
    )
}

export default Sobre