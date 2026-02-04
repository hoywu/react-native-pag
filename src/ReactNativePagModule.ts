import { NativeModule, requireNativeModule } from 'expo';

import { ReactNativePagModuleEvents } from './ReactNativePag.types';

declare class ReactNativePagModule extends NativeModule<ReactNativePagModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ReactNativePagModule>('ReactNativePag');
