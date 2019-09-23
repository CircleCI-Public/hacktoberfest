<template>
    <nav id="navComponent" class="row">
        <div class="navMenu container row">
            <figure id="footerLogo">
                <img src="@/assets/circle-logo-horizontal-white.svg" width="100em"  height="auto" alt="CircleCI logo">
            </figure>
            <a href="#howToParticipate">How to participate</a>
            <a href="#hacktoberfestOnCircleCI">Hacktoberfest on CircleCI</a>
            <a href="#crystalBall">Find an issue</a>
            <a href="#ResourceList">Resources</a>
            <a href="#EventList" id="eventNav" >Events</a>
            <a href="#OtherOpporunities">Other opportunities</a>
        </div>
      </nav>
</template>

<script>

</script>

<style lang="scss">
#navComponent {
    background-color: $color-primary-dark;
    z-index: 50;

    #eventNav {
        &:before {
            content: '';
            display: inline-block;
            width: 0.4em;
            height: 0.4em;
            border-radius: 50%;
            background-color: $color-tertiary;
            margin: 0.1em;
        }
    }
}
.navMenu {
    z-index: 10;
    text-align: center;
    justify-content: center;
    align-items: center;
    padding: 0.4em;
    font-family: 'Kelly Slab', cursive;

    * {
        color: $color-white;
        margin: 0 1em;
        padding: 0.2em;
    }
}

</style>