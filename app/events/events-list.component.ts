import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './index';

@Component({
    template: `
  <div>
    <h1>Upcoming Angular 2 Events</h1>
    <hr/>
    <div class="row">
      <div class="col-md-6" *ngFor="let myEvent of events">
      <event-thumbnail [event]="myEvent" (click)="handleThumbnailClick(myEvent.name)"></event-thumbnail>
    </div>
  </div>
  `
})
export class EventsListComponent implements OnInit {
    events: IEvent;

    constructor(private eventService: EventService, private toastr: ToastrService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.events = this.route.snapshot.data['events'];
    }

    handleThumbnailClick(eventName) {
        this.toastr.success(eventName, "Event");
    }
}