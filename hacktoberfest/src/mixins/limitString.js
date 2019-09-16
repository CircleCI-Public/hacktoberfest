export default {
    methods: {
        limitString: function (inputString, limit) {
            var result = inputString
            if (result.length > (limit - 1)) {
                result = result.substring(0, (limit - 3)) + "..."
            }
            return result
        }
    }
}