import { requireNativeView } from 'expo';
import * as React from 'react';
import { PAGViewProps } from './types';

const NativeView: React.ComponentType<PAGViewProps> = requireNativeView('ReactNativePag');

export default function ReactNativePagView(props: PAGViewProps) {
  return <NativeView {...props} />;
}
