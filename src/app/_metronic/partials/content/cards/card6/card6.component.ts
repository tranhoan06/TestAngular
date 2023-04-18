import { Component, OnInit, Input } from '@angular/core';
import { IconUserModel } from '../icon-user.model';

@Component({
  selector: 'app-card6',
  templateUrl: './card6.component.html',
  styleUrls: ['./card6.component.scss'],
})
export class Card6Component implements OnInit {
  @Input() icon: string = '';
  @Input() badgeColor: string = '';
  @Input() status: string = '';
  @Input() statusColor: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() date: string = '';
  @Input() budget: string = '';
  @Input() progress: number = 50;
  @Input() users: Array<IconUserModel> = [];
  constructor() {}

  ngOnInit(): void {}
}
