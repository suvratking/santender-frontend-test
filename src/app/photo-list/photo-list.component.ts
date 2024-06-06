import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../service/photo.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-photo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './photo-list.component.html',
  styleUrl: './photo-list.component.css'
})
export class PhotoListComponent implements OnInit{
  photos: any[] = [];

  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {
    this.photoService.getPhotos().subscribe(data => {
      let arr = [];
      for (let i = 0; i < data.length; i+=3) {
        if(i >= data.length){
          arr.push(data.slice(i, data.length - 1))
        }else{
          arr.push(data.slice(i, i+3))
        }
      }
      this.photos = arr;
    });
  }
}
