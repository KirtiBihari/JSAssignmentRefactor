import {Generic} from "../../Generic"
const generic = new Generic()

export class ModalBoxView {
  getModalContainerTemplate(modalBoxId, modalHeaderText) {
    const modalContainer = `<div id="${modalBoxId}" class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Delete Collection</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p id="c_d_msg"></p>
        </div>
        <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
                <button id="btn-deletecol" type="button" class="btn btn-primary">Yes</button>
          
        </div>
      </div>
    </div>
  </div>`
    const popularMovieContainerTemplate = generic.createHTMLElement(popularMovieContainer)
    return popularMovieContainerTemplate
  }

  getPopularMovieCardsTemplate(moviePopularData, baseImgURL) {
    let moviesCards = ""
    moviePopularData.forEach(mdata => {
      moviesCards += `<div id="m${mdata.id}" class="col-lg-4 col-md-6 col-sm-12 px-0 moviecard">
      <a class="movie-info" href="#">
      <img src="${baseImgURL}w342/${mdata.poster_path}" alt="${mdata.title}">
      <div class="info">
      <span class="info-name d-block text-light">${mdata.title}</span>
      </div>
      </a>
      </div>`
    })
    return generic.createMultipleHTMLElement(moviesCards)
  }
}
