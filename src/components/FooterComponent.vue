<template>
    <footer class="footerContainer container">
        <div class="row">
            <figure id="footerLogo">
                <img src="https://via.placeholder.com/200x50" alt="CircleCI logo">
            </figure>
            <div class="socialmediaRow">
                <span>*</span>
                <span>*</span>
                <span>*</span>
                <span>*</span>
                <span>*</span>
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