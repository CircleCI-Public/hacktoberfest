<template>
  <div id="app">
    <article class="col hero container">
      <div class="row">
        <figure class="col">
          <parallax-container class="col"><parallax-element :parallaxStrength="-1" :type="'depth'" class="col heroImage">
            <img src="@/assets/hacktober-header-shadows.svg" alt="CircleCI Orbtoberfest" id="OrbtoberfestThemeLogo">
          </parallax-element></parallax-container>
        </figure>
        <div class="col">
          <div class="row heroLogos">
            <img src="@/assets/circle-logo-horizontal-white.svg" width="120em"  height="auto" alt="CircleCI logo">
            <span>&</span>
            <img src="@/assets/Hacktoberfest_19_Events_lockup_ko_300x100.png" width="120em"  height="auto" alt="Hacktoberfest logo">
          </div>
          <div class="row">
            <div class="col heroDescription">
              <h1>What is Hacktoberfest?</h1>
              <p>Hacktoberfest is a month-long celebration of open source software run by DigitalOcean and DEV. It encourages individuals of all skill levels to engage with open source software during the month of October and is open to everyone in our global community.</p>
            </div>
          </div>
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
      <h1>Participating in Hacktoberfest on CircleCI</h1>
      <div class="row">
        <div class="col">
          <p>Contributing to CircleCI orbs is one easy way to complete the Hacktoberfest challenge. CircleCI orbs are open source, reusable packages of config that can help speed up development and connect your favorite tools to your CI pipeline. </p>
        </div>
        <div class="col">
          <p>Check out a few ideas for how to complete your Hacktoberfest PRs on CircleCI by modifying an existing orb below. Once you’ve successfully modified an orb, be sure to tag your PRs with both ‘hacktoberfest’ and ‘orbtoberfest’ and fill out this Google form to receive CircleCI Hacktoberfest swag.</p>
        </div>
      </div>
      <h3>To make a contribution to any of our existing orbs, check out the following tips: </h3>
      <div class="row tipBoxRow">
        <div class="col"><div class="tipBox"><p>Read through our document on orb best practices for ideas on how to improve an orb.</p></div></div>
        <div class="col"><div class="tipBox"><p>Explore our full list of orbs in the orbs registry for inspiration.</p></div></div>
        <div class="col"><div class="tipBox"><p>Search for the ‘circleci-orbs’ tag in GitHub to find orbs with open issues that you can work on.</p></div></div>
        <div class="col"><div class="tipBox"><p>Make edits to the read.me file on an existing orb.</p></div></div>
      </div>
    </article>
    <div class="row container hero">
      <div class="col">
        <div class="containerSmall">
          <p>If you are an orb author, make sure your repository is properly tagged with the ‘circleci-orbs’ topic. We encourage authors to open issues for their orb and tag those issues with ‘orbtoberfest’ and ‘hacktoberfest.’ </p>
        </div>
        <div class="containerSmall">
            <p>Join the #orbtoberfest discussion on our community forum for ideas, additional information, and to ask any questions. View Discuss Post Button with LINK TO DISCUSS POST </p>
        </div>
      </div>
    </div>
    <CrystalBall :issues="issues" :errors="errors" />
    <IssueList :issues="issues" :errors="errors" />
    <section class="col hero container">
      <h2>Get Started with CircleCI</h2>
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
    <section class="col container" id="eventContainer">
      <h2>Events</h2>
      <p>CircleCI is hosting meetups around the country to encourage participation in Hacktoberfest. Come learn how to complete the challenge and network with other open source contributors at one of our upcoming events:</p>
      <div class="row">
        <div class="col">
          <EventCard date="10-10-2019" link="#" location="Virtual Event" />
        </div>
        <div class="col">
          <EventCard date="10-15-2019" link="#" location="Seattle, WA" />
        </div>
        <div class="col">
          <EventCard date="10-28-2019" link="#" location="New York, NY" />
        </div>
      </div>
    </section>
    <section class="col opportunitySection">
      <div class="col container">
        <h2>Other CircleCI and Hacktoberfest opportunities</h2>
          <div class="row">
            <div class="col">
              <h3>Create your own orb</h3>
              <p>For advanced users looking for an extra challenge you can try creating an Orb from scratch to fulfill your PRs.</p>
              <p>Utilize the Orb Starter Kit to create your very own Orb. Note that your orb will automatically get created in an “Alpha” branch. Once you are ready to publish your orb you can open, merge, and PR into master.</p>
            </div>
            <div class="col">
              <h3>Add an orb to an existing open source project on CircleCI</h3>
              <p>If you think your favorite open source project on CircleCI could benefit from the addition of an existing orb, see if you can add it yourself.</p>
              <p>Check out a list of some open source projects that use CircleCI here: </p>
          </div>
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

h1, h2, h3 {
  font-family: 'Kelly Slab', cursive;
  font-weight: bold;
}

h1 {
  font-size: 3em;
}
h2 {
  font-size: 2em;
}

.heroDescription {
  flex: 1;
}

.heroLogos {
  font-family: 'Kelly Slab', cursive;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  font-size: 1.4em;
  font-weight: bold;
    * {
      padding: 0.1em;
    }
}

#eventContainer {
  margin-top: 4em;
}

.opportunitySection {
  .container {
    .row {
      justify-content: baseline;

        .col {
          padding: 2em;
        }
    }
  }
}
</style>
