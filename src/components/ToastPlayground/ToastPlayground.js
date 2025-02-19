import React, { useState, useContext } from "react"

import ToastShelf from "../ToastShelf/ToastShelf"
import Button from "../Button"

import styles from "./ToastPlayground.module.css"

import { ToastContext } from "../ToastProvider/ToastProvider"

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"]

function ToastPlayground() {
  const [message, setMessage] = useState("")
  const [variant, setVariant] = useState("notice")
  const { createToast } = useContext(ToastContext)

  function handleSubmit(e) {
    e.preventDefault()

    createToast(message, variant)

    // Reset the form after submit
    setMessage("")
    setVariant("notice")
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      <ToastShelf />
      <form className={styles.controlsWrapper} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label htmlFor="message" className={styles.label} style={{ alignSelf: "baseline" }}>
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea id="message" className={styles.messageInput} onChange={e => setMessage(e.target.value)} value={message} />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map(option => {
              return (
                <label key={`variant-${option}`} htmlFor={`variant-${option}`}>
                  <input id={`variant-${option}`} type="radio" name="variant" value={option} checked={variant === option ? true : false} onChange={e => setVariant(e.target.value)} />
                  {option}
                </label>
              )
            })}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ToastPlayground
