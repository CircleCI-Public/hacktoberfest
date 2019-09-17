<template>
    <section class="col container crystalBallComponent">
        <h1 id="findIssue">Find an issue</h1>
        <p>Click the crystal ball</p>
        <section class="col crystalBallContainer">
            <div @click="getRandomIssue" class="crystalBallGlass">
                <span class="star" id="star1"></span>
                <span class="star" id="star2"></span>
                <span class="star" id="star3"></span>
                <span class="star" id="star4"></span>
                <span class="star" id="star5"></span>
                <span class="star" id="star6"></span>
                <span class="star" id="star7"></span>
                <span class="star" id="star8"></span>
                <span class="star" id="star9"></span>
                <span class="star" id="star10"></span>
                <span class="star" id="star11"></span>
            </div>
            <div class="crystalBallBase">
                <span id="crystalBallBaseMain"></span>
            </div>
            <section class="fortuneContainer container">
                <article class="fortuneBox" v-if="this.clicked">
                    <header>
                        <h2>{{limitString(randomIssue.title, 38)}}</h2>
                    </header>
                    <p>{{limitString(randomIssue.body, 250)}}</p>
                    <footer v-if="this.errors.length < 1">
                        <div class="fortuneFooterRepo">{{getRepoName(randomIssue.repository_url)}}</div>
                        <div class="fortuneFooterComments">
                           {{randomIssue.comments}} <font-awesome-icon icon="comments" />
                        </div>
                    </footer>
                </article>
                <article v-else>
                    <h2>Ask the orb</h2>
                    <p>Receive an issue.</p>
                </article>
            </section>
        </section>
    </section>
</template>

<script>
import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faComments } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faComments)

Vue.component('font-awesome-icon', FontAwesomeIcon)

export default {
  data() {
    return {
      randomIssue: {},
      clicked: false,
    }
  },

  props: ['issues', 'errors'],

  methods: {
      getRandomIssue: function() {
        this.clicked = true
        if (this.errors.length > 0) {
            this.randomIssue = {"title": "Error! Unable to fetch issues", "body": "The GitHub API may not be responding. Please refresh shortly."}
        } else {
            this.randomIssue = this.issues[(Math.floor(Math.random() * Math.floor(this.issues.length)))]
        }
      }
  }
}

</script>

<style lang="scss">

.crystalBallComponent {
    text-align: center;
}

#findIssue {
    font-weight: bold;
    font-size: 3em;
}

.crystalBallContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.fortuneContainer{
    background-color: $color-primary-light;
    width: 80%;
    overflow: hidden;

    footer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
}
.crystalBallGlass {
    display: inline-block;
    width: 18em;
    height: 18em;
    margin: 0;
    border-radius: 50%;
    position: relative;
    background-color: $color-secondary;
    z-index: 2;


    &:after {
        width: 100%;
        height: 100%;
        content: "";
        position: absolute;
        top: 5%;
        left: 10%;
        border-radius: 50%;
        background: radial-gradient(circle at 50% 50%,  rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8) 14%, rgba(255, 255, 255, 0) 24%);
        -webkit-transform: translateX(-80px) translateY(-90px) skewX(-20deg);
        -moz-transform: translateX(-80px) translateY(-90px) skewX(-20deg);
        -ms-transform: translateX(-80px) translateY(-90px) skewX(-20deg);
        -o-transform: translateX(-80px) translateY(-90px) skewX(-20deg);
        transform: translateX(-80px) translateY(-90px) skewX(-20deg);
        filter: blur(10px);
    }

    .star {
        display: block;
        position: absolute;
        background-color: white;
        height: 0.2em;
        width: 0.2em;
        border-radius: 50%;
        box-shadow: 0px 0px 0.4em 0.08em white;
        opacity: 0.7;
    }
    
    #star1 {
        left: 15em;
        top: 8em;
    }
    #star2 {
        left: 8em;
        top: 15em;
    }
    #star3 {
        left: 1em;
        top: 2em;
    }
    #star4 {
        left: 7em;
        top: 6em;
    }
    #star5 {
        left: 18em;
        top: 3em;
    }
    #star6 {
        left: 3em;
        top: 11em;
    }
    #star7 {
        left: 16em;
        top: 14em;
    }
    #star8 {
        left: 2.2em;
        top: 15.2em;
    }
    #star9 {
        left: 14em;
        top: 16.4em;
    }
    #star10 {
        left: 6em;
        top: 0.3em;
    }
    #star11 {
        left: 2.8em;
        top: 3em;
    }
}

#crystalBallBaseMain {
    display: inline-block;
    width: 18em;
    height: 4em;
    background-color: $color-accent;
    border-radius: 70%  70% 25% 25%;
    position: relative;
    top: -2em;

}
.fortuneContainer {
    width: 80%;


    .fortuneBox {
    text-align: center;
    display: flex;
    flex-direction: column;
    padding: 2em;
    }
}


</style>