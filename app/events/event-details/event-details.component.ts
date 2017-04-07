import { Component } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../index';

@Component ({
    templateUrl: '/app/events/event-details/event-details.component.html',
    styles: [
        ".container { padding-left: 25%; padding-right: 25% }",
        ".event-image { height: 100px; }"
    ]
})
export class EventDetailsComponent{
    event:IEvent;
    
    constructor(private eventService:EventService, private route:ActivatedRoute){

    }
    ngOnInit() {
        
        this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
    }
}