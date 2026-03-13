import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

const PwaInstallContext = createContext(null)

const isStandaloneMode = () =>
  window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone

export const PwaInstallProvider = ({ children }) => {
  const [deferredPrompt, setDeferredPrompt] = useState(null)
  const [isInstallSupported, setIsInstallSupported] = useState(false)
  const [isInstalled, setIsInstalled] = useState(false)

  useEffect(() => {
    setIsInstalled(isStandaloneMode() || localStorage.getItem('alogarapa:pwa-installed') === 'true')

    const onBeforeInstallPrompt = (event) => {
      event.preventDefault()
      setDeferredPrompt(event)
      setIsInstallSupported(true)
    }

    const onInstalled = () => {
      setIsInstalled(true)
      setDeferredPrompt(null)
      setIsInstallSupported(false)
      localStorage.setItem('alogarapa:pwa-installed', 'true')
    }

    window.addEventListener('beforeinstallprompt', onBeforeInstallPrompt)
    window.addEventListener('appinstalled', onInstalled)

    return () => {
      window.removeEventListener('beforeinstallprompt', onBeforeInstallPrompt)
      window.removeEventListener('appinstalled', onInstalled)
    }
  }, [])

  const promptInstall = async () => {
    if (!deferredPrompt) {
      return {
        ok: false,
        reason: 'unsupported',
        message: 'A instalação automática não está disponível neste navegador. Use o menu do navegador e escolha “Instalar app”.'
      }
    }

    deferredPrompt.prompt()
    const choiceResult = await deferredPrompt.userChoice
    const accepted = choiceResult?.outcome === 'accepted'

    if (accepted) {
      setIsInstalled(true)
    }

    setDeferredPrompt(null)
    setIsInstallSupported(false)

    return {
      ok: accepted,
      reason: accepted ? 'accepted' : 'dismissed',
      message: accepted ? 'Instalação iniciada com sucesso.' : 'Você pode instalar depois quando quiser.'
    }
  }

  const value = useMemo(
    () => ({
      promptInstall,
      isInstallSupported,
      isInstalled
    }),
    [isInstallSupported, isInstalled]
  )

  return <PwaInstallContext.Provider value={value}>{children}</PwaInstallContext.Provider>
}

export const usePwaInstall = () => {
  const context = useContext(PwaInstallContext)

  if (!context) {
    throw new Error('usePwaInstall deve ser usado dentro de PwaInstallProvider')
  }

  return context
}
