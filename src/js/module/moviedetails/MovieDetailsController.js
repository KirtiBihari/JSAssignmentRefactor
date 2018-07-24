import {MovieDetailsView} from "./MovieDetailsView"
import {Generic} from "../../Generic"
// import {JsonAPIService} from "../../service/JsonAPIService"
import {appConfig} from "../../Constants"
const generic = new Generic()
const movieDetailsView = new MovieDetailsView()
// const jsonAPIService = new JsonAPIService()

export class MovieDetailsController {
  createMovieDetails(data) {
    const movieDetailsTemplate = movieDetailsView.getMovieDetailsemplate(data, appConfig.ImgBaseURL)
    generic.appendHTMLToContainer(movieDetailsTemplate, "main")
  }
}
