import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'mediasoft-lesson-one',
    templateUrl: 'lesson-one.component.html'
})
export class LessonOneComponent implements OnInit {

    public dataBind = true;
    public ngForSample = false;

    constructor() {
    }

    ngOnInit() {
    }

}