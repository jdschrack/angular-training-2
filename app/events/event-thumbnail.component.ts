import { Component, Input } from '@angular/core';
import { IEvent } from './index';

@Component({
  selector: 'event-thumbnail',
  template: `
    <div [routerLink]="['/events', event?.id]" class="well hoverwell thumbnail">
      <h2>{{event?.name}}</h2>
      <div class="col-xs-12">
        <div>Date: {{event?.date}}</div>
        <div [ngClass]="getStartTime()" [ngSwitch]="event?.time">Time: {{event?.time}}
          <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
          <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
          <span *ngSwitchDefault>(Normal Start)</span>
        </div>
        <div>Price: \${{event?.price}}</div>
        <div [hidden]="!event?.location">
          <span>Location: {{event?.location?.address}}</span>
          <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
        </div>
        <div [hidden]="!event?.onlineUrl">
          Online Url: {{event?.onlineUrl}}
        </div>
      </div>
    </div>
  `,
  styles: [`
    .green { color: #00aa00 !important; }
    .red { color: #ff0000 !important; }
    .orange { color: #aaaa00 !important; }
    .bold { font-weight: bold !important;}
    .thumbnail { min-height: 210px; }
    .pad-left { margin-left: 10px; }
    .well div { color: #bbb; }
  `]
})
export class EventThumbnailComponent {
  @Input() event:IEvent

  getStartTime() {
    if ( this.event && this.event.time === '8:00 am' )
    {
      return 'green bold';
    }
    else if ( this.event && this.event.time === '9:00 am')
    {
      return 'orange bold';
    }
    else if ( this.event &&  this.event.time === '10:00 am')
    {
      return 'red bold';
    }

    return '';
  }

}