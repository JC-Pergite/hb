import { Album } from './album';
import { Comment } from '../shared/comment';

export class User {
	constructor(
		public id: number,
		public userName: string, 
		public avatarPic: string,
		public albums: Album[],
		public comments: Comment[]
	) {}
}