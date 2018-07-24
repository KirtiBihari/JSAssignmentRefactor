import {Generic} from "../../Generic"
const generic = new Generic()

export class HeaderView {
  getHeaderMenuItemTemplate(navMenuDetails) {
    let navMenuList = ""
    for (const i of navMenuDetails) {
      navMenuList += `<li id="nav-${i.Name.toLowerCase()}" class="nav-item nav-menu">
      <a class="nav-link" href="#">${i.Name}</a>
      </li>`
    }
    return navMenuList
  }

  getHeaderTemplate(navMenuData, logoFullPath) {
    const navMenuEle = `<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
    <div class="container">
    <a class="navbar-brand js-scroll-trigger" href="#page-top">
      <img src="${logoFullPath}" alt="logo" />
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive"
        aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ml-auto">
      ${this.getHeaderMenuItemTemplate(navMenuData)}
      </ul>
    </div>
    </div>
    </nav>`
    const headerTemplate = generic.createHTMLElement(navMenuEle)
    const menuList = headerTemplate.querySelectorAll("li.nav-menu")
    menuList.forEach(menu => {
      menu.addEventListener("click", generic.viewNavigation)
    })
    return headerTemplate
  }
}

