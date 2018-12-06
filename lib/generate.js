const Faker = require('faker')
const _ = require("lodash")

module.exports = function () {
        const tweets = _.times(100, function (n) {
        	return {
        		id: n,
        		name: Faker.name.findName(),
        		handle: `@${Faker.internet.userName()}`,
        		date: Faker.date.recent(),
                body: Faker.lorem.lines(),
                hash_tag: `#${Faker.commerce.product()}`
        	}
        })
        const users = tweets.map( (tweet, n) => {
            return {
                id: n,
                name: tweet["name"],
                handle: tweet["handle"],
                created_at: Faker.date.past(),
                avatar: Faker.image.avatar(),
            }
        })
		return {
            tweets: tweets,
            users: users
			}
        }