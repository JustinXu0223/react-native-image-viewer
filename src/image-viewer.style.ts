import { TextStyle, ViewStyle } from 'react-native';

export default (
  width: number,
  height: number,
  backgroundColor: string
): {
  [x: string]: ViewStyle | TextStyle;
} => {
  return {
    modalContainer: { backgroundColor, justifyContent: 'center', alignItems: 'center', overflow: 'hidden' },
    imageStyle: {},
    container: { backgroundColor, flex: 1, zIndex: 9 }, // 多图浏览需要调整整体位置的盒子
    headerStyle: { zIndex: 10 },
    footerStyle: { zIndex: 10 },
    moveBox: { flexDirection: 'row', alignItems: 'center', flex: 1 },
    operateContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      height: 40,
      borderBottomColor: '#ccc',
      borderBottomWidth: 1
    },
    operateText: { color: '#333' },
    loadingTouchable: { width, height },
    loadingContainer: { justifyContent: 'center', alignItems: 'center', flex: 1 },
  };
};
