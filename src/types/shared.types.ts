import { NativeModule } from 'expo';

export declare class PAGFile extends NativeModule {
  private constructor();

  static load(source: number): PAGFile;

  width: () => number;
  height: () => number;
  duration: () => number;
  frameRate: () => number;
}
