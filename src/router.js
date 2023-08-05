export class Router {
  routes = {}

  add(routeName, page) {
    this.routes[routeName] = page
  }

  route(event) {
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, "", event.target.href)

    this.handle()

    this.setBackground()
  }

  handle() {
    const { pathname } = window.location

    const route = this.routes[pathname] || this.routes[404]

    fetch(route)
      .then((data) => data.text())
      .then((html) => {
        document.querySelector("#app").innerHTML = html
      })
  }

  setBackground() {
    const path = window.location.pathname

    console.log(path)
    switch (path) {
      case "/":
        document.body.style.background =
          "center / cover no-repeat url('./assets/mountains-universe-1.png')"
        break
      case "/universe":
        document.body.style.background =
          "center / cover no-repeat url('./assets/mountains-universe02.png')"
        break
      case "/explore":
        document.body.style.background =
          "center / cover no-repeat url('./assets/mountains-universe-3.png')"
        break
      default:
        document.body.style.background =
          "center / cover no-repeat url('./assets/mountains-universe-1.png')"
        break
    }
  }
}
