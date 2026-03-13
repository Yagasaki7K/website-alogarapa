import { Link } from 'react-router-dom'
import LegalPageDetails from '../components/LegalPageDetails'

const Privacidade = () => (
  <LegalPageDetails>
    <div className="box">
      <h1>Política de Privacidade</h1>
      <p>Levamos sua privacidade a sério e explicamos aqui como os dados são tratados no Garapa Finder.</p>
      <h2>1. Dados coletados</h2>
      <p>Podemos coletar localização aproximada (quando autorizada), dados enviados no cadastro de restaurantes e dados técnicos básicos de navegação.</p>
      <h2>2. Uso da localização</h2>
      <p>A localização é usada apenas para mostrar estabelecimentos próximos e depende de permissão do navegador.</p>
      <h2>3. Compartilhamento</h2>
      <p>Dados do formulário de cadastro são usados para moderação interna. Não vendemos dados pessoais a terceiros.</p>
      <h2>4. Cookies e armazenamento local</h2>
      <p>Utilizamos localStorage para preferências e controle de avisos, como a sugestão de instalação PWA.</p>
      <h2>5. Segurança</h2>
      <p>Aplicamos medidas razoáveis para proteger informações, sem prometer segurança absoluta.</p>
      <h2>6. Alterações nesta política</h2>
      <p>Esta política pode ser atualizada periodicamente.</p>
      <h2>7. Contato</h2>
      <p>Para dúvidas sobre privacidade, utilize os canais oficiais do site.</p>
      <div className="actions">
        <Link to="/">Voltar para início</Link>
        <Link to="/termos">Termos de Uso</Link>
      </div>
    </div>
  </LegalPageDetails>
)

export default Privacidade
