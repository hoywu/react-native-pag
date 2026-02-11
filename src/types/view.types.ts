import { StyleProp, ViewStyle } from 'react-native';
import { PAGFile } from './shared.types';

export interface PAGViewProps {
  source?: PAGFile | null;
  /**
   * @default true
   */
  autoPlay?: boolean;
  style?: StyleProp<ViewStyle>;
}
