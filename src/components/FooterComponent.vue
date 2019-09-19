<template>
    <footer class="footerContainer container">
        <div class="row">
            <figure id="footerLogo">
                <img src="@/assets/circle-logo-horizontal-white.svg" width="100em"  height="auto" alt="CircleCI logo">
            </figure>
            <div class="socialmediaRow">
                <font-awesome-icon class="socialmediaIcon" :icon="['fas', 'globe']" />
                <font-awesome-icon class="socialmediaIcon" :icon="['fab', 'twitter']" />
                <font-awesome-icon class="socialmediaIcon" :icon="['fab', 'linkedin']" />
                <font-awesome-icon class="socialmediaIcon" :icon="['fab', 'github']" />
            </div>
        </div>
        <div class="row">
            <div class="footerLinksRow">
                <ul>
                    <li>CircleCI</li>
                    <li>Hacktoberfest</li>
                    <li>Discuss</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div class="footerCopywrite">
               © 2019 Circle Internet Services, Inc., All Rights Reserved
            </div>
        </div>
    </footer>
</template>
<script>
export default {

}
</script>
<style lang="scss">
.footerContainer {
    .socialmediaRow {
        .socialmediaIcon {
            margin: 0.2em 1em;
        }
    }
    
    margin-top: 1em !important;
    padding: 0.2em;

    .row {
        justify-content: space-between;
        align-items: flex-end;

        ul {
            display: flex;
            flex-direction: row;
        }
    }
}
</style>