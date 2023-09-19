import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import TheHeader from '@/components/TheHeader.vue';

describe('TheHeader', () => {
  it('renders without crashing', () => {
    const wrapper = mount(TheHeader);
    expect(wrapper.exists()).toBe(true);
  });

  it('displays the correct title', () => {
    const wrapper = mount(TheHeader);
    const title = wrapper.find('h1');
    expect(title.text()).toBe('The Cleveland Museum of Art');
  });
});
