## Form Generator

### Supported fields

`title` - the title to be displayed on the component. String.

`type` - the type of the component to be displayed. Supported types: text, select. String.

`options` - the options to be displayed in the select component (only used for type: select). Array of Objects with value & label as keys.

`disabled` - whether or not the field is disabled. Boolean.

`style` - styles to be added onto the component type. Object.

`containerStyle` - styles to be added onto the container (Grid) component. Object.

`componentOverride` - a component to be used instead of the default component for a given type. React Component.

`state` - the state to be updated when the value of the component changes. String.

`changeHandler` - a function to be called when the value of the component changes. Function.

`additionalProps` - add additional props that are not explicitly supported by this library but by the underlying component. Object
