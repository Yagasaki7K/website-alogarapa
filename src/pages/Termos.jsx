import { Link } from 'react-router-dom'
import LegalPageDetails from '../components/LegalPageDetails'

const Termos = () => (
  <LegalPageDetails>
    <div className="box">
      <h1>Termos de Uso</h1>
      <p>Estes termos regem o uso do Garapa Finder para descoberta de locais de sucos e garapa próximos de você.</p>
      <h2>1. Introdução</h2>
      <p>O site ajuda usuários a encontrarem estabelecimentos por mapa e geolocalização, de forma simples e prática.</p>
      <h2>2. Uso do Serviço</h2>
      <p>Você pode usar o mapa para buscar estabelecimentos próximos e consultar informações exibidas em cada ponto.</p>
      <h2>3. Cadastro de Restaurantes</h2>
      <p>Usuários podem sugerir locais. As informações podem ser revisadas antes da publicação e podem conter imprecisões enviadas por terceiros.</p>
      <h2>4. Limitação de Responsabilidade</h2>
      <p>Atuamos como plataforma de descoberta. Não somos responsáveis pelos serviços prestados pelos estabelecimentos listados.</p>
      <h2>5. Alterações nos Termos</h2>
      <p>Podemos atualizar estes termos quando necessário para refletir melhorias no serviço.</p>
      <h2>6. Contato</h2>
      <p>Em caso de dúvidas, use os canais de contato disponíveis no site.</p>
      <div className="actions">
        <Link to="/">Voltar para início</Link>
        <Link to="/privacidade">Política de Privacidade</Link>
      </div>
    </div>
  </LegalPageDetails>
)

export default Termos
