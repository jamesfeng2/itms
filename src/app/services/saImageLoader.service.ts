/**
 * @file 图片加载服务
 * @module app/services/image-loader
 * @since 2019-03-12
 */

import { Injectable } from '@angular/core';

@Injectable()
export class SaImageLoaderService {

  public load(src: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      const text = `Image with src ${src} loaded `;
      img.onload = () => {
        resolve(`${text} successfully.`);
      };
      img.onerror = () => {
        reject(`${text} failed.`);
      };
      img.src = src;
    });
  }
}
