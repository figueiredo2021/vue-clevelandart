import { afterEach, describe, expect, it, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import SearchBox from '@/components/SearchBox.vue';
import { useMuseumMock } from '@/mocks/museumMock';

describe('SearchBox', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders without crashing', () => {
    const wrapper = mount(SearchBox);
    expect(wrapper.exists()).toBe(true);
  });

  it('triggers search when the button is clicked', async () => {
    const wrapper = mount(SearchBox);

    await wrapper.find('[data-test="search-input"]').setValue('painting');
    await wrapper.find('[data-test="search-button"]').trigger('click');

    expect(wrapper.find('[data-test="loading"]').text()).toBe('Loading...');
  });

  it('clears results when the input is empty', async () => {
    const wrapper = mount(SearchBox, {
      global: {
        mocks: {
          useMuseum: {
            ...useMuseumMock(),
            results: [{ title: 'Test' }]
          }
        }
      }
    });

    await wrapper.find('[data-test="search-input"]').setValue('');
    await wrapper.find('[data-test="search-input"]').trigger('input');

    expect((wrapper.vm as any).results).toEqual([]);
  });
});
