## Form Generator

This repo is intended to be used as a form generator for React applications. By creating a JSON object, you can generate a form with various components.

## Examples

Please see the examples folder for full code examples, and the exampleForm.js for an example of invoking each example together.

### Textbox Example

In this textbox example, we would provide the following JSON to the FormComponent:

```
[
    {
      title: "Normal textbox!",
      type: "text",
      state: "textboxNormal",
    },
    {
      title: "Example with style applied",
      type: "text",
      style: {
        backgroundColor: "lightgreen",
      },
      state: "textboxStyled",
    },
    {
      title: "Disabled textbox :(",
      type: "text",
      state: "textboxDisabled",
      disabled: true,
    },
  ];
```

![textbox-example](/images/textbox-example.png)

### Using `componentOverride`

If you do not wish to use the default components provided on some components, you can pass a component override as a key within one of the JSON objects being passed in. This allows you to completely implement your own component in the midst of other components being generated.

```
{
      title: "Custom Defined Select",
      type: "select",
      componentOverride: (
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel>Custom Defined Select!</InputLabel>
            <Select
              label="Custom Defined Select"
              variant="outlined"
              style={{ width: "100vh" }}
              onChange={(e) => {
                setState({ ...state, owners: e.target.value });
              }}
              value={state.selectCustom}
            >
              <MenuItem style={{ color: "blue" }} value="cathy">
                Cathy
              </MenuItem>
              <MenuItem style={{ color: "red" }} value="fry">
                Fry
              </MenuItem>
              <MenuItem style={{ color: "green" }} value="lily">
                Lily
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
      ),
      state: "owners",
    },
```

## Supported props

This library is intended to be used as a whole form. Thus, you can provide a title to this form that will act as the title of the entire card, and you can also provide titles to each component you want to be displayed within the form.

### Overall Form

The following props apply to the entire form and should be passed as a main prop.

`title` - the title to be displayed on the form. String.

`changeHandler` - a function to be called when the value of the component changes. Function.

`fields` - the defined JSON that will be used to generate each component in the form. Array of Objects.

`containerStyles` - styles to be added onto the form. Object.

`state` - the state being utilized & updated via the form. Object.

### Individual Components

The following props apply to each component and should be passed as a key on each object in the fields array.

`title` - the title to be displayed on the form component. String.

`type` - the type of the component to be displayed. Supported types: text, select, date. String.

`options` - the options to be displayed in the select component (only used for type: select). Array of Objects with value & label as keys.

`disabled` - whether or not the field is disabled. Boolean.

`style` - styles to be added onto the component type. Object.

`hidden` - Hide the given field. Boolean

`containerStyles` - styles to be added onto the container of the individual component. Object.

`componentOverride` - a component to be used instead of the default component for a given type. React Component.

`state` - the key of the state to be updated when the value of the component changes. String.
