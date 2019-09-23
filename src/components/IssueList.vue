<template>
  <div class="issueList">
    <div class="container">
      <section class="availableIssuesContainer" v-if="issues.length > 0">
        <h2>Or try one of these!</h2>
        <section class="availableIssuesBox">
          <a v-for="issue in issuesShort" v-bind:key="issue.key" :href="issue.html_url">
              <span class="repoMeta">{{getRepoName(issue.repository_url)}}</span>
              <h3 class="issueTitle">{{issue.title}}</h3>
              <span class="issueComments">
                <font-awesome-icon icon="comments" />
                {{issue.comments}}
              </span>
          </a>
        </section>
        <h2>Still looking for more?</h2>
        <p>View the full list of issues here</p>
        <a
          href="https://github.com/search?l=&o=desc&q=label%3Aorbtoberfest+state%3Aopen&s=comments&type=Issues"
          class="ctaButton"
        >View Full Issue List</a>
      </section>
      <section class="availableIssuesContainer" v-else>
        <h2>No issues left! 🎉</h2>
        <a href="https://github.com/topics/circleci-orbs" class="ctaButton">Check out orbs on GitHub</a>
      </section>
    </div>
  </div>
</template>

<style lang="scss">
.issueList {
  background-color: $color-primary-dark;
  margin: 2em 0;
  padding-bottom: 2em;
}
.availableIssuesContainer {
  text-align: center;
  padding: 1.2em;

  .availableIssuesBox {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 2em auto;
    font-size: 0.8em;

    a {
        display: flex;
        flex-direction: row;
        padding: 1em;
        background-color: $color-accent;
        margin: 0.3em 0;
        justify-content: space-between;
        align-items: center;
        text-overflow: ellipsis;
        white-space: wrap;
        transition: 0.3s;
        text-decoration: none;
        color: $color-white;

        &:hover {
            transform: scale(1.05);
        }

        .issueTitle {
        min-width: 50%;
        font-weight: bold;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        }

        .repoMeta {
        word-wrap: wrap;
        overflow: hidden;
        }

        .issueComments {
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
  props: ["issues"],
  computed: {
    issuesShort: function() {
      return this.issues.slice(0, 7);
    }
  }
};
</script>