import $ from "jquery"
import {Generic} from "../generic"
import {HeaderController} from "../module/header/HeaderController"
import {FooterController} from "../module/footer/FooterController"
import {SearchBarController} from "../module/searchbar/SearchBarController"
import {PopularMoviesController} from "../module/popularmovies/PopularMoviesController"
import {TopCollectionController} from "../module/topcollection/TopCollectionController"
import {UserCollectionController} from "../module/usercollection/UserCollectionController"
import {MovieDetailsController} from "../module/moviedetails/MovieDetailsController"
import {SearchListController} from "../module/searchlist/SearchListController"
window.$ = $

const generic = new Generic()
const headerCtrl = new HeaderController()
const footerCtrl = new FooterController()
const SearchBarCtrl = new SearchBarController()
const popularMoviesCtrl = new PopularMoviesController()
const topCollectionCtrl = new TopCollectionController()
const usercollectionCtrl = new UserCollectionController()
const movieDetailsCtrl = new MovieDetailsController()
const SearchListCtrl = new SearchListController()

export class ViewService {
  createHeaderFooter() {
    headerCtrl.createHeader()
    footerCtrl.createFooter()
  }
  updateViewByViewState(_viewName, data = null) {
    switch (_viewName) {
    case "dashboard":
      generic.clearMainContent()
      SearchBarCtrl.createSearchBar()
      popularMoviesCtrl.createPopularMovieContainer()
      popularMoviesCtrl.createPopularMovieCard()
      topCollectionCtrl.createTopCollectionContainer()
      topCollectionCtrl.createTopCollection()
      break
    case "usercollection":
      generic.clearMainContent()
      usercollectionCtrl.createUserCollectionContainer()
      usercollectionCtrl.createUserCollection()
      break
    case "searchdata":
      const searchKey = $("#input_moviesearch").val()
      generic.clearMainContent()
      SearchBarCtrl.createSearchBar(searchKey)
      SearchListCtrl.createSearchListContainer()
      SearchListCtrl.createSearchList(data)
      break
    case "moviedetails":
      generic.clearMainContent()
      movieDetailsCtrl.createMovieDetails(data)
      break
    default:
      break
    }
  }
}
