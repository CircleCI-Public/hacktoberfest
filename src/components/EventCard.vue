<template>
    <article class="eventCard">
        <figure>
            <img :src="image" alt="">
        </figure>
        <div>
            <span v-if="isOver">Thanks to everyone who came!</span>
            <span>{{formateDate}}</span>
            <span>{{location}}</span>
        </div>
        <a :href="link" class="ctaButton">Eventbrite</a>
    </article>
</template>

<style lang="scss">

.eventCard {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 20em;
    background-color: $color-tertiary;
    padding: 1em;
    margin-bottom: 0.4em;

    span {
        display: block;
    }
}

</style>

<script>
export default {
    props: ['date', 'location', 'link', 'image'],
    computed: {
        formateDate() {
            const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
            var dateObject = new Date(this.date)
            var getMonth = months[dateObject.getMonth()]
            var getDay = dateObject.getDay()
            return getMonth + " " + getDay
        },
        isOver() {
            var today = new Date()
            var eventDate = new Date(this.date)
            if (eventDate - today > 0) {
                return false
            } else {
                return true
            }
        }
    }
}

</script>