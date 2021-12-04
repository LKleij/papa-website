import { BehaviorSubject, Observable } from "rxjs";

export const initialViewportSize = { width: window.innerWidth * window.devicePixelRatio, height: window.innerHeight * window.devicePixelRatio };
export const initialNavHeight = 100;
export const devicePixelRatio = new BehaviorSubject<number>(null!).next(window.devicePixelRatio);


export const globalPaddingLeftAndRight = '10%'