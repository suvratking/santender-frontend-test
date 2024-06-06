// src/app/photo.service.spec.ts
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PhotoService } from './photo.service';

describe('PhotoService', () => {
  let service: PhotoService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PhotoService]
    });
    service = TestBed.inject(PhotoService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should fetch photos', () => {
    const dummyPhotos = [
      { albumId: 1, id: 1, title: 'Photo 1', url: 'url1', thumbnailUrl: 'thumbnailUrl1' },
      { albumId: 1, id: 2, title: 'Photo 2', url: 'url2', thumbnailUrl: 'thumbnailUrl2' },
    ];

    service.getPhotos().subscribe(photos => {
      expect(photos.length).toBe(2);
      expect(photos).toEqual(dummyPhotos);
    });

    const req = httpMock.expectOne('https://jsonplaceholder.typicode.com/photos');
    expect(req.request.method).toBe('GET');
    req.flush(dummyPhotos);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
