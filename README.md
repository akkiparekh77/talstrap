# ![Talstrap](https://static.talview.com/icons/storybook-talview.svg)

A React component library which implements the talview design system.

## Documentation

The components can be viewed in this [Storybook](https://s3-eu-west-1.amazonaws.com/silhouette.freightlab.io/latest/index.html).

## Installation

To install the core components, run the following command:

```sh
yarn add @talview/talstrap
```

## Usage

First, wrap the application with a `<ThemeProvider />`.

```tsx
import { FC } from 'react'
import { ThemeProvider, themes } from '@talview/talstrap'

export const App: FC = {
  return (
    <ThemeProvider themes={themes.base}>
      // component tree
    </ThemeProvider>
  )
}
```

After this it will be possible to use components from the library, as in the following example.

```tsx
import { FC } from 'react'
import { Button, makeStyles, Theme } from '@talview/talstrap'

const useStyles = makeStyles<Theme>((theme) => ({
  button: {
    margin: theme.spacing(0, 1),
  },
}))

export const Example: FC = (props) => {
  const classes = useStyles()

  return (
    <Button className={classes.button} {...props}>
      Example
    </Button>
  )
}
```

## Building Storybook

To generate a static storybook page, run the following command:

```sh
yarn build-storybook
```

The built files can be found in the `storybook-static` folder.

## Visual Regression Testing

To run visual regression tests, install [Docker](https://www.docker.com/) on your local machine, run it and then build storybook. After this, run the following command:

```sh
yarn visual-test
```

To update image snapshots locally, run the following command:

```sh
yarn visual-test -u
```

## Definition of Done for new components

- Build new component
- Create docs / storybook
- Add integration tests (if necessary)
- Add image screenshot tests
- Pass review with designers
- Integrate with web apps (SHIP, TMS) - rollout to production
- Do showcase / announcement for engineering teams

## Structure for adding Material UI re-exports

- Everything that exported directly from `@material-ui/core` -> `src/components/index.ts`
- Everything related to `@material-ui/styles` -> `src/styles/index.ts`
- From `src/index.ts` please only re-export Typescript types definitions without implementation - they're not supported by storybook yet and it would fail to build
- All additional types that are not used directly, but required for correct Typescript types resolution would go in the end of `index.ts` files under this note: `// We don't use these exports directly, but need to export them for other Typescript types resolution`

## Semantic releases

Lerna will automatically detect how to bump the versions of the packages based on the commit messages. Check out [Conventional Commits](https://conventionalcommits.org/) to understand how to write your commit messages. If you don't follow the schema lerna will just bump the patch version. Also these messages will be used to generate a `CHANGELOG` in each of the packages. Writing proper commit messages helps other teams to adapt to the latest changes. You can test locally how lerna would bump the packages with `lerna publish --conventional-commits` (and ctrl+c). It is highly discouraged to publish from local! The risk of pushing wrong files is very high. Only publish using CircleCI.

## Squash and merge

Squash and merge using [conventional commits](https://conventionalcommits.org/)



