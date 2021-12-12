import { BehaviorSubject, Observable } from "rxjs";

export const initialViewportSize = { width: window.innerWidth * window.devicePixelRatio, height: window.innerHeight * window.devicePixelRatio };
export const initialNavHeight = 70;
export const maxPageWidth = { _number: 2000, _text: '2000px' };
export const pageMargins = '16vw';
export const pageWidth = { max: 2000, min: 880 };


export const globalPaddingLeftAndRight = new Observable<number>();