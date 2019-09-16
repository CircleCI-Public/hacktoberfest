<template>
  <div id="app">
    <header class="col hero">
      <nav class="row container">
        <ul class="navMenu row">
          <li class="navItem">Link 1</li>
          <li class="navItem">Link 2</li>
          <li class="navItem">Link 3</li>
          <li class="navItem">Link 4</li>
        </ul>
      </nav>
      <section class="row container">
        <a href="#" class="ctaButton">Button 1</a>
        <a href="#" class="ctaButton">Button 2</a>
      </section>
    </header>
    <article class="col hero container">
      <div class="row">
        <div class="col">
          <h1>What is Hacktoberfest?</h1>
          <p>Hacktoberfest is a month-long celebration of open source software run by DigitalOcean and DEV. It encourages individuals of all skill levels to engage with open source software during the month of October and is open to everyone in our global community.</p>
        </div>
        <figure class="col heroImage">
          <img src="https://via.placeholder.com/460" alt="CircleCI Orbtoberfest">
        </figure>
      </div>
      <div class="col">
        <h2>Second heading</h2>
        <div class="row">
          <div class="col">
            <span class="dot"></span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div class="col">
            <span class="dot"></span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div class="col">
            <span class="dot"></span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div class="row">
        <figure class="col heroImage">
          <img src="https://via.placeholder.com/460" alt="CircleCI Orbtoberfest">
        </figure>
        <div class="col">
          <h1>Shirt</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet officia sint quae! Ea nemo sint sunt illo debitis suscipit illum nobis, blanditiis aliquam. Adipisci ducimus itaque deserunt, laborum dolor earum.</p>
        </div>
      </div>
    </article>
    <article class="col container">
      <h1>Heading One</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut corrupti eum voluptatibus vel quas vero nihil animi? Laborum, deserunt earum provident alias sint dignissimos facere eius possimus fugit illum velit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt iure aliquam, autem sit atque, minima iusto fuga enim sint natus cum exercitationem dolor recusandae molestias? Debitis totam mollitia animi porro! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi possimus id, accusamus quasi minus accusantium expedita, repellendus quam nisi odit pariatur voluptatem deleniti, soluta porro magnam illo tenetur assumenda sit.</p>
      <div class="row">
        <div class="col"><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum nihil, aliquam ratione nesciunt saepe fugit? Dolore possimus dignissimos ipsa adipisci neque sed numquam iure, doloribus voluptas? Veritatis similique voluptatum tempora.</p></div>
        <div class="col"><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, temporibus! Consequuntur neque atque quibusdam pariatur, non exercitationem? Iure, possimus veniam. Accusantium excepturi similique at cum alias quo voluptate dignissimos reiciendis.</p></div>
        <div class="col"><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor est assumenda, nulla sed tempore similique neque sunt natus alias itaque quidem beatae accusantium velit accusamus numquam at unde corporis! Perferendis.</p></div>
      </div>
    </article>
    <CrystalBall :issues="issues" />
    <IssueList :issues="issues" />
    <section class="col hero container">
      <h1>Resources</h1>
      <div class="row">
        <div class="col">
          <p>lorem</p>
        </div>
        <div class="col">
          <p>lorem</p>
        </div>
        <div class="col">
          <p>lorem</p>
        </div>
      </div>
    </section>
    <section class="col hero container">
      <h1>Events</h1>
      <p>CircleCI is hosting meetups around the country to encourage participation in Hacktoberfest. Come learn how to complete the challenge and network with other open source contributors at one of our upcoming events:</p>
      <div class="row">
        <div class="col">
          <article class="eventCard">
            <figure>
              <img src="https://via.placeholder.com/200x100" alt="">
            </figure>
            <span>October 3</span>
            <span>Denver, CO</span>
            <a href="" class="ctaButton">Eventbrite</a>
          </article>
        </div>
        <div class="col">
          <article class="eventCard">
            <figure>
              <img src="https://via.placeholder.com/200x100" alt="">
            </figure>
            <span>October 8</span>
            <span>New York, NY</span>
            <a href="" class="ctaButton">Eventbrite</a>
          </article>
        </div>
        <div class="col">
          <article class="eventCard">
            <figure>
              <img src="https://via.placeholder.com/200x100" alt="">
            </figure>
            <span>October 15</span>
            <span>Seattle, WA</span>
            <a href="" class="ctaButton">Eventbrite</a>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// deps
import axios from 'axios'
// mixins
// components
import CrystalBall from '../components/CrystalBall.vue'
import IssueList from '../components/IssueList.vue'

export default {
  name: 'app',
  components: {
    CrystalBall,
    IssueList
  },
  data() {
    return {
      issueURL:
        "https://api.github.com/search/issues?q=label:orbtoberfest+state:open&sort=created&order=asc",
      issues: [],
      errors: []
    }
  },

  async created() {
    try {
      const response = await axios.get(
        this.issueURL
      );
      this.issues = response.data.items;
    } catch (e) {
      this.errors.push(e);
    }
  }
}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css?family=Kelly+Slab&display=swap');

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: $color-primary;
  color: $color-white;
}

h1, h2 {
  font-family: 'Kelly Slab', cursive;
  font-size: 3em;
}
</style>
