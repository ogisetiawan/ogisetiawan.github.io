import createPreset from 'conventional-changelog-conventionalcommits'

/** @see https://conventional-changelog.js.org/presets/conventional-commits/options/ */
export default createPreset({
  types: [
    { type: 'feat', section: 'Features' },
    { type: 'feature', section: 'Features' },
    { type: 'fix', section: 'Bug Fixes' },
    { type: 'migrate', section: 'Migrations' },
    { type: 'perf', section: 'Performance Improvements' },
    { type: 'refactor', section: 'Refactoring', effect: 'changelog' },
    { type: 'style', section: 'Styles', effect: 'changelog' },
    { type: 'docs', section: 'Documentation', effect: 'changelog' },
    { type: 'build', section: 'Build', effect: 'changelog' },
    { type: 'ci', section: 'CI', effect: 'changelog' },
    { type: 'revert', section: 'Reverts' },
    { type: 'chore', effect: 'hidden' },
    { type: 'test', effect: 'hidden' },
  ],
})
