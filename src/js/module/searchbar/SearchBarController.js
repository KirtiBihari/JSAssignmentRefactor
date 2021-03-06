import {SearchBarView} from "./SearchBarView"
import {Generic} from "../../Generic"
import {JsonAPIService} from "../../service/JsonAPIService"
import {ViewService} from "../../service/ViewService"
import {appConfig} from "../../Constants"

const generic = new Generic()
const searchBarView = new SearchBarView()
const jsonAPIService = new JsonAPIService()
const viewService = new ViewService()

export class SearchBarController {
  createSearchBar(_searchText = "") {
    const searchBarTemplate = searchBarView.getSearchBarTemplate(_searchText)
    console.log(searchBarTemplate)
    const searchBtn = searchBarTemplate.querySelector("#btn_moviesearch")
    console.log(searchBtn)
    searchBtn.addEventListener("click", this.onSearchClick)
    generic.appendHTMLToContainer(searchBarTemplate, "main")
  }
  onSearchClick(e) {
    const searchTextQuery = document.getElementById("input_moviesearch").value
    const searchAPIUrl = appConfig.BaseURL + "search/" + appConfig.MediaType + "?api_key=" + appConfig.APIKEY + "&query=" + searchTextQuery
    jsonAPIService.getJsonData(searchAPIUrl).then((data) => {
      if (data) {
        console.log("searchAPIUrl" + data.results)
        viewService.updateViewByViewState("searchdata", data.results)
      }
    })
  }
}
