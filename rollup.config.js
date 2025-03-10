import terser from '@rollup/plugin-terser';

export default [
  {
    input: 'src/index.js',
    output: {
      name: 'htmlTableExcelExporter',
      file: 'dist/html-table-excel-exporter.min.js',
      format: 'umd',
      exports: 'named'
    },
    plugins: [
      terser({
        output: {
          comments: false
        }
      })
    ]
  },
];