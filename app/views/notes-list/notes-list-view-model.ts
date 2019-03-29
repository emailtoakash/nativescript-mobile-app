import { Observable } from "tns-core-modules/data/observable";
import { SelectedPageService } from "~/shared/selected-page-service";

export class NotesListViewModel extends Observable {

    public notes: Array<Object>;

    constructor() {
        super();
        this.notes = new Array();
        SelectedPageService.getInstance().updateSelectedPage("Home");
    }
}
