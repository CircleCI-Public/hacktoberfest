<template>
    <div class="issueList container">
        <section class="availableIssuesContainer" v-if="issues.length > 0">
            <h2>Or try one of these!</h2>
            <ul class="availableIssuesBox">
                <li v-for="issue in issuesShort" v-bind:key="issue.key">
                    <span class="repoMeta">
                        {{getRepoName(issue.repository_url)}}
                    </span>
                    <h3 class="issueTitle">
                        {{limitString(issue.title, 64)}}
                    </h3>
                    <span class="issueComments">
                        {{issue.comments}} <font-awesome-icon icon="comments" />
                    </span>
                </li>
            </ul>
            <h2>Still looking for more?</h2>
            <p>View the full list of issues here</p>
            <a href="https://github.com/search?l=&o=desc&q=label%3Aorbtoberfest+state%3Aopen&s=comments&type=Issues" class="ctaButton">View Full Issue List</a>
        </section>
        <section class="availableIssuesContainer" v-else>
            <h2>No issues left! 🎉</h2>
            <a href="https://github.com/topics/circleci-orbs" class="ctaButton">Check out orbs on GitHub</a>
        </section>
    </div>
</template>

<style lang="scss">
    .availableIssuesContainer {
    text-align: center;
    font-size: 0.8em;
    padding: 1.5em;

    .availableIssuesBox {
        display: flex;
        flex-direction: column;
        width: 80%;
        margin: 0em auto;
        font-size: 0.8em;
        
            
        li{
            display: flex;
            flex-direction: row;
            padding: 1em;
            background-color: $color-accent-light;
            margin: 0.2em;
            justify-content: space-between;
            align-items: center;
            text-overflow: ellipsis;
            white-space: wrap;

            .issueTitle{
                min-width: 50%;
                font-weight: bold;
            }

            .repoMeta {
                word-wrap: wrap;
                overflow: hidden;
            }

            .issueComments{
                min-width: 3em;
            }

            * {
                padding: 0.2em;
            }
        }
    }
}
</style>

<script>
export default {
    props: ['issues'],
    computed: {
        issuesShort: function() {
            return this.issues.slice(0, 7)
        }
    }
}

</script>