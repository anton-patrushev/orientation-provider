export type Orientation = 'landscape' | 'portrait';

export interface IOrientationManager {
  getOrientation(): Promise<Orientation>;
  getOrientationSynchronously(): Orientation;
}
