<template>
  <div id="app">
    <header class="col hero">
      <section class="row container">
        <a href="#" class="ctaButton">Button 1</a>
        <a href="#" class="ctaButton">Button 2</a>
      </section>
    </header>
    <article class="col hero container">
      <div class="row">
        <figure class="col">
          <parallax-container class="col"><parallax-element :parallaxStrength="-1" :type="'depth'" class="col heroImage">
            <img src="@/assets/hacktober-header-shadows.svg" alt="CircleCI Orbtoberfest" id="OrbtoberfestThemeLogo">
          </parallax-element></parallax-container>
        </figure>
        <div class="col">
          <h1>What is Hacktoberfest?</h1>
          <p>Hacktoberfest is a month-long celebration of open source software run by DigitalOcean and DEV. It encourages individuals of all skill levels to engage with open source software during the month of October and is open to everyone in our global community.</p>
        </div>
      </div>
      <div class="col">
        <h2>How to participate in Hacktoberfest</h2>
        <div class="row participateRow">
          <div class="col">
            <span class="dot">1</span>
            <p>Register for hacktoberfest at <a href="https://hacktoberfest.digitalocean.com/">https://hacktoberfest.digitalocean.com/</a>. Signups are open from October 1 through October 31</p>
          </div>
          <div class="col">
            <span class="dot">2</span>
            <p>Complete four pull requests during the month of October.</p>
          </div>
          <div class="col">
            <span class="dot">3</span>
            <p>Click here for a full list of Hacktoberfest FAQs.</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <h1>What you win</h1>
          <p>If you complete the 2019 challenge you will earn a limited-edition Hacktoberfest T-shirt. You must submit at least four quality PRs to get a T-shirt.</p>
          <p>Bonus: if you complete all four of your PRs on CircleCI, fill out this form to receive additional CircleCI Hacktoberfest swag while supplies last. Be sure to tag your PRs with ‘<span class="orbtoberfestLabel">orbtoberfest</span>’ so we can keep track of Hacktoberfest submissions.</p>
        </div>
        <figure class="col heroImage">
          <img src="https://via.placeholder.com/460" alt="CircleCI Orbtoberfest">
        </figure>
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
    <CrystalBall :issues="issues" :errors="errors" />
    <IssueList :issues="issues" :errors="errors" />
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
          <EventCard date="10-3-2019" link="#" image="https://via.placeholder.com/200x100" location="Denver, CO" />
        </div>
        <div class="col">
          <EventCard date="10-8-2019" link="#" image="https://via.placeholder.com/200x100" location="New York, Ny" />
        </div>
        <div class="col">
          <EventCard date="10-15-2019" link="#" image="https://via.placeholder.com/200x100" location="Seattle, WA" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// deps
import axios from 'axios'
import Vue from 'vue'
import VueMouseParallax from 'vue-mouse-parallax'

 
Vue.use(VueMouseParallax)
// mixins
// components
import CrystalBall from '@/components/CrystalBall.vue'
import IssueList from '@/components/IssueList.vue'
import EventCard from '@/components/EventCard.vue'
import { ParallaxContainer, ParallaxElement } from 'vue-mouse-parallax'

export default {
  name: 'app',
  components: {
    CrystalBall,
    IssueList,
    EventCard,
    ParallaxContainer,
    ParallaxElement
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

h1, h2 {
  font-family: 'Kelly Slab', cursive;
  font-size: 3em;
}
</style>
