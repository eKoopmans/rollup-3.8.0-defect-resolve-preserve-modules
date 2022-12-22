import resolve from '@rollup/plugin-node-resolve';

export default {
	input: 'index.js',
	output: { dir: 'build', preserveModules: true },
	plugins: [
		resolve(),
	],
};
