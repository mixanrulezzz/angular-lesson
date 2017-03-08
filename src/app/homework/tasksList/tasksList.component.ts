import {Component, OnInit} from "@angular/core";

@Component({
    selector: "mediasoft-tasksList",
    templateUrl: 'tasksList.component.html'
})
export class tasksListComponent implements OnInit{

    public tasks = [{name: 'Add potato', ready: false}];
    public taskName = '';
    public taskReady = false;

    constructor() {
        //this.tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    ngOnInit() {}

    public readyChange(task) {
        task.ready = !task.ready;
    }

    public addTask() {

    }

    public removeTask(task) {
        this.tasks.splice(this.tasks.indexOf(task), 1);
    }
}