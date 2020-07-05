import cryptojs from 'crypto-js'

class Session {
  login(usuario: {}) {
    if (localStorage.getItem('session') === null) {
      const encrypted: string = cryptojs.AES.encrypt(
        JSON.stringify(usuario),
        'c6e5ad5fae423dc03dc4a1c121856356'
      ).toString()
      localStorage.setItem('session', encrypted)
    }
    window.location.reload()
  }
  getUserInfo() {
    if (localStorage.getItem('session') !== null) {
      const encrypted: string = localStorage.getItem('session') || ''
      const bytes: cryptojs.DecryptedMessage = cryptojs.AES.decrypt(
        encrypted,
        'c6e5ad5fae423dc03dc4a1c121856356'
      )
      let originalText: string
      try {
        originalText = bytes.toString(cryptojs.enc.Utf8)
        return JSON.parse(originalText)
      } catch (err) {
        this.logout()
      }
    } else {
      return null
    }
  }
  logout() {
    localStorage.removeItem('session')
    window.location.reload()
  }
  isLogado() {
    return localStorage.getItem('session') !== null
  }
}

export default new Session()
