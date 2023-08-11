import { RefObject } from 'react';
export declare function isAnimating(node?: Animatable | Document): boolean;
/**
 * Delays a node's unmounting until any animations on that node are finished, so that an unmounting
 * animation may be applied. If there is no animation, this is a no-op.
 *
 * CSS should target the class returned from getAnimatingClass to determine when to apply the
 * animation.
 * Note that getAnimatingClass will be called when the node would normally begin unmounting.
 */
export declare function useUnmountingAnimation(node: RefObject<HTMLElement>, getAnimatingClass: () => string): void;
