import React, { useContext } from "react"

import Toast from "../Toast"

import styles from "./ToastShelf.module.css"

import { ToastContext } from "../ToastProvider/ToastProvider"

function ToastShelf() {
  const { toasts } = useContext(ToastContext)

  return (
    <ol className={styles.wrapper} role="region" aria-live="polite" aria-label="Notifications">
      {toasts.map(({ id, variant, message }) => {
        return (
          <li key={id} className={styles.toastWrapper}>
            <Toast id={id} variant={variant}>
              {message}
            </Toast>
          </li>
        )
      })}
    </ol>
  )
}

export default ToastShelf
