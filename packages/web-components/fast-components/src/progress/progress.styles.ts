import { css, ElementStyles } from "@microsoft/fast-element";
import {
    display,
    forcedColorsStylesheetBehavior,
    FoundationElementTemplate,
    ProgressOptions,
} from "@microsoft/fast-foundation";
import { SystemColors } from "@microsoft/fast-web-utilities";
import {
    accentForegroundRest,
    designUnit,
    neutralFillRest,
    neutralForegroundHint,
} from "../design-tokens";

/**
 * Styles for Progress
 * @public
 */
export const progressStyles: FoundationElementTemplate<ElementStyles, ProgressOptions> = (
    context,
    definition
) =>
    css`
        ${display("flex")} :host {
            align-items: center;
            outline: none;
            height: calc(${designUnit} * 1px);
            margin: calc(${designUnit} * 1px) 0;
        }

        .progress {
            background-color: ${neutralFillRest};
            border-radius: calc(${designUnit} * 1px);
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            position: relative;
        }

        .determinate {
            background-color: ${accentForegroundRest};
            border-radius: calc(${designUnit} * 1px);
            height: 100%;
            transition: all 0.2s ease-in-out;
            display: flex;
        }

        .indeterminate {
            height: 100%;
            border-radius: calc(${designUnit} * 1px);
            display: flex;
            width: 100%;
            position: relative;
            overflow: hidden;
        }

        .indeterminate-indicator-1 {
            position: absolute;
            opacity: 0;
            height: 100%;
            background-color: ${accentForegroundRest};
            border-radius: calc(${designUnit} * 1px);
            animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
            width: 40%;
            animation: indeterminate-1 2s infinite;
        }

        .indeterminate-indicator-2 {
            position: absolute;
            opacity: 0;
            height: 100%;
            background-color: ${accentForegroundRest};
            border-radius: calc(${designUnit} * 1px);
            animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
            width: 60%;
            animation: indeterminate-2 2s infinite;
        }

        :host([paused]) .indeterminate-indicator-1,
        :host([paused]) .indeterminate-indicator-2 {
            animation-play-state: paused;
            background-color: ${neutralFillRest};
        }

        :host([paused]) .determinate {
            background-color: ${neutralForegroundHint};
        }

        @keyframes indeterminate-1 {
            0% {
                opacity: 1;
                transform: translateX(-100%);
            }
            70% {
                opacity: 1;
                transform: translateX(300%);
            }
            70.01% {
                opacity: 0;
            }
            100% {
                opacity: 0;
                transform: translateX(300%);
            }
        }

        @keyframes indeterminate-2 {
            0% {
                opacity: 0;
                transform: translateX(-150%);
            }
            29.99% {
                opacity: 0;
            }
            30% {
                opacity: 1;
                transform: translateX(-150%);
            }
            100% {
                transform: translateX(166.66%);
                opacity: 1;
            }
        }
    `.withBehaviors(
        forcedColorsStylesheetBehavior(
            css`
                .progress {
                    forced-color-adjust: none;
                    background-color: ${SystemColors.Field};
                    box-shadow: 0 0 0 1px inset ${SystemColors.FieldText};
                }
                .determinate,
                .indeterminate-indicator-1,
                .indeterminate-indicator-2 {
                    forced-color-adjust: none;
                    background-color: ${SystemColors.FieldText};
                }
                :host([paused]) .determinate,
                :host([paused]) .indeterminate-indicator-1,
                :host([paused]) .indeterminate-indicator-2 {
                    background-color: ${SystemColors.GrayText};
                }
            `
        )
    );
