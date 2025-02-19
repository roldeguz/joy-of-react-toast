import React, { createContext, useState, useCallback } from "react"

import useEscapeKey from "../../hooks/useEscapeKey"

export const ToastContext = createContext()

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  const handleEscape = useCallback(() => {
    setToasts([])
  }, [])

  useEscapeKey(handleEscape)

  function createToast(message, variant) {
    const nextToasts = [...toasts, { id: crypto.randomUUID(), message, variant }]

    setToasts(nextToasts)
  }

  function dismissToast(id) {
    const nextToasts = toasts.filter(filter => {
      return filter.id !== id
    })

    setToasts(nextToasts)
  }

  const value = {
    toasts,
    createToast,
    dismissToast
  }

  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
}

export default ToastProvider
