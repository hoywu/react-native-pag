import * as React from 'react';
import { PAGViewProps } from './types';
import { View } from 'react-native';

export default function ReactNativePagView(props: PAGViewProps) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    // TODO
  }, [props.source]);

  return (
    <View style={props.style}>
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />
    </View>
  );
}
