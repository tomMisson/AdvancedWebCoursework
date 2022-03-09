import { shallowMount } from '@vue/test-utils';
import CardItem from '@/components/Cards/CardItem.vue';
import CardsList from '@/components/Cards/CardsList.vue';

describe('When cards are rendered, they are passed components correctly', () => {
  it('renders props when passed', () => {
    const title = 'new title'
    const image = 'https://via.placeholder.com/150'
    const description = 'new description'
    const url = 'https://www.example.com'

    const wrapper = shallowMount(CardItem, {
      props: { title, image, description, url}
    })
    expect(wrapper.text()).toMatch(title)
  })

  it('Doesn\'t render an image if not given a url', () => {
    const title = 'new title'
    const description = 'new description'
    const url = 'https://www.example.com'

    const wrapper = shallowMount(CardItem, {
      props: { title, description, url}
    })

    expect(wrapper.html().includes('<img')).toBe(false);
  })
})

describe('When cards list is rendered', () => {
  it('make sure we have the correct number of cards rendered', () => {
    const articles = [{}, {}, {}]

    const wrapper = shallowMount(CardsList, {
      props: { articles }
    })
    
    expect(wrapper.findAll('card-item-stub').length).toBe(articles.length);
  })
})
