# Hardlait Website 2.9

## Project commands

1. Install dependencies.

```bash
npm install
```

2. Run the project for local dev. This will start a hot-reloading server at `localhost:3000`.

```bash
npm run dev
```

```bash
npx netlify-cms-proxy-server
```

3. Build the app for server-side rendered deployment. See more about **Universal SSR** in the [Nuxt.js docs](https://nuxtjs.org/guide#server-rendered-universal-ssr-).

```bash
npm run build

# And to serve that deployment...
npm run start
```

4. Generate a fully pre-rendered static site. See more [in the docs](https://nuxtjs.org/guide#static-generated-pre-rendering-).

```bash
npm run generate
```

### Personalize setup

1. Copy and change the .env-file

   - `cp .example.env .env`
   - Then change the values

---

1. **[Install git-lfs](https://git-lfs.github.com/)** on your computer and remove the `#` in the project's `.gitattributes`

2. **Setup Netlify LM** by following [these steps](https://docs.netlify.com/large-media/setup/). (In short: `netlify plugins:install netlify-lm-plugin` → `netlify lm:install` → `netlify login` → `netlify link` → `netlify lm:setup` → commit the `.lfsconfig` file.)

## Troubleshooting

- > I added a CSS class, but it doesn't show
- It is most likely purged by PurgeCSS, make sure it is whitelisted in `purgeCSS` in `nuxt.config.js`

- > I can’t log in to `/admin` on localhost and use my local git as CMS
- Open up a new terminal and run `npx netlify-cms-proxy-server`, the login again.

- > I tried logging into/saving in Netlify CMS, but I can't
- It may be that you haven't [enabled Netlify Identity](https://app.netlify.com/sites/YOUR_NETLIFY_SITE_SLUG/settings/identity) or [setup the Git Gateway](https://app.netlify.com/sites/YOUR_NETLIFY_SITE_SLUG/settings/identity#services) correctly, [check the docs](https://www.netlifycms.org/docs/git-gateway-backend/)

- > I get Netlify emails but can't use them to login etc.
- It is probably because the 'netlify-identity-widget' is only included in the `/admin`-page. [Follow the advice here](https://answers.netlify.com/t/common-issue-netlify-cms-git-gateway-email-not-confirmed/10690) or enable the included email-templates’ paths in Netlify, under [Site Settings > Identity > Emails](https://app.netlify.com/sites/YOUR_NETLIFY_SITE_SLUG/settings/identity) and there you can set `/static/emails/THE_TEMPLATE_NAME.html` for each template. This will make sure to use the correct links inside the emails. Look at @audetcameron’s [screenshot here](https://github.com/Knogobert/ntn-boilerplate/issues/8#issuecomment-841469850).

- > "This repository is configured for Git LFS but 'git-lfs' was not found on your path."
- Install git-lfs then run `git lfs install` in project root. Then to download the images, run `git lfs pull`. Or if you don't want to download the files/can't login to the lfs server, run `git lfs install --skip-smudge` instead.

- > I can’t get Git LFS to run correctly on Netlify
- Make sure that you have in your [Netlify build settings](https://app.netlify.com/sites/YOUR_NETLIFY_SITE_SLUG/settings/deploys#environment-variables), set the environment variable `GIT_LFS_ENABLED` : `true`. Then also make sure that Netlify LM is setup as [their docs](https://docs.netlify.com/large-media/setup/) specify.
