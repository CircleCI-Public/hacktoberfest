<template>
    <footer class="footerContainer">
        <div class="row container">
            <figure id="footerLogo">
                <img src="@/assets/circle-logo-horizontal-white.svg" width="100em"  height="auto" alt="CircleCI logo">
            </figure>
            <div class="socialmediaRow">
                <a href="https://circleci.com/"><font-awesome-icon class="socialmediaIcon" :icon="['fas', 'globe']" /></a>
                <a href="https://twitter.com/circleci"><font-awesome-icon class="socialmediaIcon" :icon="['fab', 'twitter']" /></a>
                <a href="https://www.linkedin.com/company/circleci/"><font-awesome-icon class="socialmediaIcon" :icon="['fab', 'linkedin']" /></a>
                <a href="https://www.facebook.com/circleci"><font-awesome-icon class="socialmediaIcon" :icon="['fab', 'facebook']" /></a>
                <a href="https://github.com/circleci-public/"><font-awesome-icon class="socialmediaIcon" :icon="['fab', 'github']" /></a>
            </div>
        </div>
        <div class="row">
            <div class="footerLinksRow">
                <ul>
                    <li><a href="https://circleci.com/">CircleCI</a></li>
                    <li><a href="https://hacktoberfest.digitalocean.com/">Hacktoberfest</a></li>
                    <li><a href="https://discuss.circleci.com/">Discuss</a></li>
                    <li><a href="https://circleci.com/blog/">Blog</a></li>
                </ul>
            </div>
            <div class="footerCopywrite">
               <span>© 2019 Circle Internet Services, Inc., All Rights Reserved</span>
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
    background-color: $color-primary-dark;
    a {
        color: $color-white;
    }
    .socialmediaRow {
        .socialmediaIcon {
            margin: 0.2em 1em;
        }
    }

    .footerLinksRow {
        li {
            margin: 0.2em 1em;
        }
    }
    
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