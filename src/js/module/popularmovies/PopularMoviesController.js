import {PopularMovieView} from "./PopularMovieView"
import {Generic} from "../../Generic"
import {JsonAPIService} from "../../service/JsonAPIService"
import {CommonService} from "../../service/CommonService"
import {appConfig} from "../../Constants"
const generic = new Generic()
const popularMovieView = new PopularMovieView()
const jsonAPIService = new JsonAPIService()
const commonService = new CommonService()

export class PopularMoviesController {
  constructor() {
    this.pageNo = 1
  }
  createPopularMovieContainer() {
    const popularMovieViewTemplate = popularMovieView.getPopularMovieContainerTemplate()
    generic.appendHTMLToContainer(popularMovieViewTemplate, "main")
  }
  createPopularMovieCard() {
    const popularMovieUrl = appConfig.BaseURL + appConfig.MediaType + "/popular?api_key=" + appConfig.APIKEY + "&language=en-US&page=" + this.pageNo
    console.log(popularMovieUrl)
    jsonAPIService.getJsonData(popularMovieUrl).then((data) => {
      if (data) {
        const popularMovieCardsTemp = popularMovieView.getPopularMovieCardsTemplate(data.results, appConfig.ImgBaseURL)
        const popularMovieCards = popularMovieCardsTemp.querySelectorAll("div.moviecard")
        popularMovieCards.forEach(mcard => {
          mcard.addEventListener("click", this.goToMovieDetails)
        })
        generic.appendHTMLToContainer(popularMovieCardsTemp, "div#popular-movies")
      }
    })
  }
  goToMovieDetails(e) {
    const curEleId = e.currentTarget.id
    const movieDetailsUrl = appConfig.BaseURL + appConfig.MediaType + "/" + curEleId.substr(1) + "?api_key=" + appConfig.APIKEY
    jsonAPIService.getJsonData(movieDetailsUrl).then((data) => {
      commonService.updateView("moviedetails", data)
      console.log("m clicked")
    })
  }
}
