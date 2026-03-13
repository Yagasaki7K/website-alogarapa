const requiredFields = ['restaurante', 'responsavel', 'telefone', 'endereco']

const sanitize = (value = '') => String(value).trim().replace(/\s+/g, ' ')

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido.' })
  }

  const body = req.body || {}
  const normalized = {
    restaurante: sanitize(body.restaurante),
    responsavel: sanitize(body.responsavel),
    telefone: sanitize(body.telefone),
    endereco: sanitize(body.endereco),
    bairro: sanitize(body.bairro),
    website: sanitize(body.website),
    instagram: sanitize(body.instagram),
    horario: sanitize(body.horario),
    descricao: sanitize(body.descricao),
    observacoes: sanitize(body.observacoes)
  }

  for (const field of requiredFields) {
    if (!normalized[field]) {
      return res.status(400).json({ message: `Campo obrigatório ausente: ${field}.` })
    }
  }

  if (!normalized.website && !normalized.instagram) {
    return res.status(400).json({ message: 'Informe ao menos website ou Instagram.' })
  }

  if (normalized.website) {
    try {
      new URL(normalized.website)
    } catch {
      return res.status(400).json({ message: 'Website inválido.' })
    }
  }

  const webhookUrl = process.env.DISCORD_WEBHOOK_URL
  if (!webhookUrl) {
    return res.status(500).json({ message: 'Webhook não configurado no servidor.' })
  }

  const discordPayload = {
    username: 'Garapa Finder Bot',
    content: '📥 Novo cadastro de restaurante recebido.',
    embeds: [
      {
        title: normalized.restaurante,
        color: 2664261,
        fields: [
          { name: 'Responsável', value: normalized.responsavel || '-', inline: true },
          { name: 'Telefone', value: normalized.telefone || '-', inline: true },
          { name: 'Endereço', value: normalized.endereco || '-', inline: false },
          { name: 'Bairro', value: normalized.bairro || '-', inline: true },
          { name: 'Website', value: normalized.website || '-', inline: true },
          { name: 'Instagram', value: normalized.instagram || '-', inline: true },
          { name: 'Horário', value: normalized.horario || '-', inline: false },
          { name: 'Descrição', value: normalized.descricao || '-', inline: false },
          { name: 'Observações', value: normalized.observacoes || '-', inline: false }
        ],
        footer: { text: `Enviado em ${new Date().toLocaleString('pt-BR')}` }
      }
    ]
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(discordPayload)
    })

    if (!response.ok) {
      return res.status(502).json({ message: 'Falha ao encaminhar cadastro para moderação.' })
    }

    return res.status(200).json({ message: 'Cadastro enviado com sucesso.' })
  } catch {
    return res.status(500).json({ message: 'Erro interno ao processar cadastro.' })
  }
}
