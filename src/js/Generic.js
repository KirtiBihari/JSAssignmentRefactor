import $ from "jquery"
import {JsonAPIService} from "./service/JsonAPIService"
// import {ViewService} from "./service/viewService"
import {appConfig} from "./Constants"
window.$ = $
const jsonAPIService = new JsonAPIService()
// const viewServiceObj = new ViewService()

export class Generic {
  createHTMLElement(html) {
    const template = document.createElement("template")
    template.innerHTML = html
    return template.content.firstElementChild
  }
  createMultipleHTMLElement(html) {
    const template = document.createElement("template")
    template.innerHTML = html
    return template.content
  }
  appendHTMLToContainer(htmlContent, containerKey) {
    const container = document.querySelector(containerKey)
    container.appendChild(htmlContent)
  }
  viewNavigation(e) {
    const curElementId = e.currentTarget().id
    console.log(curElementId)
    // viewServiceObj.updateViewByViewState(curElementId.substr(4))
  }
  getDataConfig() {
    const apiurl = appConfig.BaseURL + "configuration?api_key=" + appConfig.APIKEY
    jsonAPIService.getJsonData(apiurl).then((data) => {
      console.log(data)
      return data
    })
  }
  deleteElement(containerKeys) {
    $(containerKeys).remove()
  }
  showLoader() {
    $("#movieloader").show()
  }
  hideLoader() {
    $("#movieloader").hide()
  }
  clearMainContent() {
    $("main").html("")
  }
}
