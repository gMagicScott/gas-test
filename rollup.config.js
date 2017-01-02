import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
	entry: "src/index.js",
	dest: "dist/bundle.js",
	format: "es",
	plugins: [
		resolve({
	      jsnext: true,
	      main: true
	    }),
	    commonjs({
	    	include: 'node_modules/**',
	    }),
	    babel({
	      exclude: 'node_modules/**',
	    }),
	  ]
}
