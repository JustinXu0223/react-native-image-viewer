import * as React from 'react';
import { Image, ViewStyle } from 'react-native';

export class Props {
  /**
   * 是否显示
   */
  public show?: boolean = false;

  /**
   * 图片数组
   */
  public imageUrls: IImageInfo[] = [];

  /**
   * 滑动到下一页的X阈值
   */
  public flipThreshold?: number = 80;

  /**
   * 当前页能滑到下一页X位置最大值
   */
  public maxOverflow?: number = 300;

  /**
   * 初始显示第几张图
   */
  public index?: number = 0;

  /**
   * 加载失败的图
   */
  public failImageSource?: IImageInfo = undefined;

  /**
   * 背景颜色
   */
  public backgroundColor?: string = 'black';

  /**
   * Menu Context Values
   */
  public menuContext?: any = { saveToLocal: 'save to the album', cancel: 'cancel' };

  /**
   * 是否允许缩放图片
   */
  public enableImageZoom?: boolean = true;

  public style?: ViewStyle = {};

  /**
   * Enable swipe down to close image viewer.
   * When swipe down, will trigger onCancel.
   */
  public enableSwipeDown?: boolean = false;

  public doubleClickInterval?: number;

  /**
   * 是否预加载图片
   */
  public enablePreload?: boolean = false;

  /**
   * 翻页时的动画时间
   */
  public pageAnimateTime?: number = 100;

  /**
   * 长按图片的回调
   */
  public onLongPress?: (image?: IImageInfo) => void = () => {
    //
  };

  /**
   * 单击回调
   */
   public onClick?:  (close?: () => any, currentShowIndex?: number) => void = () => {
    //
  };

  /**
   * 双击回调
   */
  public onDoubleClick?: (close?: () => any) => void = () => {
    //
  };

  /**
   * 自定义头部
   */
  public renderHeader?: (currentIndex?: number, allSize?: number) => React.ReactElement<any> = () => {
    return null as any;
  };

  /**
   * 自定义尾部
   */
  public renderFooter?: (currentIndex?: number, allSize?: number) => React.ReactElement<any> = () => {
    return null as any;
  };

  /**
   * Render image component
   */
  public renderImage?: (props: any) => React.ReactElement<any> = (props: any) => {
    return React.createElement(Image, props);
  };

  /**
   * 弹出大图的回调
   */
  public onShowModal?: (content?: any) => void = () => {
    //
  };

  /**
   * 取消看图的回调
   */
  public onCancel?: () => void = () => {
    //
  };

  /**
   * function that fires when user swipes down
   */
  public onSwipeDown?: () => void = () => {
    //
  };

  /**
   * 渲染loading元素
   */
  public loadingRender?: () => React.ReactElement<any> = () => {
    return null as any;
  };

  /**
   * 保存到相册的回调
   */
  public onSaveToCamera?: (index?: number) => void = () => {
    //
  };

  /**
   * 当图片切换时触发
   */
  public onChange?: (index?: number) => void = () => {
    //
  };
}

export class State {
  /**
   * 是否显示
   */
  public show?: boolean = false;

  /**
   * 当前显示第几个
   */
  public currentShowIndex?: number = 0;

  /**
   * 图片拉取是否完毕了
   */
  public imageLoaded?: boolean = false;

  /**
   * 图片长宽列表
   */
  public imageSizes?: IImageSize[] = [];
}

export interface IImageInfo {
  url: string;
  /**
   * 没有的话会自动拉取
   */
  width?: number;
  /**
   * 没有的话会自动拉取
   */
  height?: number;
  /**
   * 图片字节大小(kb为单位)
   */
  sizeKb?: number;
  /**
   * 原图字节大小(kb为单位)
   * 如果设置了这个字段,并且有原图url,则显示查看原图按钮
   */
  originSizeKb?: number;
  /**
   * 原图url地址
   */
  originUrl?: string;
  /**
   * Pass to image props
   */
  props?: any;
  /**
   * 初始是否不超高 TODO:
   */
  freeHeight?: boolean;
  /**
   * 初始是否不超高 TODO:
   */
  freeWidth?: boolean;
}

export interface IImageSize {
  width: number;
  height: number;
  // 图片加载状态
  status: 'loading' | 'success' | 'fail';
}
