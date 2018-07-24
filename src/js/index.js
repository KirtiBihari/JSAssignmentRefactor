import "../../node_modules/bootstrap/scss/bootstrap.scss"
// import "../../node_modules/font-awesome/css/font-awesome.css"
import "../scss/customize.scss"
import "../scss/base.scss"
import "../scss/layout.scss"
import "../scss/module.scss"
import "../scss/state.scss"
import "../scss/circle.scss"

import $ from "jquery"
import {ViewService} from "../js/service/ViewService"
window.$ = $
const viewService = new ViewService()

viewService.createHeaderFooter()
viewService.updateViewByViewState("dashboard")

// export class Index {
//   updateView(_view, data) {
//     viewService.updateViewByViewState(_view, data)
//   }
// }
// const myPromise = new Promise((resolve, reject) => {
//   const apiurl = "http://localhost:3000/UserMovieData"
//   $.ajax({
//     url: apiurl,
//     type: "GET",
//     dataType: "json",
//     success: (data) => {
//       resolve(data)
//     },
//     error: (err) => {
//       reject(err)
//     },
//   })
// })

// myPromise.then((data) => {
//   console.log(data)
// })
