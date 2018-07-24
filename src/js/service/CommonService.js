import {ViewService} from "./ViewService"

const viewService = new ViewService()
export class CommonService {
  updateView(_view, _data) {
    viewService.updateViewByViewState(_view, _data)
  }
}

