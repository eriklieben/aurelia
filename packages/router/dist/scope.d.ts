import { IContainer } from '@aurelia/kernel';
import { ICustomElementType, IRenderContext } from '@aurelia/runtime';
import { IRouter } from './router';
import { IFindViewportsResult } from './scope';
import { IViewportOptions, Viewport } from './viewport';
import { ViewportInstruction } from './viewport-instruction';
export interface IViewportCustomElementType extends ICustomElementType {
    viewport?: string;
}
export interface IFindViewportsResult {
    viewportInstructions?: ViewportInstruction[];
    viewportsRemaining?: boolean;
}
export declare type ChildContainer = IContainer & {
    parent?: ChildContainer;
};
export declare class Scope {
    element: Element;
    context: IRenderContext | IContainer;
    parent: Scope;
    viewport: Viewport;
    children: Scope[];
    viewports: Viewport[];
    private readonly router;
    private viewportInstructions;
    private availableViewports;
    constructor(router: IRouter, element: Element, context: IRenderContext | IContainer, parent: Scope);
    getEnabledViewports(): Record<string, Viewport>;
    findViewports(viewportInstructions?: ViewportInstruction[]): IFindViewportsResult;
    foundViewport(instruction: ViewportInstruction, viewport: Viewport): IFindViewportsResult;
    addViewport(name: string, element: Element, context: IRenderContext | IContainer, options?: IViewportOptions): Viewport;
    removeViewport(viewport: Viewport, element: Element, context: IRenderContext | IContainer): number;
    removeScope(): void;
    addChild(child: Scope): void;
    removeChild(child: Scope): void;
    viewportStates(full?: boolean, active?: boolean): string[];
    allViewports(): Viewport[];
    scopeContext(full?: boolean): string;
    private closestViewport;
}
//# sourceMappingURL=scope.d.ts.map