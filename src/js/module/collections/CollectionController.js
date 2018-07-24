import {CollectionView} from "./CollectionView"
import {Generic} from "../../Generic"
const generic = new Generic()
const collectionView = new CollectionView()

export class CollectionController {
  createCollectionCard(colData, containerKey) {
    const colTemplate = collectionView.getCollectionTemplate(colData)
    // const colCard = colTemplate.querySelector("div#c" + colData.Id)
    colTemplate.addEventListener("click", this.onEditCollection)

    const colCardDel = colTemplate.querySelector("a#del" + colData.Id)
    colCardDel.addEventListener("click", this.onDeleteCollection)
    generic.appendHTMLToContainer(colTemplate, containerKey)
  }

  onEditCollection() {
    console.log("col Edit")
  }
  onDeleteCollection() {
    console.log("col Delete")
  }
}
