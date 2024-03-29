import { fireEvent, render } from '@testing-library/react';

import ThemeProviderWrapper from 'app/styles/themes/themeProvider';
import { useState } from 'react';
import { Provider } from 'react-redux';
import { configureAppStore } from 'store/configureStore';
import { Dropdown, DropdownOption } from '..';

const defaultOptions = [
  { key: 1, title: 'Option #1' },
  { key: 2, title: 'Option #2' },
];

type DropdownProps = React.ComponentProps<typeof Dropdown>;

const MockedComponentWithParentAndProviders = (
  props: Partial<DropdownProps>,
) => {
  const store = configureAppStore();
  const { label, options, optionSelectedState } = props;

  const [optionSelectedStateFromParent, setOptionSelected] =
    useState<DropdownOption>(optionSelectedState as DropdownOption);

  return (
    <Provider store={store}>
      <ThemeProviderWrapper>
        <Dropdown
          {...props}
          label={label ?? ''}
          options={options ?? []}
          optionSelectedState={optionSelectedStateFromParent}
          setOptionSelected={setOptionSelected}
        />
      </ThemeProviderWrapper>
    </Provider>
  );
};

describe('<Dropdown />', () => {
  let store: ReturnType<typeof configureAppStore>;

  beforeEach(() => {
    store = configureAppStore();
  });

  const DropdownMocked = () =>
    MockedComponentWithParentAndProviders({
      label: 'Dropdown',
      options: defaultOptions,
      optionSelectedState: defaultOptions[0],
    });

  it('should match snapshot', () => {
    const { getByTestId, container } = render(
      <Provider store={store}>
        <DropdownMocked />
      </Provider>,
    );

    const dropdownElement = getByTestId('dropdown');

    expect(dropdownElement).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should display first selected option by default', () => {
    const { getByText } = render(
      <Provider store={store}>
        <DropdownMocked />
      </Provider>,
    );

    const currentOptionSelected = getByText(
      (content, element) =>
        content.startsWith('Option #1') && element?.tagName === 'SUMMARY',
    );

    expect(currentOptionSelected).toBeTruthy();
  });

  it('should open and close dropdown', async () => {
    const { getByText, getByRole } = render(
      <Provider store={store}>
        <DropdownMocked />
      </Provider>,
    );

    const currentOptionSelected = getByText(
      (content, element) =>
        content.startsWith('Option #1') && element?.tagName === 'SUMMARY',
    );

    fireEvent.click(currentOptionSelected);

    const detailsRole = getByRole('details');
    expect(detailsRole.hasAttribute('open')).toBe(true);

    fireEvent.click(currentOptionSelected);
    expect(detailsRole.hasAttribute('open')).toBe(false);
  });

  it('should update option selected state on clicking on input', async () => {
    const { rerender, getByLabelText, getByText } = render(
      <Provider store={store}>
        <DropdownMocked />
      </Provider>,
    );

    const secondInputRadioOption = getByLabelText('Option #2');
    fireEvent.click(secondInputRadioOption);

    rerender(
      <Provider store={store}>
        <DropdownMocked />
      </Provider>,
    );

    const currentOptionSelected = getByText(
      (content, element) =>
        content.startsWith('Option #2') && element?.tagName === 'SUMMARY',
    );

    expect(currentOptionSelected).toBeTruthy();
  });

  it('should display the label when not passed option selected initially', () => {
    const DropdownMocked = () =>
      MockedComponentWithParentAndProviders({
        label: 'Dropdown',
        options: defaultOptions,
      });

    const { getByText } = render(
      <Provider store={store}>
        <DropdownMocked />
      </Provider>,
    );

    const label = getByText(
      (content, element) =>
        content.startsWith('Dropdown') && element?.tagName === 'SUMMARY',
    );

    expect(label).toBeTruthy();
  });
});
