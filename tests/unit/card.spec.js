import { shallowMount } from '@vue/test-utils'
import CardItem from '@/components/Cards/CardItem.vue'

describe('When cards are rendered, they are passed components correctly', () => {
  it('renders props.msg when passed', () => {
    const title = 'new title'
    const image = 'https://via.placeholder.com/150'
    const description = 'new description'
    const url = 'https://www.example.com'

    const wrapper = shallowMount(CardItem, {
      props: { title, image, description, url}
    })
    expect(wrapper.text()).toMatch(title)
  })
})
