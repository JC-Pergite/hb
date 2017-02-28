import { Album } from './album';

export class User {
	constructor(
		public id: number,
		public userName: string, 
		public avatarPic: string,
		public albums: Album[]
	) {}
}