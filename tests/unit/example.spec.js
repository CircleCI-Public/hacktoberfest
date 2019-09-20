import { shallowMount } from '@vue/test-utils'
import CrystalBall from '@/components/CrystalBall.vue'

describe('CrystalBall.vue', () => {
  it('renders new issue when clicked', () => {
    const issues = [{
      "repository_url": "www.circleci.com",
      "html_url":"www.circleci.com",
      "comments":"2",
      "body":"test issue body",
      "title":"test issue title"
    }]
    const wrapper = shallowMount(CrystalBall, {
      propsData: { issues }
    })
    expect(wrapper.text()).toMatch(CrystalBall)
  })
})
