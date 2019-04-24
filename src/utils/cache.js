export const getSession =  (name) => {
  if(!name) return
  return window.sessionStorage.getItem(name)
}
export const setSession = (name, content) => {
  if(!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.sessionStorage.setItem(name, content)
}
export const removeSession = (name) => {
  if(!name) return
  window.sessionStorage.removeItem(name)
}
export const getLocal = (name) => {
  if(!name) return
  return window.localStorage.getItem(name)
}
export const setLocal = (name, content) => {
  if(!name) return
  if(typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.localStorage.setItem(name, content)
}
export const removeLocal = (name) => {
  if(!name) return
  window.localStorage.removeItem(name)
}
