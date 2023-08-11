interface ScrollbarOptions {
    padded?: boolean;
}
export default function useScrollbar(element: HTMLElement | null, { padded }?: ScrollbarOptions): import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<import("styled-components").DefaultTheme>>;
export {};
