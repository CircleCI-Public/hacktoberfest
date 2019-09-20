<template>
  <div id="app">
    <article class="col hero container">
      <div class="row mainHeroRow">
        <figure class="col">
          <div class="gamaburst" id="gb1"></div>
          <div class="gamaburst" id="gb2"></div>
          <div class="gamaburst" id="gb3"></div>
          <parallax-container class="col"><parallax-element :parallaxStrength="20" :type="'depth'" class="col heroImage">
            <img src="@/assets/orbtoberfest-header_graphic.svg" alt="CircleCI Orbtoberfest" id="OrbtoberfestThemeLogo">
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
              <p>This year, CircleCI invites you to contribute to our orbs open source project, which we’re calling <span class="fancyText">#Orbtoberfest</span></p>
              <div class="row">
                <a href="https://hacktoberfest.digitalocean.com/" class="ctaButton" id="heroLearnMore">Learn more</a>
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
            <p>Register for hacktoberfest at <a href="https://hacktoberfest.digitalocean.com/">hacktoberfest.digitalocean.com/</a>.</p>
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
        <div class="col hacktoberfestOnCircleCI">
          <a name="hacktoberfestOnCircleCI"></a>
          <h1 class="desktop-left">What you win</h1>
          <p>If you submit at least four valid PRs you will earn a limited-edition Hacktoberfest T-shirt.</p>
          <h2 class="desktop-left">Bonus:</h2>
          <p>If you complete all four of your PRs on CircleCI, <a href="https://docs.google.com/forms/d/1-MbzLy0m1eRLjeye9wu76fYkzcX5A3PvgKd09EhVObY/viewform">fill out this form to receive additional CircleCI Hacktoberfest swag</a> while supplies last.</p>
          <a href="https://docs.google.com/forms/d/1-MbzLy0m1eRLjeye9wu76fYkzcX5A3PvgKd09EhVObY/viewform" class="ctaButton">Enter your PRs</a>
        </div>
        <figure class="col heroImage" id="swagCol">
          <img src="@/assets/hacktober19_swag-mockup.png" alt="CircleCI Orbtoberfest">
        </figure>
      </div>
    </article>
    <article class="col hero container">
      <h1>Participating in Hacktoberfest on CircleCI</h1>
      <div class="row">
        <div class="col">
          <p>Contributing to <a href="https://circleci.com/orbs/">CircleCI orbs</a> is one easy way to complete the Hacktoberfest challenge. CircleCI orbs are open source, reusable packages of config that can help speed up development and connect your favorite tools to your CI pipeline. </p>
        </div>
        <div class="col">
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
    <div class="row container hero">
      <div class="col">
        <div class="containerSmall">
          <p>If you are an orb author, make sure your repository is properly tagged with the ‘circleci-orbs’ topic. We encourage authors to open issues for their orb and tag those issues with <span class="orbtoberfestLabel">‘orbtoberfest’</span> and <span class="orbtoberfestLabel">‘hacktoberfest.’</span> </p>
        </div>
        <div class="containerSmall">
            <p>Join the #orbtoberfest discussion on our community forum for ideas, additional information, and to ask any questions. View Discuss Post Button with LINK TO DISCUSS POST </p>
        </div>
      </div>
    </div>
    <a name="crystalBall"></a>
    <CrystalBall :issues="issues" :errors="errors" />
    <IssueList :issues="issues" :errors="errors" />
    <section class="col hero container">
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
      <p>CircleCI is hosting meetups around the country to encourage participation in Hacktoberfest. Come learn how to complete the challenge and network with other open source contributors at one of our upcoming events:</p>
      <div class="row">
        <div class="col">
          <EventCard eventMonth="October" eventDay="10" link="#" location="Virtual Event" />
        </div>
        <div class="col">
          <EventCard eventMonth="October" eventDay="15" link="#" location="Seattle, WA" />
        </div>
        <div class="col">
          <EventCard eventMonth="October" eventDay="28" link="#" location="New York, NY" />
        </div>
      </div>
    </section>
    <section class="col hero opportunitySection">
      <div class="col container">
        <a name="OtherOpporunities"></a>
        <h2 class="desktop-left">Other CircleCI and Hacktoberfest opportunities</h2>
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

#app {
  overflow: hidden;
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
  background-color: $color-primary-light;
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
      justify-content: baseline;

        .col {
          padding: 2em;
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

.hacktoberfestOnCircleCI {
  margin: 2em 0;
  h2, p {
    padding: 0.4em;
  }
}

</style>
