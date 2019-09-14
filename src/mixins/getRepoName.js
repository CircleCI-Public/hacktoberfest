export default {
    methods: {
        getRepoName: (repoURL) => {
            return repoURL.slice(29, repoURL.length)
          }
    }
}