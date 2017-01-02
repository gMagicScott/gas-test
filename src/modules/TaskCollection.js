export default class TaskCollection {
	construct(tasks = []) {
		this.tasks = tasks;
	}

	dump() {
		console.log(this.tasks);
	}
}
