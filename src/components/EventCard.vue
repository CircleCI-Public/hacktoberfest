<template>
    <article class="eventCard">
        <div>
            <h3>{{eventMonth}} {{eventDay}}</h3>
            <h2>{{location}}</h2>
        </div>
        <a :href="this.link" class="ctaButton">Learn more</a>
        <div class="sponsorImage">
            <span>Special Sponsor</span>
            <img :src="require(`@/assets/${sponsor}-logo.png`)" v-bind:alt="this.sponsor">
        </div>
    </article>
</template>

<style lang="scss">

.eventCard {

    .sponsorImage {
        max-width: 8em;
        opacity: 0.6;
        margin-top: 2em;
    }
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 20em;
    padding: 1em;
    margin-bottom: 0.4em;
    font-size: 0.8em;

    h1, h2, h3 {
        padding: 0.2em;
    }

    span {
        display: block;
    }
}

</style>

<script>
export default {
    props: ['eventMonth', 'eventDay', 'location', 'link', 'sponsor'],
}

</script>