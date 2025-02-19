---
id: checkbox
title: fast-checkbox
sidebar_label: checkbox
custom_edit_url: https://github.com/microsoft/fast/edit/master/packages/web-components/fast-foundation/src/checkbox/README.md
---

An implementation of a [checkbox](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input/checkbox) as a form-connected web-component.

## Setup

### Basic Setup

```ts
import {
    provideFASTDesignSystem,
    fastCheckbox
} from "@microsoft/fast-components";

provideFASTDesignSystem()
    .register(
        fastCheckbox()
    );
```

### Customizing Indicators

```ts
import {
    provideFASTDesignSystem,
    fastCheckbox
} from "@microsoft/fast-components";

provideFASTDesignSystem()
    .register(
        fastCheckbox({
            checkedIndicator: `...your checked indicator...`,
            indeterminateIndicator: `...your indeterminate indicator...`,
        })
    );
```

## Usage

```html live
<fieldset>
    <legend>Fruits</legend>
    <fast-checkbox checked>Apple</fast-checkbox>
    <fast-checkbox checked>Banana</fast-checkbox>
    <fast-checkbox>Honeydew</fast-checkbox>
    <fast-checkbox checked>Mango</fast-checkbox>
</fieldset>
```

## Create your own design

```ts
import {
    Checkbox,
    CheckboxOptions,
    checkboxTemplate as template,
} from "@microsoft/fast-foundation";
import { checkboxStyles as styles } from "./my-checkbox.styles";

export const myCheckbox = Checkbox.compose<CheckboxOptions>({
    baseName: "checkbox",
    template,
    styles,
    checkedIndicator: `...default checked indicator...`,
    indeterminateIndicator: `...default indeterminate indicator...`,
});
```

## API



### class: `Checkbox`

#### Superclass

| Name                     | Module                                    | Package |
| ------------------------ | ----------------------------------------- | ------- |
| `FormAssociatedCheckbox` | /src/checkbox/checkbox.form-associated.js |         |

#### Fields

| Name            | Privacy | Type                                  | Default | Description                                                                                                                                                                                 | Inherited From         |
| --------------- | ------- | ------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| `readOnly`      | public  | `boolean`                             |         | When true, the control will be immutable by user interaction. See [readonly HTML attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly) for more information. |                        |
| `indeterminate` | public  | `boolean`                             | `false` | The indeterminate state of the control                                                                                                                                                      |                        |
| `proxy`         |         |                                       |         |                                                                                                                                                                                             | FormAssociatedCheckbox |
| `$presentation` | public  | `ComponentPresentation or null`       |         | A property which resolves the ComponentPresentation instance for the current component.                                                                                                     | FoundationElement      |
| `template`      | public  | `ElementViewTemplate or void or null` |         | Sets the template of the element instance. When undefined, the element will attempt to resolve the template from the associated presentation or custom element definition.                  | FoundationElement      |
| `styles`        | public  | `ElementStyles or void or null`       |         | Sets the default styles for the element instance. When undefined, the element will attempt to resolve default styles from the associated presentation or custom element definition.         | FoundationElement      |

#### Methods

| Name              | Privacy   | Description | Parameters | Return | Inherited From    |
| ----------------- | --------- | ----------- | ---------- | ------ | ----------------- |
| `templateChanged` | protected |             |            | `void` | FoundationElement |
| `stylesChanged`   | protected |             |            | `void` | FoundationElement |

#### Attributes

| Name       | Field    | Inherited From |
| ---------- | -------- | -------------- |
| `readonly` | readOnly |                |

<hr/>


## Additional resources

* [Component explorer examples](https://explore.fast.design/components/fast-checkbox)
* [Component technical specification](https://github.com/microsoft/fast/blob/master/packages/web-components/fast-foundation/src/checkbox/checkbox.spec.md)
* [W3C Component Aria Practices](https://w3c.github.io/aria-practices/#checkbox)
* [Open UI Analysis](https://open-ui.org/components/checkbox.research)
* [Open UI Proposal](https://open-ui.org/components/checkbox)