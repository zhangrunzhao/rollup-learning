import { Plugin } from "rollup"

const build = (): Plugin => {
  return {
    name: 'build',
    options() {
      console.log('options')
    },
    buildStart() {
      console.log('buildStart')
    },
    buildEnd() {
      console.log('buildEnd')
    }
  }
}

export default build;
