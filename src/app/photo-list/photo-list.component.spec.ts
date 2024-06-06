import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { PhotoListComponent } from './photo-list.component';
import { PhotoService } from '../service/photo.service';

describe('PhotoListComponent', () => {
  let component: PhotoListComponent;
  let fixture: ComponentFixture<PhotoListComponent>;
  let photoService: PhotoService;

  const dummyPhotos = [
    { albumId: 1, id: 1, title: 'Photo 1', url: 'url1', thumbnailUrl: 'thumbnailUrl1' },
    { albumId: 1, id: 2, title: 'Photo 2', url: 'url2', thumbnailUrl: 'thumbnailUrl2' },
    { albumId: 1, id: 3, title: 'Photo 3', url: 'url3', thumbnailUrl: 'thumbnailUrl3' },
    { albumId: 1, id: 4, title: 'Photo 4', url: 'url4', thumbnailUrl: 'thumbnailUrl4' },
    { albumId: 1, id: 5, title: 'Photo 5', url: 'url5', thumbnailUrl: 'thumbnailUrl5' },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        PhotoListComponent,  // Include the PhotoListComponent itself as it's standalone
      ],
      providers: [PhotoService]
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoListComponent);
    component = fixture.componentInstance;
    photoService = TestBed.inject(PhotoService);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should load and split photos correctly on init', () => {
    spyOn(photoService, 'getPhotos').and.returnValue(of(dummyPhotos));

    fixture.detectChanges(); // triggers ngOnInit

    expect(component.photos.length).toBe(2);
    expect(component.photos[0].length).toBe(3);
    expect(component.photos[1].length).toBe(2);
  });
});
