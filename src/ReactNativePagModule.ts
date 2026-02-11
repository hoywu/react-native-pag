import { NativeModule, requireNativeModule } from 'expo';

declare class ReactNativePagModule extends NativeModule {}

// This call loads the native module object from the JSI.
export default requireNativeModule<ReactNativePagModule>('ReactNativePag');
