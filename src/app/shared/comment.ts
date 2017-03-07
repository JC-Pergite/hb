export class Comment {
	constructor( 
		public id: number,
		public content: string
		// public author: User
		) { }
	//these are like plans inside agenda details: has own id created by user but belongs to two :
	// one more than the other though i.e if user deltes it it's gone.
	//token required for the time b/w user clicks ad comment to when they submit it 
}