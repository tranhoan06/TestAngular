import { Component, OnInit } from '@angular/core';
import { IconUserModel } from 'src/app/_metronic/partials';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent implements OnInit {
  users1: Array<IconUserModel> = [
    {
      name: 'Emma Watson',
      avatar:
        'https://i.pinimg.com/564x/04/34/18/0434180048e47e8d6ed39d844a649758.jpg',
    },
    {
      name: 'Rudy Garcia',
      avatar:
        'https://i.pinimg.com/564x/50/d9/2c/50d92c23dc122ed8daa9ce1989219249.jpg',
    },
    {
      name: 'Susan ',
      avatar:
        'https://i.pinimg.com/736x/0e/d8/54/0ed8549cbf8d409bc3b90731085f865d.jpg',
    },
  ];

  users2: Array<IconUserModel> = [
    { name: 'Emma Smith', avatar: './assets/media/avatars/300-6.jpg' },
    { name: 'Rudy Stone', avatar: './assets/media/avatars/300-1.jpg' },
    {
      name: 'Susan Redwood',
      avatar:
        'https://i.pinimg.com/564x/a3/80/86/a3808660fcf50b7602e15c6a8ca6c469.jpg',
    },
  ];

  users3: Array<IconUserModel> = [
    {
      name: 'Will Smith',
      avatar:
        'https://i.pinimg.com/736x/4c/66/4d/4c664dc23e19fada7f9ff96f0f90043d.jpg',
    },
    {
      name: 'Emma Stone',
      avatar:
        'https://i.pinimg.com/736x/c0/99/15/c099159849a5f3399e05335f2c56adca.jpg',
    },
  ];

  users4: Array<IconUserModel> = [
    {
      name: 'Hiếu',
      avatar:
        'https://i.pinimg.com/564x/48/2f/af/482fafc841733143a83e63bb1ae04207.jpg',
    },
    {
      name: 'Ngu',
      avatar:
        'https://i.pinimg.com/564x/6e/f0/a7/6ef0a7aa1f09a7377745718893b48b2a.jpg',
    },
    {
      name: 'Simpson',
      avatar:
        'https://i.pinimg.com/564x/a3/17/fc/a317fca3ca84754150f570d3b7e79843.jpg',
    },
  ];

  users5: Array<IconUserModel> = [
    {
      name: 'Hoàn',
      avatar:
        'https://i.pinimg.com/564x/48/2f/af/482fafc841733143a83e63bb1ae04207.jpg',
    },
    {
      name: 'Ngu',
      avatar:
        'https://i.pinimg.com/564x/6e/f0/a7/6ef0a7aa1f09a7377745718893b48b2a.jpg',
    },
    {
      name: 'Simpson',
      avatar:
        'https://i.pinimg.com/564x/a3/17/fc/a317fca3ca84754150f570d3b7e79843.jpg',
    },
  ];

  users6: Array<IconUserModel> = [
    {
      name: 'Hoàn',
      avatar:
        'https://i.pinimg.com/564x/48/2f/af/482fafc841733143a83e63bb1ae04207.jpg',
    },
    {
      name: 'Ngu',
      avatar:
        'https://i.pinimg.com/564x/6e/f0/a7/6ef0a7aa1f09a7377745718893b48b2a.jpg',
    },
    {
      name: 'Simpson',
      avatar:
        'https://i.pinimg.com/564x/a3/17/fc/a317fca3ca84754150f570d3b7e79843.jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
