import initStoryshots from '@storybook/addon-storyshots'
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer'
import path from 'path'

const staticStorybookPath = path.join(__dirname, '..', 'storybook-static')

const getMatchOptions = ({ context: { kind, story }, url }) => {
  return {
    failureThreshold: 0,
    failureThresholdType: 'percent',
  }
}

const getGotoOptions = ({ context, url }) => {
  return {
    waitUntil: 'networkidle0',
  }
}

const beforeScreenshot = async (page, { context: { kind, story }, url }) => {
  // disable animations
  await page.evaluate(() =>
    Array.from(
      // eslint-disable-next-line no-undef
      document.querySelectorAll('.MuiCircularProgress-circleIndeterminate, .MuiCircularProgress-indeterminate')
    ).forEach((node) => node.setAttribute('style', 'animation: none'))
  )

  // add delay to make sure that page is loaded
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve()
    }, 1000)
  )
}

const testOptions = imageSnapshot({
  storybookUrl: `file://${staticStorybookPath}`,
  beforeScreenshot,
  getGotoOptions,
  getMatchOptions,
})

initStoryshots({
  suite: 'Image storyshots',
  storyNameRegex: /Examples/,
  test: testOptions,
})
