import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

import {HomeworkComponent} from "./homework.component";
import {tasksListComponent} from "./tasksList/tasksList.component";

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
                path: 'homework',
                component: HomeworkComponent
            }
        ]),
    ],
    declarations: [
        HomeworkComponent,
        tasksListComponent
    ],
    exports: [
        HomeworkComponent
    ]
})
export class HomeworkModule{}
