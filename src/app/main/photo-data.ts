import { InMemoryDbService } from 'angular-in-memory-web-api';

export class PhotoData implements InMemoryDbService {
	createDb() {
		let photos = [
   ]; 
		let categories = [ 
		  { id: 0, name: 'Travel', photos: [  { id: 0, name: 'Bangkok', type: 'travel', photoUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/03/9b/2d/ad/bangkok.jpg', comments: ['hoe']},
		  									   { id: 1, name: 'Aurora', type: 'travel', photoUrl: 'https://i.ytimg.com/vi/HB74G1tD5XI/maxresdefault.jpg', comments: ['bitch']} ] },
		  { id: 1, name: 'Culinary', photos: [  { id: 2, name: 'Kyo-ryori', type: 'food', photoUrl: 'http://img.timeinc.net/time/photoessays/2011/travel_kyoto/06_kyo_ryori.jpg', comments: ['ass']},
  									   			 { id: 3, name: 'Tiradito', type: 'food', photoUrl: 'http://www.dishinanddishes.com/wp-content/uploads/2010/08/Mama-Vecas681-500x333.jpg', comments: ['moo']} ] }
		];
		return { photos, categories };
	}
}