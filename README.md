# docusaurusFeedbackWidget

I tried Google Analytics (GA4), Plausible, and PostHog. My preferences are
based on my experience:

- I don't know anything about using tracking information for marketing
- I like simple things to be simple
- I prefer to grab data from the datastore with an API call over looking at a report on a website

I could not view my data easily with GA4 or Plausible (remember, I don't do marketing, and these are tools
aimed at marketing analysts).  I tried using the Plausible API, but could not retrieve multiple properties.

> Note
>
> I am outside of my area, I don't know these tools and I don't want to invest too much time if I can avoid it. I would love it if people who know Plausible or GA4 could chime in and help make getting the reader feedback into a simple format for us to use, as I am sure there is a case to be made for having the data in common marketing tools.

With PostHog I sent my event, it popped up in the event list, and I selected the checkbox to **Hide PostHog properties** leaving me with a display of the properties that I sent:

As far as using an API to extract data, I have not tried with PostHog yet, but from glancing at the docs I can use SQL, so I will be good.

## PostHog

- Sign up for a PostHog account, I am on the free tier
- `yarn add posthog-js`
- `yarn add posthog-docusaurus`
- See the PostHog [integration docs](https://posthog.com/docs/libraries/docusaurus)

At this point you will get all of the normal page views, button clicks, etc. recorded in PostHog. The `feedback.tsx` component also uses `posthog-js` to post the custom event `Feedback`.

In the `Feedback.tsx` component PostHog is initialized:

```js
import posthog from 'posthog-js'
posthog.init('phc_Krs7r8xNYU3OeIItMy5lOoPcTnxJmrX5zYn5JMp2izy', { api_host: 'https://app.posthog.com' })
```

and then an event is sent with `posthog.capture`:

```js
posthog.capture('Feedback', {sentiment: rating + '/5', page: window.location.pathname, text: notes});
```

## Sign up for Plausible, or host your own.

## Create a new docusaurus classic

## Grab the Feedback component from Hasura

## Add scss support to Docusaurus

## Swizzle the DocItem Footer (eject)

## Add the Feedback component to Footer

## Edit the Feedback component to remove Segment and add Pausible

## Create a `Feedback` "Goal" in Plausible

## Create "Custom Properties" in Plausible

- text
- page
- sentiment

