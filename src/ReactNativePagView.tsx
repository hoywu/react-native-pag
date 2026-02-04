import { requireNativeView } from 'expo';
import * as React from 'react';

import { ReactNativePagViewProps } from './ReactNativePag.types';

const NativeView: React.ComponentType<ReactNativePagViewProps> =
  requireNativeView('ReactNativePag');

export default function ReactNativePagView(props: ReactNativePagViewProps) {
  return <NativeView {...props} />;
}
