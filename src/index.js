import cheerio from 'cheerio';
import TaskCollection from './modules/TaskCollection';

let begin = () => {
	let $ = cheerio.load('<h2 class="title">Hello world</h2>');
}

new TaskCollection([
	'one',
	'two',
	'three'
]).dump();

begin();
