import {TopCollectionView} from "./TopCollectionView"
import {CollectionController} from "../collections/CollectionController"
import {Generic} from "../../Generic"
// import {JsonAPIService} from "../../service/JsonAPIService"
// import {appConfig} from "../../constants"
const generic = new Generic()
const topCollectionView = new TopCollectionView()
const collectionController = new CollectionController()
// const jsonAPIService = new JsonAPIService()

export class TopCollectionController {
  createTopCollectionContainer() {
    const topCollectionTemplate = topCollectionView.getTopCollectionContainertemplate()
    generic.appendHTMLToContainer(topCollectionTemplate, "main")
  }
  createTopCollection() {
    // const popularMovieUrl = appConfig.BaseURL + appConfig.MediaType + "/popular?api_key=" + appConfig.APIKEY + "&language=en-US&page=" + this.pageNo
    // console.log(popularMovieUrl)
    // jsonAPIService.getJsonData(popularMovieUrl).then((data) => {
    //   if (data) {
    //     const popularMovieCardsTemp = popularMovieView.getPopularMovieCardsTemplate(data.results, appConfig.ImgBaseURL)
    //     const popularMovieCards = popularMovieCardsTemp.querySelectorAll("div.moviecard")
    //     popularMovieCards.forEach(mcard => {
    //       mcard.addEventListener("click", this.goToMovieDetails)
    //     })
    //     generic.appendHTMLToContainer(popularMovieCardsTemp, "div#popular-movies")
    //   }
    // })
    const movieColData = [
      {Id: 1, Name: "M1", Description: "D1"},
      {Id: 2, Name: "M2", Description: "D2"},
      {Id: 3, Name: "M3", Description: "D3"},
    ]
    const collectionContainerKey = "div#topcollection-movies"
    movieColData.forEach(mCol => {
      collectionController.createCollectionCard(mCol, collectionContainerKey)
    })
  }
}
