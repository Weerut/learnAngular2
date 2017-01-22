import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'bs-favourite',
    templateUrl: 'favourite.component.html'
})


export class FavouriteComponent {
    fave: boolean = false;

    @Input() favourite: string;
    @Input() reviews: number;
    @Output() favouriteClicked: EventEmitter<string> = new EventEmitter<string>();

    onClick(): void {
        this.favouriteClicked.emit(`The favourite ${this.favourite} was saved`);
        this.fave = !this.fave;
    }

    isSelected(fave: boolean): boolean {
        if (!fave || !this.fave)
            return false;
        if (fave)
            return true;
    }
}
