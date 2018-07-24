import {SearchListView} from "./SearchListView"
import {Generic} from "../../Generic"
// import {JsonAPIService} from "../../service/JsonAPIService"
import {appConfig} from "../../Constants"
const generic = new Generic()
const searchListView = new SearchListView()
// const jsonAPIService = new JsonAPIService()

export class SearchListController {
  createSearchListContainer() {
    const searchListContainerTemp = searchListView.getSearchListContainer()
    generic.appendHTMLToContainer(searchListContainerTemp, "main")
  }
  createSearchList(movieSearchData) {
    const searchListTemplate = searchListView.getSearchListTemplate(movieSearchData, appConfig.ImgBaseURL)
    // const searchListMoreInfoLinks = searchListTemplate.querySelectorAll("a.moreInfo")
    // searchListMoreInfoLinks.forEach(morelink => {
    //   morelink.addEventListener("click", this.goToMoreInfo)
    // })
    generic.appendHTMLToContainer(searchListTemplate, "div#search-movies")
  }

  goToMoreInfo(e) {
    console.log(e.currentTarget)
  }
}
