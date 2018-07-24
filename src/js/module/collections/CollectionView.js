import {Generic} from "../../Generic"
const generic = new Generic()

export class CollectionView {
  getCollectionTemplate(data) {
    const colTemplateStr = `<div id="c${data.Id}" class="col-lg-3 col-md-4 col-sm-12">
    <div class="card">
    <div class="collection-tag">${data.Name}</div>
    <div class="card-body">
    <p class="card-text">${data.Description}
    </p>
    </div>
    <div class="action-tools">
    <a id="del${data.Id}" href="#" class="btn btn-dark"><i class="fa fa-times-circle-o" aria-hidden="true"></i></a>
    </div>
    </div>
    </div>`
    return generic.createHTMLElement(colTemplateStr)
  }
}
