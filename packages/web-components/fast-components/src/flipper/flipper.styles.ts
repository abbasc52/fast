import { css, ElementStyles } from "@microsoft/fast-element";
import {
    disabledCursor,
    display,
    FlipperOptions,
    focusVisible,
    forcedColorsStylesheetBehavior,
    FoundationElementTemplate,
} from "@microsoft/fast-foundation";
import { SystemColors } from "@microsoft/fast-web-utilities";
import {
    accentFillActive,
    accentFillHover,
    accentFillRest,
    disabledOpacity,
    focusStrokeInner,
    focusStrokeOuter,
    focusStrokeWidth,
    foregroundOnAccentActive,
    foregroundOnAccentHover,
    foregroundOnAccentRest,
    neutralFillStealthRest,
    neutralForegroundRest,
    neutralStrokeRest,
    strokeWidth,
} from "../design-tokens";
import { heightNumber } from "../styles/index";

/**
 * Styles for Flipper
 * @public
 */
export const flipperStyles: FoundationElementTemplate<ElementStyles, FlipperOptions> = (
    context,
    definition
) =>
    css`
    ${display("inline-flex")} :host {
        width: calc(${heightNumber} * 1px);
        height: calc(${heightNumber} * 1px);
        justify-content: center;
        align-items: center;
        margin: 0;
        position: relative;
        fill: currentcolor;
        color: ${foregroundOnAccentRest};
        background: transparent;
        outline: none;
        border: none;
        padding: 0;
    }

    :host::before {
        content: "";
        background: ${accentFillRest};
        border: calc(${strokeWidth} * 1px) solid ${accentFillRest};
        border-radius: 50%;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        transition: all 0.1s ease-in-out;
    }

    .next,
    .previous {
        position: relative;
        /* TODO: adaptive typography https://github.com/microsoft/fast/issues/2432 */
        width: 16px;
        height: 16px;
        display: grid;
    }

    :host([disabled]) {
        opacity: ${disabledOpacity};
        cursor: ${disabledCursor};
        fill: currentcolor;
        color: ${neutralForegroundRest};
        pointer-events: none;
    }

    :host([disabled])::before,
    :host([disabled]:hover)::before,
    :host([disabled]:active)::before {
        background: ${neutralFillStealthRest};
        border-color: ${neutralStrokeRest};
    }

    :host(:hover) {
        color: ${foregroundOnAccentHover};
    }

    :host(:hover)::before {
        background: ${accentFillHover};
        border-color: ${accentFillHover};
    }

    :host(:active) {
        color: ${foregroundOnAccentActive};
    }

    :host(:active)::before {
        background: ${accentFillActive};
        border-color: ${accentFillActive};
    }

    :host(:${focusVisible}) {
        outline: none;
    }

    :host(:${focusVisible})::before {
        box-shadow: 0 0 0 calc((${focusStrokeWidth} - ${strokeWidth}) * 1px) ${focusStrokeOuter} inset,
            0 0 0 calc((${focusStrokeWidth} + ${strokeWidth}) * 1px) ${focusStrokeInner} inset;
        border-color: ${focusStrokeOuter};
    }

    :host::-moz-focus-inner {
        border: 0;
    }
`.withBehaviors(
        forcedColorsStylesheetBehavior(
            css`
            :host {
                background: ${SystemColors.Canvas};
            }
            :host .next,
            :host .previous {
                color: ${SystemColors.ButtonText};
                fill: currentcolor;
            }
            :host::before {
                background: ${SystemColors.Canvas};
                border-color: ${SystemColors.ButtonText};
            }
            :host(:hover)::before {
                forced-color-adjust: none;
                background: ${SystemColors.Highlight};
                border-color: ${SystemColors.ButtonText};
                opacity: 1;
            }
            :host(:hover) .next,
            :host(:hover) .previous  {
                forced-color-adjust: none;
                color: ${SystemColors.HighlightText};
                fill: currentcolor;
            }
            :host([disabled]) {
                opacity: 1;
            }
            :host([disabled])::before,
            :host([disabled]:hover)::before,
            :host([disabled]) .next,
            :host([disabled]) .previous {
                forced-color-adjust: none;
                background: ${SystemColors.Canvas};
                border-color: ${SystemColors.GrayText};
                color: ${SystemColors.GrayText};
                fill: ${SystemColors.GrayText};
            }
            :host(:${focusVisible})::before {
                forced-color-adjust: none;
                border-color: ${SystemColors.Highlight};
                box-shadow: 0 0 0 calc((${focusStrokeWidth} - ${strokeWidth}) * 1px) ${SystemColors.Highlight} inset;
            }
        `
        )
    );
