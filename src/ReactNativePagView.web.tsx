import * as React from 'react';

import { ReactNativePagViewProps } from './ReactNativePag.types';

export default function ReactNativePagView(props: ReactNativePagViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
