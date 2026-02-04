import { registerWebModule, NativeModule } from 'expo';

import { ReactNativePagModuleEvents } from './ReactNativePag.types';

class ReactNativePagModule extends NativeModule<ReactNativePagModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(ReactNativePagModule, 'ReactNativePagModule');
