<template>
  <div id="viewHome">
    <article class="col hero container">
      <div class="row mainHeroRow">
        <figure class="col">
          <div class="gamaburst" id="gb1"></div>
          <div class="gamaburst" id="gb2"></div>
          <div class="gamaburst" id="gb3"></div>
          <parallax-container class="col"><parallax-element :parallaxStrength="30" :type="'depth'" class="col heroImage">
            <img src="@/assets/orbtoberfest-header_graphic.svg" alt="CircleCI Orbtoberfest" id="OrbtoberfestThemeLogo">
          </parallax-element></parallax-container>
        </figure>
        <div class="col">
          <div class="row heroLogos">
            <img src="@/assets/circle-logo-horizontal-white.svg" width="120em"  height="auto" alt="CircleCI logo">
            <span id="heroAnd">&</span>
            <img src="@/assets/Hacktoberfest_19_Events_lockup_ko_300x100.png" width="120em"  height="auto" alt="Hacktoberfest logo">
          </div>
          <div class="row">
            <div class="col heroDescription">
              <h1>What is Hacktoberfest?</h1>
              <p>Hacktoberfest is a month-long celebration of open source software run by DigitalOcean and DEV. It encourages individuals of all skill levels to engage with open source software during the month of October and is open to everyone in our global community.</p>
              <p>This year, CircleCI invites you to contribute to our orbs open source projects, which we’re calling <span class="fancyText">#Orbtoberfest</span>. Enter to earn extra limited-edition CircleCI swag!</p>
              <div class="row">
                <a href="#hacktoberfestOnCircleCI" class="ctaButton" id="heroLearnMore">Learn More</a>
                <a href="#crystalBall" class="ctaButton" id="heroFindIssue">Find an issue</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <a name="howToParticipate"></a>
        <h2 class="desktop-left">How to participate in Hacktoberfest</h2>
        <div class="row participateRow">
          <div class="col">
            <span class="dot">1</span>
            <p>Register for hacktoberfest at <a href="https://hacktoberfest.digitalocean.com/">hacktoberfest.digitalocean.com</a>.</p>
          </div>
          <div class="col">
            <span class="dot">2</span>
            <p>Complete four pull requests during the month of October.</p>
          </div>
          <div class="col">
            <span class="dot">3</span>
            <p>Click here for a full list of <a href="https://hacktoberfest.digitalocean.com/faq/">Hacktoberfest FAQs</a>.</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col hacktoberfestOnCircleCI desktop-left">
          <a name="hacktoberfestOnCircleCI"></a>
          <h1>What you win</h1>
          <p>If you submit at least four valid PRs you will earn a limited-edition Hacktoberfest T-shirt from DigitalOcean.</p>
          <h2>Bonus:</h2>
          <p>Participate in <span class="fancyText">#Orbtoberfest</span> with CircleCI and claim limited edition swag!</p>
          <ul>
            <li>1 - 3 pull requests: Limited-Edition Sticker</li>
            <li>4+ pull requests: Limited-Edition T-shirt</li>
          </ul>
          <p>Once you have completed your PRs, submit the form below with links to each PR.</p>
          <a href="https://docs.google.com/forms/d/1-MbzLy0m1eRLjeye9wu76fYkzcX5A3PvgKd09EhVObY/viewform" class="ctaButton">Enter your PRs</a>
        </div>
        <figure class="col heroImage" id="swagCol">
          <img src="@/assets/hacktober19_swag-mockup.png" alt="CircleCI Orbtoberfest">
        </figure>
      </div>
    </article>
    <article class="col hero container">
      <h1>Participating in Orbtoberfest on CircleCI</h1>
      <div class="row">
        <div class="col desktop-left">
          <p>Contributing to <a href="https://circleci.com/orbs/">CircleCI orbs</a> is one easy way to complete the Hacktoberfest challenge. CircleCI orbs are open source, reusable packages of config that can help speed up development and connect your favorite tools to your CI pipeline. </p>
        </div>
        <div class="col desktop-left">
          <p>Check out a few ideas for how to complete your Hacktoberfest PRs on CircleCI by modifying an existing orb below. Once you’ve successfully modified an orb, be sure to fill out <a href="https://docs.google.com/forms/d/1-MbzLy0m1eRLjeye9wu76fYkzcX5A3PvgKd09EhVObY/viewform">this Google form</a> to receive CircleCI Hacktoberfest swag.</p>
        </div>
      </div>
      <h3>To make a contribution to any of our existing orbs, check out the following tips: </h3>
      <div class="row tipBoxRow">
        <div class="col"><div class="tipBox"><p>Read through our document on <a class="linkBlue" href="https://github.com/CircleCI-Public/Orb-Policies/blob/master/Orb%20Best%20Practices%20Guidelines.md">orb best practices</a> for ideas on how to improve an orb.</p></div></div>
        <div class="col"><div class="tipBox"><p>Search the <a href="https://github.com/search?l=&o=desc&q=label%3Aorbtoberfest+state%3Aopen&s=comments&type=Issues" class="linkBlue">‘orbtoberfest’</a> label to find open issues.</p></div></div>
        <div class="col"><div class="tipBox"><p>Search for the <a href="https://github.com/topics/circleci-orbs" class="linkBlue">‘circleci-orbs’</a> tag in GitHub to find orbs with open issues that you can work on.</p></div></div>
        <div class="col"><div class="tipBox"><p>Update or add <a href="https://circleci.com/docs/2.0/orb-author/#providing-usage-examples-of-orbs" class="linkBlue">usage examples</a> in orb source.</p></div></div>
      </div>
    </article>
    <div id="orbAuthors" class="row container hero">
      <div class="col">
        <div class="containerSmall">
          <p>If you are an orb author, make sure your repository is properly tagged with the ‘circleci-orbs’ topic. We encourage authors to open issues for their orb and tag those issues with <span class="orbtoberfestLabel">‘orbtoberfest’</span> and <span class="orbtoberfestLabel">‘hacktoberfest.’</span> </p>
        </div>
        <div class="containerSmall">
            <p>Join the <span class="fancyText">#orbtoberfest</span> discussion on our community forum for ideas, additional information, and to ask any questions.</p>
            <a href="https://discuss.circleci.com/t/participate-in-hacktoberfest-on-circleci/32557" class="ctaButton">Join discussion</a>
        </div>
      </div>
    </div>
    <a name="crystalBall"></a>
    <CrystalBall :issues="issues" :errors="errors" />
    <IssueList :issues="issues" :errors="errors" />
    <section class="col hero container ResourceList">
      <a name="ResourceList"></a>
      <h2>Get Started with CircleCI</h2>
      <div class="row">
        <div class="col">
          <a href="https://circleci.com/docs/2.0/configuration-reference/" class="resourceButton">Configuring CircleCI</a>
        </div>
        <div class="col">
          <a href="https://circleci.com/docs/2.0/orb-intro/" class="resourceButton">Orbs Introduction</a>
        </div>
        <div class="col">
          <a href="https://github.com/CircleCI-Public/Orb-Policies/blob/master/Orb%20Best%20Practices%20Guidelines.md" class="resourceButton">Orbs Best Practices Guidelines</a>
        </div>
      </div>
    </section>
    <section class="col container" id="eventContainer">
      <a name="EventList"></a>
      <h2>Events</h2>
      <p class="containerSmall">CircleCI is hosting meetups around the country to encourage participation in Hacktoberfest. Come learn how to complete the challenge and network with other open source contributors at one of our upcoming events:</p>
      <div class="row">
        <div class="col">
          <EventCard eventMonth="October" eventDay="10" link="https://www2.circleci.com/Hacktoberfest-2019-Open-Hack-Virtual-Meetup.html" location="Virtual Event" sponsor="circleci" />
        </div>
        <div class="col">
          <EventCard eventMonth="October" eventDay="15" link="https://www.eventbrite.com/e/hacktoberfest-open-hack-night-in-seattle-tickets-73458651805" location="Seattle, WA" sponsor="pulumi"/>
        </div>
        <div class="col">
          <EventCard eventMonth="October" eventDay="28" link="https://www.eventbrite.com/e/hacktoberfest-open-hack-night-in-new-york-tickets-73438308959" location="New York, NY" sponsor="snyk"/>
        </div>
      </div>
    </section>
    <section class="col hero opportunitySection">
      <div class="col container desktop-left">
        <a name="OtherOpporunities"></a>
        <h2>Other CircleCI and Hacktoberfest opportunities</h2>
          <div class="row">
            <div class="col">
              <h3 class="desktop-left">Create your own orb</h3>
              <p>For advanced users looking for an extra challenge you can try creating an Orb from scratch to fulfill your PRs.</p>
              <p>Utilize the <a href="https://github.com/CircleCI-Public/orb-starter-kit">Orb Starter Kit</a> to create your very own Orb. Note that your orb will automatically get created in an “Alpha” branch. Once you are ready to publish your orb you can open, merge, and PR into master.</p>
            </div>
            <div class="col">
              <h3 class="desktop-left">Add an orb to an existing open source project on CircleCI</h3>
              <p>If you think your favorite open source project on CircleCI could benefit from the addition of an existing orb, see if you can add it yourself.</p>
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
import Meta from 'vue-meta'

 
Vue.use(VueMouseParallax)
Vue.use(Meta)
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
  metaInfo: {
    title: 'CircleCI 2019 Hacktoberfest | #Orbtoberfest',
    meta: [
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {name: 'description', content: 'Earn Limited-Edition CircleCI swag through the month of October. Join CircleCI during Hacktoberfest and contribute to open-source "orbs".'},
      // OpenGraph data (Most widely used)
      {property: 'og:title', content: 'CircleCI 2019 Hacktoberfest | #Orbtoberfest'},
      {property: 'og:site_name', content: 'CircleCI Hacktoberfest'},
      // The list of types is available here: http://ogp.me/#types
      {property: 'og:type', content: 'website'},
      // Should the the same as your canonical link, see below.
      {property: 'og:url', content: 'https://circleci-public.github.io/hacktoberfest'},
      {property: 'og:image', content: '@assets/swag-mockup.png'},
      // Often the same as your meta description, but not always.
      {property: 'og:description', content: 'Earn Limited-Edition CircleCI swag through the month of October. Join CircleCI during Hacktoberfest and contribute to open-source "orbs".'},

      // Twitter card
      {name: 'twitter:card', content: 'summary'},
      {name: 'twitter:site', content: 'https://circleci-public.github.io/hacktoberfest'},
      {name: 'twitter:title', content: 'CircleCI 2019 Hacktoberfest | #Orbtoberfest'},
      {name: 'twitter:description', content: 'Earn Limited-Edition CircleCI swag through the month of October. Join CircleCI during Hacktoberfest and contribute to open-source "orbs".'},
      // Your twitter handle, if you have one.
      {name: 'twitter:creator', content: '@CircleCI'},
      {name: 'twitter:image:src', content: '@assets/swag-mockup.png'},

      // Google / Schema.org markup:
      {itemprop: 'name', content: 'CircleCI 2019 Hacktoberfest | #Orbtoberfest'},
      {itemprop: 'description', content: 'Earn Limited-Edition CircleCI swag through the month of October. Join CircleCI during Hacktoberfest and contribute to open-source "orbs".'},
      {itemprop: 'image', content: '@assets/swag-mockup.png'}
      ],
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

#viewHome {
  overflow: hidden;
  padding-top: 5em;
}

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
  z-index: 5;
    .row {
      justify-content: center;

      #heroLearnMore {
        background-color: $color-accent-light !important;
      }
      #heroFindIssue {
        background-color: $color-accent;
      }
    }
}

#swagCol {
  flex: 2;
    img {
      border-radius: 0.3em;
    }
}

.resourceButton {
  display: block;
  width: 100%;
  padding: 0.5em;
  margin: 0.2em;
  background-color: #27A0B6;
  color: $color-white;
  border-radius: 0.1em;
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
  background-color: $color-primary-dark;
  padding-top: 2rem;
  .container {
    .row {
        .col {
          padding: 2em;
          justify-content: flex-start;
        }
    }
  }
}

.parallax-container, .parallax-element {
  width: 100%;
}

#gb1 {
  transform: translate(-6em, -3em);
}
#gb2 {
  transform: translate(8em, 8em);
}
#gb3 {
  transform: translate(6em, -2em);
}

.participateRow, .hacktoberfestOnCircleCI {
  z-index: 5;
}

.fancyText  {
  font-family: 'Kelly Slab', cursive;
  font-weight: bold;
}

.ResourceList {
  margin-top: 2em;
}

.hacktoberfestOnCircleCI {
  margin: 2em 0;
  h2, p {
    padding: 0.4em;
  }
  ul {
    text-align: left;
    font-weight: bold;
  }
}

#heroAnd {
  margin-left: 0.35em;
}

#orbAuthors {
  margin: 3em auto;
}

</style>
