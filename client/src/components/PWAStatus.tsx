import { useState, useEffect } from 'react'

export default function PWAStatus() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)
  const [isInstallable, setIsInstallable] = useState(false)
  const [isInstalled, setIsInstalled] = useState(false)
  const [isStandalone, setIsStandalone] = useState(false)

  useEffect(() => {
    // Check if the app is already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true)
      setIsStandalone(true)
    }

    // Listen for the beforeinstallprompt event
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setIsInstallable(true)
      console.log('PWA install prompt available')
    })

    // Listen for app installed event
    window.addEventListener('appinstalled', () => {
      setIsInstalled(true)
      setIsInstallable(false)
      console.log('PWA was installed')
    })

    return () => {
      window.removeEventListener('beforeinstallprompt', () => {})
      window.removeEventListener('appinstalled', () => {})
    }
  }, [])

  const handleInstallClick = async () => {
    if (!deferredPrompt) return

    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice

    if (outcome === 'accepted') {
      console.log('User accepted the install prompt')
    } else {
      console.log('User dismissed the install prompt')
    }

    setDeferredPrompt(null)
    setIsInstallable(false)
  }

  if (isInstalled) {
    return (
      <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg">
        ✅ App is installed!
      </div>
    )
  }

  if (isInstallable) {
    return (
      <div className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg">
        <button
          onClick={handleInstallClick}
          className="bg-white text-blue-500 px-3 py-1 rounded text-sm font-medium hover:bg-gray-100 transition-colors"
        >
          Install App
        </button>
      </div>
    )
  }

  return (
    <div className="fixed bottom-4 right-4 bg-gray-500 text-white px-4 py-2 rounded-lg shadow-lg text-sm">
      PWA Status: {isStandalone ? 'Standalone' : 'Browser'}
    </div>
  )
}
