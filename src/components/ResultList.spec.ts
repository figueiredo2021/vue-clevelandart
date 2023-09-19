import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import ResultList from '@/components/ResultList.vue';
import { mockResult } from '@/mocks/museumMock';

describe('ResultList', () => {
  it('renders a list of museum results', () => {
    const mockData = [mockResult(1), mockResult(2)];
    const wrapper = mount(ResultList, {
      props: {
        objects: mockData
      }
    });

    // Check if the component renders the correct number of results
    const resultItems = wrapper.findAll('[data-test="image"]');
    expect(resultItems.length).toBe(2);

    // Check if the first result has the correct title
    const firstTitle = wrapper.find('[data-test="title"]');
    expect(firstTitle.text()).toBe('Test Title 1');

    // Check if the second result has the correct author
    const secondAuthor = wrapper.findAll('[data-test="author"]')[1];
    expect(secondAuthor.text()).toBe('by Test Artist 2');
  });
});
