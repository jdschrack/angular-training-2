import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from './shared/event.service';

@Component({
    templateUrl: 'app/events/create-event.component.html'
})
export class CreateEventComponent {
    isDirty: boolean = true;

    constructor(private router: Router, private eventService: EventService) {
    }

    cancel() {
        this.router.navigate(['events']);
    }

    saveEvent(formValues) {
        this.eventService.saveEvent(formValues);
        this.isDirty = false;
        this.router.navigate(['events']);
    }

}