// Reexport the native module. On web, it will be resolved to ReactNativePagModule.web.ts
// and on native platforms to ReactNativePagModule.ts
export { default } from './ReactNativePagModule';
export { default as PAGView } from './ReactNativePagView';
export * from './types';
