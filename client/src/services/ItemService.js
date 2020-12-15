import api from './api'
export default {
  getItems () {
    debugger
    return api().get('items')
  }
}
