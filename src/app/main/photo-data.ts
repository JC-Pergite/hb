import { InMemoryDbService } from 'angular-in-memory-web-api';

export class PhotoData implements InMemoryDbService {
	createDb() {
		let photos = [
		  { id: 0, name: 'Tokyo', type: 'travel', photoUrl: 'http://www.tokyo-skytree.jp/img/index_2015/bg/02_day.jpg'},
		  { id: 1, name: 'Aurora', type: 'travel', photoUrl: 'https://i.ytimg.com/vi/HB74G1tD5XI/maxresdefault.jpg'}

		];
		return { photos };
	}
}
