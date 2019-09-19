<template>
    <article class="eventCard">
        <div>
            <span v-if="isOver">Thanks to everyone who came!</span>
            <h3>{{formateDate}}</h3>
            <h2>{{location}}</h2>
        </div>
        <a :href="link" class="ctaButton">Learn more</a>
    </article>
</template>

<style lang="scss">

.eventCard {
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
    props: ['date', 'location', 'link'],
    computed: {
        formateDate() {
            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
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