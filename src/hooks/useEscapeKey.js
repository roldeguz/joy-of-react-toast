import { useEffect } from "react"

function useEscapeKey(callback) {
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.code === "Escape") {
        callback(e)
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [callback])
}

export default useEscapeKey
