---
id: tooltip
title: fast-tooltip
sidebar_label: tooltip
custom_edit_url: https://github.com/microsoft/fast-dna/edit/master/packages/web-components/fast-foundation/src/tooltip/README.md
---

The `fast-tooltip` component is used provide extra information about another element when it is hovered.

## Setup

```ts
import {
    provideFASTDesignSystem,
    fastTooltip
} from "@microsoft/fast-components";

provideFASTDesignSystem()
    .register(
        fastTooltip()
    );
```

## Usage

```html
<div>
    <fast-button id="anchor">Hover me</fast-button>
    <fast-tooltip anchor="anchor">Tooltip text</fast-tooltip>
</div>
```

## Create your own design

```ts
import { tooltipTemplate as template, Tooltip } from "@microsoft/fast-foundation";
import { tooltipStyles as styles } from "./my-tooltip.styles";

export const myTooltip = Tooltip.compose({
    baseName: "tooltip",
    template,
    styles,
});
```

## API



### class: `Tooltip`

#### Superclass

| Name                | Module                                        | Package |
| ------------------- | --------------------------------------------- | ------- |
| `FoundationElement` | /src/foundation-element/foundation-element.js |         |

#### Fields

| Name                     | Privacy | Type                                                                                                                                                                                                                                                                                                                             | Default    | Description                                                                                                                                                                                                      | Inherited From    |
| ------------------------ | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `visible`                | public  | `boolean`                                                                                                                                                                                                                                                                                                                        |            | Whether the tooltip is visible or not. If undefined tooltip is shown when anchor element is hovered                                                                                                              |                   |
| `anchor`                 | public  | `string`                                                                                                                                                                                                                                                                                                                         | `""`       | The id of the element the tooltip is anchored to                                                                                                                                                                 |                   |
| `delay`                  | public  | `number`                                                                                                                                                                                                                                                                                                                         | `300`      | The delay in milliseconds before a tooltip is shown after a hover event                                                                                                                                          |                   |
| `position`               | public  | `or TooltipPosition         or "top"         or "right"         or "bottom"         or "left"         or "start"         or "end"         or "top-left"         or "top-right"         or "bottom-left"         or "bottom-right"         or "top-start"         or "top-end"         or "bottom-start"         or "bottom-end"` |            | Controls the placement of the tooltip relative to the anchor. When the position is undefined the tooltip is placed above or below the anchor based on available space.                                           |                   |
| `autoUpdateMode`         | public  | `AutoUpdateMode`                                                                                                                                                                                                                                                                                                                 | `"anchor"` | Controls when the tooltip updates its position, default is 'anchor' which only updates when the anchor is resized.  'auto' will update on scroll/resize events. Corresponds to anchored-region auto-update-mode. |                   |
| `horizontalViewportLock` | public  | `boolean`                                                                                                                                                                                                                                                                                                                        |            | Controls if the tooltip will always remain fully in the viewport on the horizontal axis                                                                                                                          |                   |
| `verticalViewportLock`   | public  | `boolean`                                                                                                                                                                                                                                                                                                                        |            | Controls if the tooltip will always remain fully in the viewport on the vertical axis                                                                                                                            |                   |
| `anchorElement`          | public  | `HTMLElement or null`                                                                                                                                                                                                                                                                                                            | `null`     | the html element currently being used as anchor. Setting this directly overrides the anchor attribute.                                                                                                           |                   |
| `$presentation`          | public  | `ComponentPresentation or null`                                                                                                                                                                                                                                                                                                  |            | A property which resolves the ComponentPresentation instance for the current component.                                                                                                                          | FoundationElement |
| `template`               | public  | `ElementViewTemplate or void or null`                                                                                                                                                                                                                                                                                            |            | Sets the template of the element instance. When undefined, the element will attempt to resolve the template from the associated presentation or custom element definition.                                       | FoundationElement |
| `styles`                 | public  | `ElementStyles or void or null`                                                                                                                                                                                                                                                                                                  |            | Sets the default styles for the element instance. When undefined, the element will attempt to resolve default styles from the associated presentation or custom element definition.                              | FoundationElement |

#### Methods

| Name              | Privacy   | Description | Parameters | Return | Inherited From    |
| ----------------- | --------- | ----------- | ---------- | ------ | ----------------- |
| `templateChanged` | protected |             |            | `void` | FoundationElement |
| `stylesChanged`   | protected |             |            | `void` | FoundationElement |

#### Attributes

| Name                       | Field                  | Inherited From |
| -------------------------- | ---------------------- | -------------- |
|                            | visible                |                |
| `anchor`                   | anchor                 |                |
| `delay`                    | delay                  |                |
| `position`                 | position               |                |
| `auto-update-mode`         | autoUpdateMode         |                |
| `horizontal-viewport-lock` | horizontalViewportLock |                |
| `vertical-viewport-lock`   | verticalViewportLock   |                |

<hr/>


## Additional resources

* [Component explorer examples](https://explore.fast.design/components/fast-tooltip)
* [Component technical specification](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-foundation/src/tooltip/tooltip.spec.md)
* [W3C Component Aria Practices](https://w3c.github.io/aria-practices/#tooltip)
* [Open UI Analysis](https://open-ui.org/components/tooltip.research)