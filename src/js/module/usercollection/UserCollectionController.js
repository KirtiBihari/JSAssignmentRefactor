import {UserCollectionView} from "./UserCollectionView"
import {CollectionController} from "../collections/CollectionController"
import {Generic} from "../../Generic"
// import {JsonAPIService} from "../../service/JsonAPIService"
// import {appConfig} from "../../constants"
const generic = new Generic()
const userCollectionView = new UserCollectionView()
const collectionController = new CollectionController()
// const jsonAPIService = new JsonAPIService()

export class UserCollectionController {
  createUserCollectionContainer() {
    const UserCollectionTemplate = userCollectionView.getUserCollectionContainertemplate()
    generic.appendHTMLToContainer(UserCollectionTemplate, "main")
  }
  createUserCollection() {
    const movieColData = [
      {Id: 1, Name: "M1", Description: "D1"},
      {Id: 2, Name: "M2", Description: "D2"},
      {Id: 3, Name: "M3", Description: "D3"},
      {Id: 2, Name: "M4", Description: "D4"},
      {Id: 3, Name: "M5", Description: "D5"},
    ]
    const collectionContainerKey = "div#userCollection"
    movieColData.forEach(mCol => {
      collectionController.createCollectionCard(mCol, collectionContainerKey)
    })
  }
}
