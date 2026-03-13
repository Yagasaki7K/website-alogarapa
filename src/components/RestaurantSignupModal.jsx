import React, { useMemo, useState } from 'react'

const INITIAL_FORM = {
  restaurante: '',
  responsavel: '',
  telefone: '',
  endereco: '',
  bairro: '',
  website: '',
  instagram: '',
  horario: '',
  descricao: '',
  observacoes: ''
}

const normalizeUrl = (value) => {
  if (!value) return ''
  if (value.startsWith('http://') || value.startsWith('https://')) return value
  return `https://${value}`
}

const RestaurantSignupModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({ type: 'idle', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const isVisible = useMemo(() => isOpen, [isOpen])

  if (!isVisible) return null

  const validate = () => {
    const nextErrors = {}
    if (!formData.restaurante.trim()) nextErrors.restaurante = 'Informe o nome do restaurante.'
    if (!formData.responsavel.trim()) nextErrors.responsavel = 'Informe o nome do responsável.'
    if (!formData.telefone.trim()) nextErrors.telefone = 'Informe o telefone/WhatsApp.'
    if (!formData.endereco.trim()) nextErrors.endereco = 'Informe o endereço.'

    const website = normalizeUrl(formData.website.trim())
    if (formData.website.trim()) {
      try {
        new URL(website)
      } catch {
        nextErrors.website = 'Digite uma URL válida.'
      }
    }

    if (!formData.website.trim() && !formData.instagram.trim()) {
      nextErrors.contato = 'Informe website ou Instagram para contato adicional.'
    }

    setErrors(nextErrors)
    return { valid: Object.keys(nextErrors).length === 0, website }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (isSubmitting) return

    const { valid, website } = validate()
    if (!valid) return

    setIsSubmitting(true)
    setStatus({ type: 'loading', message: 'Enviando cadastro...' })

    try {
      const payload = {
        ...formData,
        website,
        telefone: formData.telefone.trim(),
        instagram: formData.instagram.trim(),
        endereco: formData.endereco.trim(),
        bairro: formData.bairro.trim(),
        descricao: formData.descricao.trim(),
        observacoes: formData.observacoes.trim(),
        horario: formData.horario.trim()
      }

      const response = await fetch('/api/restaurant-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || 'Falha ao enviar o cadastro.')
      }

      setStatus({ type: 'success', message: 'Cadastro enviado com sucesso para análise.' })
      setTimeout(() => {
        setFormData(INITIAL_FORM)
        setErrors({})
        onClose()
      }, 1100)
    } catch (error) {
      setStatus({ type: 'error', message: error.message })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="modal-card" onClick={(event) => event.stopPropagation()}>
        <button className="close-modal" onClick={onClose} aria-label="Fechar modal">×</button>
        <h2>Cadastre seu restaurante</h2>
        <p>Preencha os dados abaixo para enviar seu local para moderação.</p>

        <form className="signup-form" onSubmit={handleSubmit}>
          {[
            ['restaurante', 'Nome do restaurante *'],
            ['responsavel', 'Nome do responsável *'],
            ['telefone', 'Telefone / WhatsApp *'],
            ['endereco', 'Endereço *'],
            ['bairro', 'Bairro'],
            ['website', 'Website'],
            ['instagram', 'Instagram'],
            ['horario', 'Horário de funcionamento']
          ].map(([key, label]) => (
            <label key={key}>
              <span>{label}</span>
              <input
                name={key}
                value={formData[key]}
                onChange={(event) => setFormData((prev) => ({ ...prev, [key]: event.target.value }))}
                className={errors[key] ? 'invalid' : ''}
              />
              {errors[key] && <small>{errors[key]}</small>}
            </label>
          ))}

          <label>
            <span>Descrição do local</span>
            <textarea
              rows={3}
              value={formData.descricao}
              onChange={(event) => setFormData((prev) => ({ ...prev, descricao: event.target.value }))}
            />
          </label>

          <label>
            <span>Observações</span>
            <textarea
              rows={2}
              value={formData.observacoes}
              onChange={(event) => setFormData((prev) => ({ ...prev, observacoes: event.target.value }))}
            />
          </label>

          {errors.contato && <small className="form-error-block">{errors.contato}</small>}
          {status.type !== 'idle' && <p className={`status-message ${status.type}`}>{status.message}</p>}

          <button disabled={isSubmitting} type="submit">
            {isSubmitting ? 'Enviando...' : 'Enviar cadastro'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default RestaurantSignupModal
