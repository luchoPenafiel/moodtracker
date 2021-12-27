module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@moodtracker': './src',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
