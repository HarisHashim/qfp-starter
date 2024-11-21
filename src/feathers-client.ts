import { createClient } from 'back-end'
import { createPiniaClient } from 'feathers-pinia'
import socketio from '@feathersjs/socketio-client'
import io from 'socket.io-client'

// import { feathers } from '@feathersjs/feathers'
import { pinia } from './modules/pinia'

const host = 'http://localhost:3030'
const socket = io(host, { transports: ['websocket'] })
// const app = feathers()

export const feathersClient = createClient(socketio(socket), {
  storage: window.localStorage
})

// export const feathersClient = app.configure(socketio(socket))

export const api = createPiniaClient(feathersClient, {
  pinia,
  idField: 'id',
  whitelist: ['$regex'],
  paramsForServer: []
})
