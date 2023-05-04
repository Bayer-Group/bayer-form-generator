## Form Generator

This is a POC repo created with the intention of determining the potential success of a Form Generator.

For questions or status on this project, reach out to Cathy Richards.

### Supported fields

`title` - the title to be displayed on the component. String.

`type` - the type of the component to be displayed. Supported types: text, select. String.

`options` - the options to be displayed in the select component (only used for type: select). Array of Objects with value & label as keys.

`disabled` - whether or not the field is disabled. Boolean.

`style` - styles to be added onto the component type. Object.

`containerStyles` - styles to be added onto the container (Grid) component. Object. This option is available both on a component basis and a field basis.

`componentOverride` - a component to be used instead of the default component for a given type. React Component.

`state` - the state to be updated when the value of the component changes. String.

`changeHandler` - a function to be called when the value of the component changes. Function.

`hidden` - Hide the given field. Boolean
