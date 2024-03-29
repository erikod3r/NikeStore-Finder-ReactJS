import type { Meta, StoryObj } from '@storybook/react';
import ThemeProviderWrapper from 'app/styles/themes/themeProvider';
import { Provider } from 'react-redux';
import { configureAppStore } from 'store/configureStore';
import { Button } from '.';

const meta: Meta<typeof Button> = {
  component: Button,
  args: {
    label: 'Label',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: args => {
    const store = configureAppStore();
    return (
      <Provider store={store}>
        <ThemeProviderWrapper>
          <div
            style={{
              width: '50%',
              margin: '0 auto',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Button {...args} />
          </div>
        </ThemeProviderWrapper>
      </Provider>
    );
  },
};
