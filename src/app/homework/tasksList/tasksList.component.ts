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
        this.tasks = JSON.parse(localStorage.getItem('tasks'));
        if (this.tasks == null)
        {
            this.tasks = [];
        }
    }

    ngOnInit() {}

    public readyChange(task) {
        task.ready = !task.ready;
        this.saveTasks();
    }

    public addTask() {
        this.tasks.push({name: this.taskName, ready: this.taskReady});
        this.taskName = '';
        this.taskReady = false;
        this.saveTasks();
    }

    public removeTask(task) {
        this.tasks.splice(this.tasks.indexOf(task), 1);
        this.saveTasks();
    }

    public saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
}