import { Component } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent, ISession } from '../shared/index';

@Component({
    templateUrl: '/app/events/event-details/event-details.component.html',
    styles: [
        ".container { padding-left: 25%; padding-right: 25% }",
        ".event-image { height: 100px; }",
        "a { cursor: pointer; }"
    ]
})
export class EventDetailsComponent {
    event: IEvent;
    addMode: boolean;

    constructor(private eventService: EventService, private route: ActivatedRoute) {
    }
    ngOnInit() {
        this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
    }

    addSession() {
        this.addMode = true;
    }

    clearAdd() {
        this.addMode = false;
    }

    saveNewSession(session: ISession) {
        const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
        session.id = nextId + 1;
        this.event.sessions.push(session);
        this.eventService.updateEvent(this.event);
        this.addMode = false;
    }
    cancelAddSession() {
        this.addMode = false;
    }
}