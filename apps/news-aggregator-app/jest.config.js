module.exports = {
  name: 'news-aggregator-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/news-aggregator-app',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
