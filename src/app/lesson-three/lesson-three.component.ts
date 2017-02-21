import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'mediasoft-lesson-three',
    templateUrl: 'lesson-three.component.html'
})
export class LessonThreeComponent implements OnInit {

    public formEnabled: boolean = true;
    public passwordVisible: boolean = false;
    public passwordRepeatVisible: boolean = false;
    public user: any = {
        hobbies: []
    };

    constructor() { }

    ngOnInit() { }

    public submit() {

    }

    togglePasswordVisibility() {
        this.passwordVisible = !this.passwordVisible;
    }
    togglePasswordRepeatVisibility() {
        this.passwordRepeatVisible = !this.passwordRepeatVisible;
    }

    public trackBy(index, item) {
        return index;
    }
}