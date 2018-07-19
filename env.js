// in production: socketUrl = 'https://monitor.sbo.tech'
const frozen = {
  SOCKET_URL: "http://192.168.1.253:4000"
}

let debugConfig = (name) => {
  return frozen[name]
}

module.exports = debugConfig

