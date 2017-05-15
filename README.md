This app lets you retrieve information from Kitsu. You can search users, anime, and manga in the default compact mode, or in extended mode. By logging in with your Kitsu credentials via `/login`, you can enable additional features, specifically following users and adding/editing media. If you don't have an account, head over to [Kitsu](https://kitsu.io) to get started.

#### Commands

```
/user [(ex)tended] [username] - Lookup a User
/user [(ex)tended] [@username] - Lookup by Slack name
/anime [(ex)tended] [anime title] - Lookup an Anime
/manga [(ex)tended] [manga title] - Lookup a Manga
/group [(ex)tended] [group name] - Lookup a Group
/login [username] [password] - Login to Kitsu
/kitsuhelp - Show this message
```

#### Installation

##### Use the official Slack app

<a href="https://slack.com/oauth/authorize?scope=commands,links:read,links:write&client_id=12303250033.57925979077"><img alt="Add to Slack" height="40" width="139" src="https://platform.slack-edge.com/img/add_to_slack.png" srcset="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x" /></a>

##### Host it yourself

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

#### Privacy Policy

Your Kitsu credentials are not stored. They are exchanged for a key which is stored in a private database which is used to make authenticated requests to the Kitsu API on your behalf.
