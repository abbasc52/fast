import {
    Flipper,
    FlipperOptions,
    flipperTemplate as template,
} from "@microsoft/fast-foundation";
import { flipperStyles as styles } from "./flipper.styles";

/**
 * A function that returns a {@link @microsoft/fast-foundation#Flipper} registration for configuring the component with a DesignSystem.
 * Implements {@link @microsoft/fast-foundation#flipperTemplate}
 *
 *
 * @public
 * @remarks
 * Generates HTML Element: `<fast-flipper>`
 */
export const fastFlipper = Flipper.compose<FlipperOptions>({
    baseName: "flipper",
    template,
    styles,
    next: /* html */ `
        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M4.023 15.273L11.29 8 4.023.727l.704-.704L12.71 8l-7.984 7.977-.704-.704z"
            />
        </svg>
    `,
    previous: /* html */ `
        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M11.273 15.977L3.29 8 11.273.023l.704.704L4.71 8l7.266 7.273-.704.704z"
            />
        </svg>
    `,
});

/**
 * Base class for Flipper
 * @public
 */
export { Flipper };

export { styles as flipperStyles };
