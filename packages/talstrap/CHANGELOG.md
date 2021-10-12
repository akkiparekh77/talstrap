# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [3.1.7](https://github.com/talview/talstrap/compare/@talview/talstrap@3.1.6...@talview/talstrap@3.1.7) (2021-10-01)

**Note:** Version bump only for package @talview/talstrap





## [3.1.6](https://github.com/talview/talstrap/compare/@talview/talstrap@3.1.5...@talview/talstrap@3.1.6) (2021-09-22)

**Note:** Version bump only for package @talview/talstrap





## [3.1.5](https://github.com/talview/talstrap/compare/@talview/talstrap@3.1.4...@talview/talstrap@3.1.5) (2021-09-17)

**Note:** Version bump only for package @talview/talstrap





## [3.1.4](https://github.com/talview/talstrap/compare/@talview/talstrap@3.1.3...@talview/talstrap@3.1.4) (2021-09-16)

**Note:** Version bump only for package @talview/talstrap





## [3.1.3](https://github.com/talview/talstrap/compare/@talview/talstrap@3.1.2...@talview/talstrap@3.1.3) (2021-09-16)

**Note:** Version bump only for package @talview/talstrap





## [3.1.2](https://github.com/talview/talstrap/compare/@talview/talstrap@3.1.1...@talview/talstrap@3.1.2) (2021-09-13)

**Note:** Version bump only for package @talview/talstrap





## [3.1.1](https://github.com/talview/talstrap/compare/@talview/talstrap@3.1.0...@talview/talstrap@3.1.1) (2021-08-31)

**Note:** Version bump only for package @talview/talstrap





# [3.1.0](https://github.com/talview/talstrap/compare/@talview/talstrap@3.0.0...@talview/talstrap@3.1.0) (2021-08-31)


### Features

* **DatePicker:** Forwarding ref for DatePicker component ([ffa02a0](https://github.com/talview/talstrap/commit/ffa02a011c4b23ba8810f4dde342d1f0cd8a827d))





# [3.0.0](https://github.com/talview/talstrap/compare/@talview/talstrap@2.2.0...@talview/talstrap@3.0.0) (2021-08-19)


* Renamed key prop in Table cell (#2363) ([f0fe48b](https://github.com/talview/talstrap/commit/f0fe48b947570cb6c8bcc5f433c3649565cbae88)), closes [#2363](https://github.com/talview/talstrap/issues/2363)


### BREAKING CHANGES

* `key` in ExtendedTable components is replaced by
`cellKey`.

# Release notes

Replaced the `key` in CellProps to `cellKey`

## Reason for change

Since `key` is a special prop and is not accessible by the cell component, destructuring  caused long warnings in the chrome console

## Analysis of effects

Files using components: `ExtendedTable`, `ExtendedTableHead`, `ExtendedTableRow` and `ExtendedTableCell` are affected.

## Migration path

Basically, the columns object being passed to the components, the `key` prop needs to be replaced by `cellKey`





# [2.2.0](https://github.com/talview/talstrap/compare/@talview/talstrap@2.1.0...@talview/talstrap@2.2.0) (2021-08-11)


### Features

* Added all accordion related components ([#2359](https://github.com/talview/talstrap/issues/2359)) ([cc7e7a9](https://github.com/talview/talstrap/commit/cc7e7a9627745528dac403df6743061287bfdd3a))





# [2.1.0](https://github.com/talview/talstrap/compare/@talview/talstrap@2.0.9...@talview/talstrap@2.1.0) (2021-08-11)


### Features

* Add accordion from MUI ([#2358](https://github.com/talview/talstrap/issues/2358)) ([ccaa11c](https://github.com/talview/talstrap/commit/ccaa11c511f0c31c34ab5b5612b3fc123df38b7d))





## [2.0.9](https://github.com/talview/talstrap/compare/@talview/talstrap@2.0.8...@talview/talstrap@2.0.9) (2021-08-09)

**Note:** Version bump only for package @talview/talstrap





## [2.0.8](https://github.com/talview/talstrap/compare/@talview/talstrap@2.0.7...@talview/talstrap@2.0.8) (2021-08-02)

**Note:** Version bump only for package @talview/talstrap





## [2.0.7](https://github.com/talview/talstrap/compare/@talview/talstrap@2.0.6...@talview/talstrap@2.0.7) (2021-07-26)


### Bug Fixes

* visual tests ([#2331](https://github.com/talview/talstrap/issues/2331)) ([226b459](https://github.com/talview/talstrap/commit/226b459c03d7f2c3170d1f46839979040c754d7f))





## [2.0.6](https://github.com/talview/talstrap/compare/@talview/talstrap@2.0.5...@talview/talstrap@2.0.6) (2021-07-20)

**Note:** Version bump only for package @talview/talstrap





## [2.0.5](https://github.com/talview/talstrap/compare/@talview/talstrap@2.0.4...@talview/talstrap@2.0.5) (2021-07-19)

**Note:** Version bump only for package @talview/talstrap





## [2.0.4](https://github.com/talview/talstrap/compare/@talview/talstrap@2.0.3...@talview/talstrap@2.0.4) (2021-07-08)

**Note:** Version bump only for package @talview/talstrap





## [2.0.3](https://github.com/talview/talstrap/compare/@talview/talstrap@2.0.2...@talview/talstrap@2.0.3) (2021-07-08)

**Note:** Version bump only for package @talview/talstrap





## [2.0.2](https://github.com/talview/talstrap/compare/@talview/talstrap@2.0.1...@talview/talstrap@2.0.2) (2021-06-23)

**Note:** Version bump only for package @talview/talstrap





## [2.0.1](https://github.com/talview/talstrap/compare/@talview/talstrap@2.0.0...@talview/talstrap@2.0.1) (2021-06-14)

**Note:** Version bump only for package @talview/talstrap





# [2.0.0](https://github.com/talview/talstrap/compare/@talview/talstrap@0.14.2...@talview/talstrap@2.0.0) (2021-06-10)


### chore

* **FH-18072:** Raise React version to 17 ([#2218](https://github.com/talview/talstrap/issues/2218)) ([a9029e7](https://github.com/talview/talstrap/commit/a9029e70069acb3dccf40aeef2aa6ca199993e6a))


### BREAKING CHANGES

* **FH-18072:** talstrap is now using React 17

* Fix tests

* Run prettier

* Bump to major version 1 to start proper breaking changes tracking





## [0.14.2](https://github.com/talview/talstrap/compare/@talview/talstrap@0.14.1...@talview/talstrap@0.14.2) (2021-06-04)

**Note:** Version bump only for package @talview/talstrap





## [0.14.1](https://github.com/talview/talstrap/compare/@talview/talstrap@0.14.0...@talview/talstrap@0.14.1) (2021-05-31)

**Note:** Version bump only for package @talview/talstrap





# [0.14.0](https://github.com/talview/talstrap/compare/@talview/talstrap@0.13.31...@talview/talstrap@0.14.0) (2021-05-27)


### Features

* Added notes icon ([#2197](https://github.com/talview/talstrap/issues/2197)) ([1881f1a](https://github.com/talview/talstrap/commit/1881f1a6ecd592d26d2e7dc670e429b11b257acb))





## [0.13.31](https://github.com/talview/talstrap/compare/@talview/talstrap@0.13.30...@talview/talstrap@0.13.31) (2021-05-17)

**Note:** Version bump only for package @talview/talstrap





## [0.13.30](https://github.com/talview/talstrap/compare/@talview/talstrap@0.13.29...@talview/talstrap@0.13.30) (2021-05-12)

**Note:** Version bump only for package @talview/talstrap





## [0.13.29](https://github.com/talview/talstrap/compare/@talview/talstrap@0.13.27...@talview/talstrap@0.13.29) (2021-05-10)

**Note:** Version bump only for package @talview/talstrap





## [0.13.28](https://github.com/talview/talstrap/compare/@talview/talstrap@0.13.27...@talview/talstrap@0.13.28) (2021-05-10)

**Note:** Version bump only for package @talview/talstrap





## [0.13.27](https://github.com/talview/talstrap/compare/@talview/talstrap@0.13.26...@talview/talstrap@0.13.27) (2021-05-03)

**Note:** Version bump only for package @talview/talstrap





## [0.13.26](https://github.com/talview/talstrap/compare/@talview/talstrap@0.13.25...@talview/talstrap@0.13.26) (2021-04-29)

**Note:** Version bump only for package @talview/talstrap





## [0.13.25](https://github.com/talview/talstrap/compare/@talview/talstrap@0.13.24...@talview/talstrap@0.13.25) (2021-04-29)

**Note:** Version bump only for package @talview/talstrap





## [0.13.24](https://github.com/talview/talstrap/compare/@talview/talstrap@0.13.23...@talview/talstrap@0.13.24) (2021-04-28)

**Note:** Version bump only for package @talview/talstrap





## [0.13.23](https://github.com/talview/talstrap/compare/@talview/talstrap@0.13.22...@talview/talstrap@0.13.23) (2021-04-28)

**Note:** Version bump only for package @talview/talstrap





## [0.13.22](https://github.com/talview/talstrap/compare/@talview/talstrap@0.13.21...@talview/talstrap@0.13.22) (2021-04-26)

**Note:** Version bump only for package @talview/talstrap





## [0.13.21](https://github.com/talview/talstrap/compare/@talview/talstrap@0.13.20...@talview/talstrap@0.13.21) (2021-04-22)

**Note:** Version bump only for package @talview/talstrap





## [0.13.20](https://github.com/talview/talstrap/compare/@talview/talstrap@0.13.19...@talview/talstrap@0.13.20) (2021-04-22)

**Note:** Version bump only for package @talview/talstrap





## [0.13.19](https://github.com/talview/talstrap/compare/@talview/talstrap@0.13.18...@talview/talstrap@0.13.19) (2021-04-19)

**Note:** Version bump only for package @talview/talstrap





## [0.13.18](https://github.com/talview/talstrap/compare/@talview/talstrap@0.13.17...@talview/talstrap@0.13.18) (2021-04-15)

**Note:** Version bump only for package @talview/talstrap





## [0.13.17](https://github.com/talview/talstrap/compare/@talview/talstrap@0.13.16...@talview/talstrap@0.13.17) (2021-04-09)

**Note:** Version bump only for package @talview/talstrap





## [0.13.16](https://github.com/talview/talstrap/compare/@talview/talstrap@0.13.15...@talview/talstrap@0.13.16) (2021-04-06)

**Note:** Version bump only for package @talview/talstrap





## [0.13.15](https://github.com/talview/talstrap/compare/@talview/talstrap@0.13.14...@talview/talstrap@0.13.15) (2021-03-31)

**Note:** Version bump only for package @talview/talstrap





## [0.13.14](https://github.com/talview/talstrap/compare/@talview/talstrap@0.13.13...@talview/talstrap@0.13.14) (2021-03-30)

**Note:** Version bump only for package @talview/talstrap





## [0.13.13](https://github.com/talview/talstrap/compare/@talview/talstrap@0.13.12...@talview/talstrap@0.13.13) (2021-03-26)

**Note:** Version bump only for package @talview/talstrap





## [0.13.12](https://github.com/talview/talstrap/compare/@talview/talstrap@0.13.11...@talview/talstrap@0.13.12) (2021-03-25)

**Note:** Version bump only for package @talview/talstrap





## [0.13.11](https://github.com/talview/talstrap/compare/@talview/talstrap@0.13.10...@talview/talstrap@0.13.11) (2021-03-25)

**Note:** Version bump only for package @talview/talstrap





## [0.13.10](https://github.com/talview/talstrap/compare/@talview/talstrap@0.13.9...@talview/talstrap@0.13.10) (2021-03-24)

**Note:** Version bump only for package @talview/talstrap





## [0.13.9](https://github.com/talview/talstrap/compare/@talview/talstrap@0.13.8...@talview/talstrap@0.13.9) (2021-03-24)

**Note:** Version bump only for package @talview/talstrap





## [0.13.8](https://github.com/talview/talstrap/compare/@talview/talstrap@0.13.7...@talview/talstrap@0.13.8) (2021-03-23)

**Note:** Version bump only for package @talview/talstrap





## [0.13.7](https://github.com/talview/talstrap/compare/@talview/talstrap@0.13.6...@talview/talstrap@0.13.7) (2021-03-22)

**Note:** Version bump only for package @talview/talstrap





## [0.13.6](https://github.com/talview/talstrap/compare/@talview/talstrap@0.13.5...@talview/talstrap@0.13.6) (2021-03-19)

**Note:** Version bump only for package @talview/talstrap





## [0.13.5](https://github.com/talview/talstrap/compare/@talview/talstrap@0.13.4...@talview/talstrap@0.13.5) (2021-03-19)

**Note:** Version bump only for package @talview/talstrap





## [0.13.4](https://github.com/talview/talstrap/compare/@talview/talstrap@0.13.3...@talview/talstrap@0.13.4) (2021-03-19)

**Note:** Version bump only for package @talview/talstrap





## [0.13.3](https://github.com/talview/talstrap/compare/@talview/talstrap@0.13.2...@talview/talstrap@0.13.3) (2021-03-19)

**Note:** Version bump only for package @talview/talstrap





## [0.13.2](https://github.com/talview/talstrap/compare/@talview/talstrap@0.13.1...@talview/talstrap@0.13.2) (2021-03-18)

**Note:** Version bump only for package @talview/talstrap





## [0.13.1](https://github.com/talview/talstrap/compare/@talview/talstrap@0.13.0...@talview/talstrap@0.13.1) (2021-03-18)

**Note:** Version bump only for package @talview/talstrap





# [0.13.0](https://github.com/talview/talstrap/compare/@talview/talstrap@0.12.10...@talview/talstrap@0.13.0) (2021-03-17)


### Features

* **fh-17380:** extend autocomplete with warning support ([#1994](https://github.com/talview/talstrap/issues/1994)) ([3a3920a](https://github.com/talview/talstrap/commit/3a3920a1d16c750d10545343224c8758b0260fe6))





## [0.12.10](https://github.com/talview/talstrap/compare/@talview/talstrap@0.12.9...@talview/talstrap@0.12.10) (2021-03-17)

**Note:** Version bump only for package @talview/talstrap





## [0.12.9](https://github.com/talview/talstrap/compare/@talview/talstrap@0.12.8...@talview/talstrap@0.12.9) (2021-03-17)

**Note:** Version bump only for package @talview/talstrap





## [0.12.8](https://github.com/talview/talstrap/compare/@talview/talstrap@0.12.7...@talview/talstrap@0.12.8) (2021-03-15)

**Note:** Version bump only for package @talview/talstrap





## [0.12.7](https://github.com/talview/talstrap/compare/@talview/talstrap@0.12.6...@talview/talstrap@0.12.7) (2021-03-09)

**Note:** Version bump only for package @talview/talstrap





## [0.12.6](https://github.com/talview/talstrap/compare/@talview/talstrap@0.12.5...@talview/talstrap@0.12.6) (2021-03-02)

**Note:** Version bump only for package @talview/talstrap





## [0.12.5](https://github.com/talview/talstrap/compare/@talview/talstrap@0.12.4...@talview/talstrap@0.12.5) (2021-02-28)

**Note:** Version bump only for package @talview/talstrap





## [0.12.4](https://github.com/talview/talstrap/compare/@talview/talstrap@0.12.3...@talview/talstrap@0.12.4) (2021-02-28)

**Note:** Version bump only for package @talview/talstrap





## [0.12.3](https://github.com/talview/talstrap/compare/@talview/talstrap@0.12.2...@talview/talstrap@0.12.3) (2021-02-23)

**Note:** Version bump only for package @talview/talstrap





## [0.12.2](https://github.com/talview/talstrap/compare/@talview/talstrap@0.12.1...@talview/talstrap@0.12.2) (2021-02-22)

**Note:** Version bump only for package @talview/talstrap





## [0.12.1](https://github.com/talview/talstrap/compare/@talview/talstrap@0.12.0...@talview/talstrap@0.12.1) (2021-02-22)

**Note:** Version bump only for package @talview/talstrap





# [0.12.0](https://github.com/talview/talstrap/compare/@talview/talstrap@0.11.2...@talview/talstrap@0.12.0) (2021-02-22)


### Features

* support removal of reset.css ([72b9764](https://github.com/talview/talstrap/commit/72b976499064210abe998fb28cedf422c5185e2e))





## [0.11.2](https://github.com/talview/talstrap/compare/@talview/talstrap@0.11.1...@talview/talstrap@0.11.2) (2021-02-20)

**Note:** Version bump only for package @talview/talstrap





## [0.11.1](https://github.com/talview/talstrap/compare/@talview/talstrap@0.11.0...@talview/talstrap@0.11.1) (2021-02-17)

**Note:** Version bump only for package @talview/talstrap





# [0.11.0](https://github.com/talview/talstrap/compare/@talview/talstrap@0.10.8...@talview/talstrap@0.11.0) (2021-02-17)


### Features

* remove default override for text shadow ([#1918](https://github.com/talview/talstrap/issues/1918)) ([4454178](https://github.com/talview/talstrap/commit/4454178f9943a47f5d5ef21cc3849351eb0b18fa))





## [0.10.8](https://github.com/talview/talstrap/compare/@talview/talstrap@0.10.7...@talview/talstrap@0.10.8) (2021-02-13)

**Note:** Version bump only for package @talview/talstrap





## [0.10.7](https://github.com/talview/talstrap/compare/@talview/talstrap@0.10.6...@talview/talstrap@0.10.7) (2021-02-11)

**Note:** Version bump only for package @talview/talstrap





## [0.10.6](https://github.com/talview/talstrap/compare/@talview/talstrap@0.10.5...@talview/talstrap@0.10.6) (2021-02-03)

**Note:** Version bump only for package @talview/talstrap





## [0.10.5](https://github.com/talview/talstrap/compare/@talview/talstrap@0.10.4...@talview/talstrap@0.10.5) (2021-02-02)

**Note:** Version bump only for package @talview/talstrap





## [0.10.4](https://github.com/talview/talstrap/compare/@talview/talstrap@0.10.3...@talview/talstrap@0.10.4) (2021-02-01)

**Note:** Version bump only for package @talview/talstrap





## [0.10.3](https://github.com/talview/talstrap/compare/@talview/talstrap@0.10.2...@talview/talstrap@0.10.3) (2021-01-24)

**Note:** Version bump only for package @talview/talstrap





## [0.10.2](https://github.com/talview/talstrap/compare/@talview/talstrap@0.10.1...@talview/talstrap@0.10.2) (2021-01-21)

**Note:** Version bump only for package @talview/talstrap





## [0.10.1](https://github.com/talview/talstrap/compare/@talview/talstrap@0.10.0...@talview/talstrap@0.10.1) (2021-01-21)

**Note:** Version bump only for package @talview/talstrap





# [0.10.0](https://github.com/talview/talstrap/compare/@talview/talstrap@0.9.31...@talview/talstrap@0.10.0) (2021-01-14)


### Features

* **Timeline:** Exporting timeline from mui labs ([de5e2f6](https://github.com/talview/talstrap/commit/de5e2f63c555ef264d24f704dd9a022e55f19f93))





## [0.9.31](https://github.com/talview/talstrap/compare/@talview/talstrap@0.9.30...@talview/talstrap@0.9.31) (2021-01-12)

**Note:** Version bump only for package @talview/talstrap





## [0.9.30](https://github.com/talview/talstrap/compare/@talview/talstrap@0.9.29...@talview/talstrap@0.9.30) (2021-01-07)

**Note:** Version bump only for package @talview/talstrap





## [0.9.29](https://github.com/talview/talstrap/compare/@talview/talstrap@0.9.28...@talview/talstrap@0.9.29) (2021-01-04)

**Note:** Version bump only for package @talview/talstrap





## [0.9.28](https://github.com/talview/talstrap/compare/@talview/talstrap@0.9.27...@talview/talstrap@0.9.28) (2021-01-04)

**Note:** Version bump only for package @talview/talstrap





## [0.9.27](https://github.com/talview/talstrap/compare/@talview/talstrap@0.9.26...@talview/talstrap@0.9.27) (2020-12-18)

**Note:** Version bump only for package @talview/talstrap





## [0.9.26](https://github.com/talview/talstrap/compare/@talview/talstrap@0.9.25...@talview/talstrap@0.9.26) (2020-12-15)

**Note:** Version bump only for package @talview/talstrap





## [0.9.25](https://github.com/talview/talstrap/compare/@talview/talstrap@0.9.24...@talview/talstrap@0.9.25) (2020-12-14)

**Note:** Version bump only for package @talview/talstrap





## [0.9.24](https://github.com/talview/talstrap/compare/@talview/talstrap@0.9.23...@talview/talstrap@0.9.24) (2020-12-13)

**Note:** Version bump only for package @talview/talstrap





## [0.9.23](https://github.com/talview/talstrap/compare/@talview/talstrap@0.9.22...@talview/talstrap@0.9.23) (2020-12-08)

**Note:** Version bump only for package @talview/talstrap





## [0.9.22](https://github.com/talview/talstrap/compare/@talview/talstrap@0.9.21...@talview/talstrap@0.9.22) (2020-12-07)

**Note:** Version bump only for package @talview/talstrap





## [0.9.21](https://github.com/talview/talstrap/compare/@talview/talstrap@0.9.20...@talview/talstrap@0.9.21) (2020-12-03)

**Note:** Version bump only for package @talview/talstrap





## [0.9.20](https://github.com/talview/talstrap/compare/@talview/talstrap@0.9.19...@talview/talstrap@0.9.20) (2020-12-03)


### Reverts

* Revert "fix(font): text stroke (#1750)" (#1752) ([f83a00a](https://github.com/talview/talstrap/commit/f83a00a913660b5df3145bce3aa5e00b75aee3ab)), closes [#1750](https://github.com/talview/talstrap/issues/1750) [#1752](https://github.com/talview/talstrap/issues/1752)





## [0.9.19](https://github.com/talview/talstrap/compare/@talview/talstrap@0.9.18...@talview/talstrap@0.9.19) (2020-12-03)

**Note:** Version bump only for package @talview/talstrap





## [0.9.18](https://github.com/talview/talstrap/compare/@talview/talstrap@0.9.17...@talview/talstrap@0.9.18) (2020-12-01)


### Bug Fixes

* **font:** text stroke ([#1750](https://github.com/talview/talstrap/issues/1750)) ([7cd2a7e](https://github.com/talview/talstrap/commit/7cd2a7e3a17cf9cdbb129255096ea719dc1b551c))





## [0.9.17](https://github.com/talview/talstrap/compare/@talview/talstrap@0.9.16...@talview/talstrap@0.9.17) (2020-12-01)

**Note:** Version bump only for package @talview/talstrap





## [0.9.16](https://github.com/talview/talstrap/compare/@talview/talstrap@0.9.15...@talview/talstrap@0.9.16) (2020-11-30)

**Note:** Version bump only for package @talview/talstrap





## [0.9.15](https://github.com/talview/talstrap/compare/@talview/talstrap@0.9.14...@talview/talstrap@0.9.15) (2020-11-26)

**Note:** Version bump only for package @talview/talstrap





## [0.9.14](https://github.com/talview/talstrap/compare/@talview/talstrap@0.9.13...@talview/talstrap@0.9.14) (2020-11-25)

**Note:** Version bump only for package @talview/talstrap





## [0.9.13](https://github.com/talview/talstrap/compare/@talview/talstrap@0.9.12...@talview/talstrap@0.9.13) (2020-11-25)

**Note:** Version bump only for package @talview/talstrap





## [0.9.12](https://github.com/talview/talstrap/compare/@talview/talstrap@0.9.11...@talview/talstrap@0.9.12) (2020-11-25)


### Bug Fixes

* replacing imports of makestyles by styles ([#1719](https://github.com/talview/talstrap/issues/1719)) ([e4f9d85](https://github.com/talview/talstrap/commit/e4f9d85694c84325cb12ee29a8ca3c546e0a1783))





## [0.9.11](https://github.com/talview/talstrap/compare/@talview/talstrap@0.9.10...@talview/talstrap@0.9.11) (2020-11-25)

**Note:** Version bump only for package @talview/talstrap





## [0.9.10](https://github.com/talview/talstrap/compare/@talview/talstrap@0.9.9...@talview/talstrap@0.9.10) (2020-11-24)

**Note:** Version bump only for package @talview/talstrap





## [0.9.9](https://github.com/talview/talstrap/compare/@talview/talstrap@0.9.8...@talview/talstrap@0.9.9) (2020-11-24)

**Note:** Version bump only for package @talview/talstrap





## [0.9.8](https://github.com/talview/talstrap/compare/@talview/talstrap@0.9.7...@talview/talstrap@0.9.8) (2020-11-21)

**Note:** Version bump only for package @talview/talstrap





## [0.9.7](https://github.com/talview/talstrap/compare/@talview/talstrap@0.9.6...@talview/talstrap@0.9.7) (2020-11-21)

**Note:** Version bump only for package @talview/talstrap





## [0.9.6](https://github.com/talview/talstrap/compare/@talview/talstrap@0.9.5...@talview/talstrap@0.9.6) (2020-11-20)

**Note:** Version bump only for package @talview/talstrap





## [0.9.5](https://github.com/talview/talstrap/compare/@talview/talstrap@0.9.4...@talview/talstrap@0.9.5) (2020-11-19)


### Bug Fixes

* **Autocomplete:** Adding debounce to autocomplete async calls ([d8ee147](https://github.com/talview/talstrap/commit/d8ee147e9e096e2250e8b6ce62a1e3a19f4f0555))





## [0.9.4](https://github.com/talview/talstrap/compare/@talview/talstrap@0.9.3...@talview/talstrap@0.9.4) (2020-11-16)

**Note:** Version bump only for package @talview/talstrap





## [0.9.3](https://github.com/talview/talstrap/compare/@talview/talstrap@0.9.2...@talview/talstrap@0.9.3) (2020-11-06)

**Note:** Version bump only for package @talview/talstrap





## [0.9.2](https://github.com/talview/talstrap/compare/@talview/talstrap@0.9.1...@talview/talstrap@0.9.2) (2020-10-16)

**Note:** Version bump only for package @talview/talstrap





## [0.9.1](https://github.com/talview/talstrap/compare/@talview/talstrap@0.9.0...@talview/talstrap@0.9.1) (2020-10-14)


### Bug Fixes

* Updated styles for tabpanel ([bf481a0](https://github.com/talview/talstrap/commit/bf481a0aef500af3f98bec664766084203b5067f))





# [0.9.0](https://github.com/talview/talstrap/compare/@talview/talstrap@0.8.7...@talview/talstrap@0.9.0) (2020-10-14)


### Features

* **Tab:** Adding more Tab components ([b133186](https://github.com/talview/talstrap/commit/b13318624751a494f84f2332589085380634c5f3))





## [0.8.7](https://github.com/talview/talstrap/compare/@talview/talstrap@0.8.6...@talview/talstrap@0.8.7) (2020-10-09)

**Note:** Version bump only for package @talview/talstrap





## [0.8.6](https://github.com/talview/talstrap/compare/@talview/talstrap@0.8.5...@talview/talstrap@0.8.6) (2020-10-04)

**Note:** Version bump only for package @talview/talstrap





## [0.8.5](https://github.com/talview/talstrap/compare/@talview/talstrap@0.8.4...@talview/talstrap@0.8.5) (2020-10-02)


### Bug Fixes

* **Autocomplete:** revert onOptionSelect to be called only if it has a valid option ([#1524](https://github.com/talview/talstrap/issues/1524)) ([fb3038a](https://github.com/talview/talstrap/commit/fb3038a66d0e1dcad3a688de763d401a1dabfb18))





## [0.8.4](https://github.com/talview/talstrap/compare/@talview/talstrap@0.8.3...@talview/talstrap@0.8.4) (2020-10-01)


### Bug Fixes

* Passing the change reason for controlled autocomplete ([#1522](https://github.com/talview/talstrap/issues/1522)) ([4ab9b50](https://github.com/talview/talstrap/commit/4ab9b508dd997ace6d09257429cdd7a6732bec63))





## [0.8.3](https://github.com/talview/talstrap/compare/@talview/talstrap@0.8.2...@talview/talstrap@0.8.3) (2020-09-30)


### Reverts

* Revert "fix(Autocomplete): Simplified fetching async options" (#1521) ([499d7d2](https://github.com/talview/talstrap/commit/499d7d2cfd2e21f89c67c0027f722d651e7c95a3)), closes [#1521](https://github.com/talview/talstrap/issues/1521)





## [0.8.2](https://github.com/talview/talstrap/compare/@talview/talstrap@0.8.1...@talview/talstrap@0.8.2) (2020-09-28)


### Bug Fixes

* **Autocomplete:** Simplified fetching async options ([daad5dc](https://github.com/talview/talstrap/commit/daad5dc87bcc5b58bfc6ca3eb867ed4d9e1a0df9))





## [0.8.1](https://github.com/talview/talstrap/compare/@talview/talstrap@0.8.0...@talview/talstrap@0.8.1) (2020-09-25)

**Note:** Version bump only for package @talview/talstrap





# [0.8.0](https://github.com/talview/talstrap/compare/@talview/talstrap@0.7.1...@talview/talstrap@0.8.0) (2020-09-21)


### Features

* Adding inputprops to the Autocomplete TextField ([c4130b2](https://github.com/talview/talstrap/commit/c4130b238ff41919e69869f046d0c23b3f50f026))





## [0.7.1](https://github.com/talview/talstrap/compare/@talview/talstrap@0.7.0...@talview/talstrap@0.7.1) (2020-09-19)

**Note:** Version bump only for package @talview/talstrap





# [0.7.0](https://github.com/talview/talstrap/compare/@talview/talstrap@0.6.0...@talview/talstrap@0.7.0) (2020-09-09)


### Features

* Upgrading storybook to version 6 ([a790771](https://github.com/talview/talstrap/commit/a790771e1224996ae95b9b4dbf0bbf81a98c39e3)), closes [#60](https://github.com/talview/talstrap/issues/60)





# [0.6.0](https://github.com/talview/talstrap/compare/@talview/talstrap@0.5.7...@talview/talstrap@0.6.0) (2020-09-04)


### Features

* Adds DropdownFilterSelect Component ([#1473](https://github.com/talview/talstrap/issues/1473)) ([15dfca9](https://github.com/talview/talstrap/commit/15dfca995bd3f4b97c8d3a6f8c4ff64831adadcf))





## [0.5.7](https://github.com/talview/talstrap/compare/@talview/talstrap@0.5.6...@talview/talstrap@0.5.7) (2020-09-01)

**Note:** Version bump only for package @talview/talstrap





## [0.5.6](https://github.com/talview/talstrap/compare/@talview/talstrap@0.5.5...@talview/talstrap@0.5.6) (2020-09-01)

**Note:** Version bump only for package @talview/talstrap





## [0.5.5](https://github.com/talview/talstrap/compare/@talview/talstrap@0.5.4...@talview/talstrap@0.5.5) (2020-09-01)

**Note:** Version bump only for package @talview/talstrap





## [0.5.4](https://github.com/talview/talstrap/compare/@talview/talstrap@0.5.3...@talview/talstrap@0.5.4) (2020-09-01)

**Note:** Version bump only for package @talview/talstrap





## [0.5.3](https://github.com/talview/talstrap/compare/@talview/talstrap@0.5.2...@talview/talstrap@0.5.3) (2020-08-30)

**Note:** Version bump only for package @talview/talstrap





## [0.5.2](https://github.com/talview/talstrap/compare/@talview/talstrap@0.5.1...@talview/talstrap@0.5.2) (2020-08-28)

**Note:** Version bump only for package @talview/talstrap





## [0.5.1](https://github.com/talview/talstrap/compare/@talview/talstrap@0.5.0...@talview/talstrap@0.5.1) (2020-08-28)

**Note:** Version bump only for package @talview/talstrap





# [0.5.0](https://github.com/talview/talstrap/compare/@talview/talstrap@0.4.3...@talview/talstrap@0.5.0) (2020-08-28)


### Features

* **Snackbar:**  Adding SnackbarContent to talstrap ([ca0d443](https://github.com/talview/talstrap/commit/ca0d443e5a984ba3393ca3593f071869ddd53e9c))





## [0.4.3](https://github.com/talview/talstrap/compare/@talview/talstrap@0.4.2...@talview/talstrap@0.4.3) (2020-08-27)

**Note:** Version bump only for package @talview/talstrap





## [0.4.2](https://github.com/talview/talstrap/compare/@talview/talstrap@0.4.1...@talview/talstrap@0.4.2) (2020-08-26)


### Bug Fixes

* **Card:** Updated the card header title prop ([#1428](https://github.com/talview/talstrap/issues/1428)) ([d3b1c99](https://github.com/talview/talstrap/commit/d3b1c9979d2a84beb0b3e63a11f6d0014482e0f8))





## [0.4.1](https://github.com/talview/talstrap/compare/@talview/talstrap@0.4.0...@talview/talstrap@0.4.1) (2020-08-26)

**Note:** Version bump only for package @talview/talstrap





# [0.4.0](https://github.com/talview/talstrap/compare/@talview/talstrap@0.3.13...@talview/talstrap@0.4.0) (2020-08-25)


### Features

* Updating card component to match the design system ([83fc574](https://github.com/talview/talstrap/commit/83fc574036c48188e31e17192a266f4ddbf7d3b8))





## [0.3.13](https://github.com/talview/talstrap/compare/@talview/talstrap@0.3.12...@talview/talstrap@0.3.13) (2020-08-24)


### Bug Fixes

* Replacing find by reduce function in usewidth ([adcd00f](https://github.com/talview/talstrap/commit/adcd00f041dcb86ae9a3ffbd30c86653d5d607da))





## [0.3.12](https://github.com/talview/talstrap/compare/@talview/talstrap@0.3.11...@talview/talstrap@0.3.12) (2020-08-20)

**Note:** Version bump only for package @talview/talstrap





## [0.3.11](https://github.com/talview/talstrap/compare/@talview/talstrap@0.3.10...@talview/talstrap@0.3.11) (2020-08-18)

**Note:** Version bump only for package @talview/talstrap





## [0.3.10](https://github.com/talview/talstrap/compare/@talview/talstrap@0.3.9...@talview/talstrap@0.3.10) (2020-08-17)

**Note:** Version bump only for package @talview/talstrap





## [0.3.9](https://github.com/talview/talstrap/compare/@talview/talstrap@0.3.8...@talview/talstrap@0.3.9) (2020-08-17)

**Note:** Version bump only for package @talview/talstrap





## [0.3.8](https://github.com/talview/talstrap/compare/@talview/talstrap@0.3.7...@talview/talstrap@0.3.8) (2020-08-14)

**Note:** Version bump only for package @talview/talstrap





## [0.3.7](https://github.com/talview/talstrap/compare/@talview/talstrap@0.3.6...@talview/talstrap@0.3.7) (2020-08-13)

**Note:** Version bump only for package @talview/talstrap





## [0.3.6](https://github.com/talview/talstrap/compare/@talview/talstrap@0.3.5...@talview/talstrap@0.3.6) (2020-08-12)

**Note:** Version bump only for package @talview/talstrap





## [0.3.5](https://github.com/talview/talstrap/compare/@talview/talstrap@0.3.4...@talview/talstrap@0.3.5) (2020-08-12)

**Note:** Version bump only for package @talview/talstrap





## [0.3.4](https://github.com/talview/talstrap/compare/@talview/talstrap@0.3.3...@talview/talstrap@0.3.4) (2020-08-07)

**Note:** Version bump only for package @talview/talstrap





## [0.3.3](https://github.com/talview/talstrap/compare/@talview/talstrap@0.3.2...@talview/talstrap@0.3.3) (2020-08-07)

**Note:** Version bump only for package @talview/talstrap





## [0.3.2](https://github.com/talview/talstrap/compare/@talview/talstrap@0.3.1...@talview/talstrap@0.3.2) (2020-08-06)

**Note:** Version bump only for package @talview/talstrap





## [0.3.1](https://github.com/talview/talstrap/compare/@talview/talstrap@0.3.0...@talview/talstrap@0.3.1) (2020-08-06)

**Note:** Version bump only for package @talview/talstrap





# [0.3.0](https://github.com/talview/talstrap/compare/@talview/talstrap@0.2.64...@talview/talstrap@0.3.0) (2020-08-06)


* button api change!: remove sentenceCase ([ded929f](https://github.com/talview/talstrap/commit/ded929f763cec833d2ba247ee96ef04689a1e2b0))


### BREAKING CHANGES

* refactor to use JavaScript features not available in Node 6.





## [0.2.64](https://github.com/talview/talstrap/compare/@talview/talstrap@0.2.63...@talview/talstrap@0.2.64) (2020-08-05)

**Note:** Version bump only for package @talview/talstrap





## [0.2.63](https://github.com/talview/talstrap/compare/@talview/talstrap@0.2.62...@talview/talstrap@0.2.63) (2020-07-30)

**Note:** Version bump only for package @talview/talstrap





## [0.2.62](https://github.com/talview/talstrap/compare/@talview/talstrap@0.2.61...@talview/talstrap@0.2.62) (2020-07-24)

**Note:** Version bump only for package @talview/talstrap





## [0.2.61](https://github.com/talview/talstrap/compare/@talview/talstrap@0.2.60...@talview/talstrap@0.2.61) (2020-07-23)

**Note:** Version bump only for package @talview/talstrap





## [0.2.60](https://github.com/talview/talstrap/compare/@talview/talstrap@0.2.59...@talview/talstrap@0.2.60) (2020-07-23)

**Note:** Version bump only for package @talview/talstrap





## [0.2.59](https://github.com/talview/talstrap/compare/@talview/talstrap@0.2.58...@talview/talstrap@0.2.59) (2020-07-01)

**Note:** Version bump only for package @talview/talstrap





## [0.2.58](https://github.com/talview/talstrap/compare/@talview/talstrap@0.2.57...@talview/talstrap@0.2.58) (2020-06-18)

**Note:** Version bump only for package @talview/talstrap





## [0.2.57](https://github.com/talview/talstrap/compare/@talview/talstrap@0.2.56...@talview/talstrap@0.2.57) (2020-06-12)

**Note:** Version bump only for package @talview/talstrap





## [0.2.56](https://github.com/talview/talstrap/compare/@talview/talstrap@0.2.55...@talview/talstrap@0.2.56) (2020-06-12)

**Note:** Version bump only for package @talview/talstrap





## [0.2.55](https://github.com/talview/talstrap/compare/@talview/talstrap@0.2.54...@talview/talstrap@0.2.55) (2020-06-11)

**Note:** Version bump only for package @talview/talstrap





## [0.2.54](https://github.com/talview/talstrap/compare/@talview/talstrap@0.2.53...@talview/talstrap@0.2.54) (2020-06-11)

**Note:** Version bump only for package @talview/talstrap





## [0.2.53](https://github.com/talview/talstrap/compare/@talview/talstrap@0.2.52...@talview/talstrap@0.2.53) (2020-06-10)

**Note:** Version bump only for package @talview/talstrap





## [0.2.52](https://github.com/talview/talstrap/compare/@talview/talstrap@0.2.51...@talview/talstrap@0.2.52) (2020-06-02)

**Note:** Version bump only for package @talview/talstrap





## [0.2.51](https://github.com/talview/talstrap/compare/@talview/talstrap@0.2.50...@talview/talstrap@0.2.51) (2020-06-01)

**Note:** Version bump only for package @talview/talstrap





## [0.2.50](https://github.com/talview/talstrap/compare/@talview/talstrap@0.2.49...@talview/talstrap@0.2.50) (2020-05-30)

**Note:** Version bump only for package @talview/talstrap





## [0.2.49](https://github.com/talview/talstrap/compare/@talview/talstrap@0.2.48...@talview/talstrap@0.2.49) (2020-05-29)

**Note:** Version bump only for package @talview/talstrap





## [0.2.48](https://github.com/talview/talstrap/compare/@talview/talstrap@0.2.47...@talview/talstrap@0.2.48) (2020-05-24)

**Note:** Version bump only for package @talview/talstrap





## [0.2.47](https://github.com/talview/talstrap/compare/@talview/talstrap@0.2.46...@talview/talstrap@0.2.47) (2020-05-24)

**Note:** Version bump only for package @talview/talstrap





## [0.2.46](https://github.com/talview/talstrap/compare/@talview/talstrap@0.2.45...@talview/talstrap@0.2.46) (2020-05-23)

**Note:** Version bump only for package @talview/talstrap





## [0.2.45](https://github.com/talview/talstrap/compare/@talview/talstrap@0.2.44...@talview/talstrap@0.2.45) (2020-05-19)

**Note:** Version bump only for package @talview/talstrap





## [0.2.44](https://github.com/talview/talstrap/compare/@talview/talstrap@0.2.43...@talview/talstrap@0.2.44) (2020-05-19)

**Note:** Version bump only for package @talview/talstrap





## [0.2.43](https://github.com/talview/talstrap/compare/@talview/talstrap@0.2.42...@talview/talstrap@0.2.43) (2020-05-18)

**Note:** Version bump only for package @talview/talstrap





## [0.2.42](https://github.com/talview/talstrap/compare/@talview/talstrap@0.2.41...@talview/talstrap@0.2.42) (2020-05-12)

**Note:** Version bump only for package @talview/talstrap





## [0.2.41](https://github.com/talview/talstrap/compare/@talview/talstrap@0.2.40...@talview/talstrap@0.2.41) (2020-05-12)

**Note:** Version bump only for package @talview/talstrap





## [0.2.40](https://github.com/talview/talstrap/compare/@talview/talstrap@0.2.39...@talview/talstrap@0.2.40) (2020-05-10)

**Note:** Version bump only for package @talview/talstrap





## [0.2.39](https://github.com/talview/talstrap/compare/@talview/talstrap@0.2.38...@talview/talstrap@0.2.39) (2020-05-06)

**Note:** Version bump only for package @talview/talstrap





## [0.2.38](https://github.com/talview/talstrap/compare/@talview/talstrap@0.2.37...@talview/talstrap@0.2.38) (2020-05-06)

**Note:** Version bump only for package @talview/talstrap





## [0.2.37](https://github.com/talview/talstrap/compare/@talview/talstrap@0.2.36...@talview/talstrap@0.2.37) (2020-05-04)

**Note:** Version bump only for package @talview/talstrap





## [0.2.36](https://github.com/talview/talstrap/compare/@talview/talstrap@0.2.35...@talview/talstrap@0.2.36) (2020-05-04)

**Note:** Version bump only for package @talview/talstrap





## [0.2.35](https://github.com/talview/talstrap/compare/@talview/talstrap@0.2.34...@talview/talstrap@0.2.35) (2020-05-04)

**Note:** Version bump only for package @talview/talstrap





## [0.2.34](https://github.com/talview/talstrap/compare/@talview/talstrap@0.2.33...@talview/talstrap@0.2.34) (2020-05-04)

**Note:** Version bump only for package @talview/talstrap





## [0.2.33](https://github.com/talview/talstrap/compare/@talview/talstrap@0.2.32...@talview/talstrap@0.2.33) (2020-05-02)

**Note:** Version bump only for package @talview/talstrap





## [0.2.32](https://github.com/talview/talstrap/compare/@talview/talstrap@0.2.31...@talview/talstrap@0.2.32) (2020-04-27)

**Note:** Version bump only for package @talview/talstrap





## [0.2.31](https://github.com/talview/talstrap/compare/@talview/talstrap@0.2.30...@talview/talstrap@0.2.31) (2020-04-27)

**Note:** Version bump only for package @talview/talstrap





## [0.2.30](https://github.com/talview/talstrap/compare/@talview/talstrap@0.2.29...@talview/talstrap@0.2.30) (2020-04-23)

**Note:** Version bump only for package @talview/talstrap





## [0.2.29](https://github.com/talview/talstrap/compare/@talview/talstrap@0.2.28...@talview/talstrap@0.2.29) (2020-04-19)

**Note:** Version bump only for package @talview/talstrap





## [0.2.28](https://github.com/talview/talstrap/compare/@talview/talstrap@0.2.27...@talview/talstrap@0.2.28) (2020-03-31)

**Note:** Version bump only for package @talview/talstrap





## [0.2.27](https://github.com/talview/talstrap/compare/@talview/talstrap@0.2.26...@talview/talstrap@0.2.27) (2020-03-26)

**Note:** Version bump only for package @talview/talstrap





## [0.2.26](https://github.com/talview/talstrap/compare/@talview/talstrap@0.2.25...@talview/talstrap@0.2.26) (2020-03-26)

**Note:** Version bump only for package @talview/talstrap





## [0.2.25](https://github.com/talview/talstrap/compare/@talview/talstrap@0.2.24...@talview/talstrap@0.2.25) (2020-03-23)

**Note:** Version bump only for package @talview/talstrap





## [0.2.24](https://github.com/talview/talstrap/compare/@talview/talstrap@0.2.23...@talview/talstrap@0.2.24) (2020-03-22)

**Note:** Version bump only for package @talview/talstrap





## [0.2.23](https://github.com/talview/talstrap/compare/@talview/talstrap@0.2.22...@talview/talstrap@0.2.23) (2020-03-20)

**Note:** Version bump only for package @talview/talstrap





## [0.2.22](https://github.com/talview/talstrap/compare/@talview/talstrap@0.2.21...@talview/talstrap@0.2.22) (2020-03-19)

**Note:** Version bump only for package @talview/talstrap





## [0.2.21](https://github.com/talview/talstrap/compare/@talview/talstrap@0.2.20...@talview/talstrap@0.2.21) (2020-03-18)

**Note:** Version bump only for package @talview/talstrap





## [0.2.20](https://github.com/talview/talstrap/compare/@talview/talstrap@0.2.19...@talview/talstrap@0.2.20) (2020-03-16)

**Note:** Version bump only for package @talview/talstrap





## [0.2.19](https://github.com/talview/talstrap/compare/@talview/talstrap@0.2.18...@talview/talstrap@0.2.19) (2020-03-11)

**Note:** Version bump only for package @talview/talstrap





## [0.2.18](https://github.com/talview/talstrap/compare/@talview/talstrap@0.2.17...@talview/talstrap@0.2.18) (2020-03-10)

**Note:** Version bump only for package @talview/talstrap





## [0.2.17](https://github.com/talview/talstrap/compare/@talview/talstrap@0.2.16...@talview/talstrap@0.2.17) (2020-03-10)

**Note:** Version bump only for package @talview/talstrap





## [0.2.16](https://github.com/talview/talstrap/compare/@talview/talstrap@0.2.15...@talview/talstrap@0.2.16) (2020-03-06)

**Note:** Version bump only for package @talview/talstrap





## [0.2.15](https://github.com/talview/talstrap/compare/@talview/talstrap@0.2.14...@talview/talstrap@0.2.15) (2020-03-03)

**Note:** Version bump only for package @talview/talstrap





## [0.2.14](https://github.com/talview/talstrap/compare/@talview/talstrap@0.2.13...@talview/talstrap@0.2.14) (2020-03-01)

**Note:** Version bump only for package @talview/talstrap





## [0.2.13](https://github.com/talview/talstrap/compare/@talview/talstrap@0.2.12...@talview/talstrap@0.2.13) (2020-02-29)

**Note:** Version bump only for package @talview/talstrap





## [0.2.12](https://github.com/talview/talstrap/compare/@talview/talstrap@0.2.11...@talview/talstrap@0.2.12) (2020-02-28)

**Note:** Version bump only for package @talview/talstrap





## [0.2.11](https://github.com/talview/talstrap/compare/@talview/talstrap@0.2.10...@talview/talstrap@0.2.11) (2020-02-28)

**Note:** Version bump only for package @talview/talstrap





## [0.2.10](https://github.com/talview/talstrap/compare/@talview/talstrap@0.2.9...@talview/talstrap@0.2.10) (2020-02-28)

**Note:** Version bump only for package @talview/talstrap





## [0.2.9](https://github.com/talview/talstrap/compare/@talview/talstrap@0.2.8...@talview/talstrap@0.2.9) (2020-02-27)

**Note:** Version bump only for package @talview/talstrap





## [0.2.8](https://github.com/talview/talstrap/compare/@talview/talstrap@0.2.7...@talview/talstrap@0.2.8) (2020-02-24)

**Note:** Version bump only for package @talview/talstrap





## [0.2.7](https://github.com/talview/talstrap/compare/@talview/talstrap@0.2.6...@talview/talstrap@0.2.7) (2020-02-24)

**Note:** Version bump only for package @talview/talstrap





## [0.2.6](https://github.com/talview/talstrap/compare/@talview/talstrap@0.2.5...@talview/talstrap@0.2.6) (2020-02-23)

**Note:** Version bump only for package @talview/talstrap





## [0.2.5](https://github.com/talview/talstrap/compare/@talview/talstrap@0.2.4...@talview/talstrap@0.2.5) (2020-02-21)

**Note:** Version bump only for package @talview/talstrap





## [0.2.4](https://github.com/talview/talstrap/compare/@talview/talstrap@0.2.3...@talview/talstrap@0.2.4) (2020-02-17)

**Note:** Version bump only for package @talview/talstrap





## [0.2.3](https://github.com/talview/talstrap/compare/@talview/talstrap@0.2.2...@talview/talstrap@0.2.3) (2020-02-17)

**Note:** Version bump only for package @talview/talstrap





## [0.2.2](https://github.com/talview/talstrap/compare/@talview/talstrap@0.2.0...@talview/talstrap@0.2.2) (2020-02-17)

**Note:** Version bump only for package @talview/talstrap





# [0.2.0](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.132...@talview/talstrap@0.2.0) (2020-02-12)


### Features

* add date picker ([#867](https://github.com/talview/talstrap/issues/867)) ([8c27670](https://github.com/talview/talstrap/commit/8c276705a711834ecb2db9c7f4ca1ea67923e2a3))





## [0.1.132](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.131...@talview/talstrap@0.1.132) (2020-02-12)

**Note:** Version bump only for package @talview/talstrap





## [0.1.131](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.130...@talview/talstrap@0.1.131) (2020-02-10)

**Note:** Version bump only for package @talview/talstrap





## [0.1.130](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.129...@talview/talstrap@0.1.130) (2020-02-10)

**Note:** Version bump only for package @talview/talstrap





## [0.1.129](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.128...@talview/talstrap@0.1.129) (2020-02-06)

**Note:** Version bump only for package @talview/talstrap





## [0.1.128](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.127...@talview/talstrap@0.1.128) (2020-02-03)

**Note:** Version bump only for package @talview/talstrap





## [0.1.127](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.126...@talview/talstrap@0.1.127) (2020-02-03)

**Note:** Version bump only for package @talview/talstrap





## [0.1.126](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.125...@talview/talstrap@0.1.126) (2020-02-03)

**Note:** Version bump only for package @talview/talstrap





## [0.1.125](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.124...@talview/talstrap@0.1.125) (2020-02-02)

**Note:** Version bump only for package @talview/talstrap





## [0.1.124](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.123...@talview/talstrap@0.1.124) (2020-02-02)

**Note:** Version bump only for package @talview/talstrap





## [0.1.123](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.122...@talview/talstrap@0.1.123) (2020-01-29)

**Note:** Version bump only for package @talview/talstrap





## [0.1.122](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.121...@talview/talstrap@0.1.122) (2020-01-28)

**Note:** Version bump only for package @talview/talstrap





## [0.1.121](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.120...@talview/talstrap@0.1.121) (2020-01-27)

**Note:** Version bump only for package @talview/talstrap





## [0.1.120](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.119...@talview/talstrap@0.1.120) (2020-01-26)

**Note:** Version bump only for package @talview/talstrap





## [0.1.119](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.118...@talview/talstrap@0.1.119) (2020-01-24)

**Note:** Version bump only for package @talview/talstrap





## [0.1.118](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.117...@talview/talstrap@0.1.118) (2020-01-24)

**Note:** Version bump only for package @talview/talstrap





## [0.1.117](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.116...@talview/talstrap@0.1.117) (2020-01-24)

**Note:** Version bump only for package @talview/talstrap





## [0.1.116](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.115...@talview/talstrap@0.1.116) (2020-01-24)

**Note:** Version bump only for package @talview/talstrap





## [0.1.115](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.114...@talview/talstrap@0.1.115) (2020-01-23)

**Note:** Version bump only for package @talview/talstrap





## [0.1.114](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.113...@talview/talstrap@0.1.114) (2020-01-23)

**Note:** Version bump only for package @talview/talstrap





## [0.1.113](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.112...@talview/talstrap@0.1.113) (2020-01-23)

**Note:** Version bump only for package @talview/talstrap





## [0.1.112](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.111...@talview/talstrap@0.1.112) (2020-01-22)

**Note:** Version bump only for package @talview/talstrap





## [0.1.111](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.110...@talview/talstrap@0.1.111) (2020-01-22)

**Note:** Version bump only for package @talview/talstrap





## [0.1.110](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.109...@talview/talstrap@0.1.110) (2020-01-21)

**Note:** Version bump only for package @talview/talstrap





## [0.1.109](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.108...@talview/talstrap@0.1.109) (2020-01-20)

**Note:** Version bump only for package @talview/talstrap





## [0.1.108](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.107...@talview/talstrap@0.1.108) (2020-01-20)

**Note:** Version bump only for package @talview/talstrap





## [0.1.107](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.106...@talview/talstrap@0.1.107) (2020-01-16)

**Note:** Version bump only for package @talview/talstrap





## [0.1.106](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.105...@talview/talstrap@0.1.106) (2020-01-13)

**Note:** Version bump only for package @talview/talstrap





## [0.1.105](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.104...@talview/talstrap@0.1.105) (2020-01-07)

**Note:** Version bump only for package @talview/talstrap





## [0.1.104](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.103...@talview/talstrap@0.1.104) (2020-01-06)

**Note:** Version bump only for package @talview/talstrap





## [0.1.103](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.102...@talview/talstrap@0.1.103) (2020-01-02)

**Note:** Version bump only for package @talview/talstrap





## [0.1.102](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.101...@talview/talstrap@0.1.102) (2019-12-30)

**Note:** Version bump only for package @talview/talstrap





## [0.1.101](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.100...@talview/talstrap@0.1.101) (2019-12-30)

**Note:** Version bump only for package @talview/talstrap





## [0.1.100](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.99...@talview/talstrap@0.1.100) (2019-12-24)

**Note:** Version bump only for package @talview/talstrap





## [0.1.99](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.98...@talview/talstrap@0.1.99) (2019-12-15)

**Note:** Version bump only for package @talview/talstrap





## [0.1.98](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.97...@talview/talstrap@0.1.98) (2019-12-14)

**Note:** Version bump only for package @talview/talstrap





## [0.1.97](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.96...@talview/talstrap@0.1.97) (2019-12-09)

**Note:** Version bump only for package @talview/talstrap





## [0.1.96](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.95...@talview/talstrap@0.1.96) (2019-12-07)

**Note:** Version bump only for package @talview/talstrap





## [0.1.95](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.94...@talview/talstrap@0.1.95) (2019-12-07)

**Note:** Version bump only for package @talview/talstrap





## [0.1.94](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.93...@talview/talstrap@0.1.94) (2019-12-06)

**Note:** Version bump only for package @talview/talstrap





## [0.1.93](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.92...@talview/talstrap@0.1.93) (2019-12-04)

**Note:** Version bump only for package @talview/talstrap





## [0.1.92](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.91...@talview/talstrap@0.1.92) (2019-12-03)

**Note:** Version bump only for package @talview/talstrap





## [0.1.91](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.90...@talview/talstrap@0.1.91) (2019-12-03)

**Note:** Version bump only for package @talview/talstrap





## [0.1.90](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.89...@talview/talstrap@0.1.90) (2019-12-02)

**Note:** Version bump only for package @talview/talstrap





## [0.1.89](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.88...@talview/talstrap@0.1.89) (2019-12-02)

**Note:** Version bump only for package @talview/talstrap





## [0.1.88](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.87...@talview/talstrap@0.1.88) (2019-12-01)

**Note:** Version bump only for package @talview/talstrap





## [0.1.87](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.86...@talview/talstrap@0.1.87) (2019-12-01)

**Note:** Version bump only for package @talview/talstrap





## [0.1.86](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.85...@talview/talstrap@0.1.86) (2019-12-01)

**Note:** Version bump only for package @talview/talstrap





## [0.1.85](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.84...@talview/talstrap@0.1.85) (2019-11-29)

**Note:** Version bump only for package @talview/talstrap





## [0.1.84](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.83...@talview/talstrap@0.1.84) (2019-11-27)

**Note:** Version bump only for package @talview/talstrap





## [0.1.83](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.82...@talview/talstrap@0.1.83) (2019-11-26)

**Note:** Version bump only for package @talview/talstrap





## [0.1.82](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.81...@talview/talstrap@0.1.82) (2019-11-24)

**Note:** Version bump only for package @talview/talstrap





## [0.1.81](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.80...@talview/talstrap@0.1.81) (2019-11-24)

**Note:** Version bump only for package @talview/talstrap





## [0.1.80](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.79...@talview/talstrap@0.1.80) (2019-11-20)

**Note:** Version bump only for package @talview/talstrap





## [0.1.79](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.78...@talview/talstrap@0.1.79) (2019-11-18)

**Note:** Version bump only for package @talview/talstrap





## [0.1.78](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.77...@talview/talstrap@0.1.78) (2019-11-15)

**Note:** Version bump only for package @talview/talstrap





## [0.1.77](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.76...@talview/talstrap@0.1.77) (2019-11-12)

**Note:** Version bump only for package @talview/talstrap





## [0.1.76](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.75...@talview/talstrap@0.1.76) (2019-11-12)

**Note:** Version bump only for package @talview/talstrap





## [0.1.75](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.74...@talview/talstrap@0.1.75) (2019-11-12)

**Note:** Version bump only for package @talview/talstrap





## [0.1.74](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.73...@talview/talstrap@0.1.74) (2019-11-11)

**Note:** Version bump only for package @talview/talstrap





## [0.1.73](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.72...@talview/talstrap@0.1.73) (2019-11-07)

**Note:** Version bump only for package @talview/talstrap





## [0.1.72](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.71...@talview/talstrap@0.1.72) (2019-11-06)

**Note:** Version bump only for package @talview/talstrap





## [0.1.71](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.70...@talview/talstrap@0.1.71) (2019-11-06)

**Note:** Version bump only for package @talview/talstrap





## [0.1.70](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.69...@talview/talstrap@0.1.70) (2019-11-06)

**Note:** Version bump only for package @talview/talstrap





## [0.1.69](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.68...@talview/talstrap@0.1.69) (2019-11-06)

**Note:** Version bump only for package @talview/talstrap





## [0.1.68](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.67...@talview/talstrap@0.1.68) (2019-11-06)

**Note:** Version bump only for package @talview/talstrap





## [0.1.67](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.66...@talview/talstrap@0.1.67) (2019-10-31)

**Note:** Version bump only for package @talview/talstrap





## [0.1.66](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.65...@talview/talstrap@0.1.66) (2019-10-31)

**Note:** Version bump only for package @talview/talstrap





## [0.1.65](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.64...@talview/talstrap@0.1.65) (2019-10-30)

**Note:** Version bump only for package @talview/talstrap





## [0.1.64](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.63...@talview/talstrap@0.1.64) (2019-10-29)

**Note:** Version bump only for package @talview/talstrap





## [0.1.63](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.62...@talview/talstrap@0.1.63) (2019-10-28)

**Note:** Version bump only for package @talview/talstrap





## [0.1.62](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.61...@talview/talstrap@0.1.62) (2019-10-28)

**Note:** Version bump only for package @talview/talstrap





## [0.1.61](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.60...@talview/talstrap@0.1.61) (2019-10-28)

**Note:** Version bump only for package @talview/talstrap





## [0.1.60](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.59...@talview/talstrap@0.1.60) (2019-10-28)

**Note:** Version bump only for package @talview/talstrap





## [0.1.59](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.58...@talview/talstrap@0.1.59) (2019-10-23)

**Note:** Version bump only for package @talview/talstrap





## [0.1.58](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.57...@talview/talstrap@0.1.58) (2019-10-21)

**Note:** Version bump only for package @talview/talstrap





## [0.1.57](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.56...@talview/talstrap@0.1.57) (2019-10-21)

**Note:** Version bump only for package @talview/talstrap





## [0.1.56](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.55...@talview/talstrap@0.1.56) (2019-10-18)

**Note:** Version bump only for package @talview/talstrap





## [0.1.55](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.54...@talview/talstrap@0.1.55) (2019-10-14)

**Note:** Version bump only for package @talview/talstrap





## [0.1.54](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.53...@talview/talstrap@0.1.54) (2019-10-12)

**Note:** Version bump only for package @talview/talstrap





## [0.1.53](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.52...@talview/talstrap@0.1.53) (2019-10-12)

**Note:** Version bump only for package @talview/talstrap





## [0.1.52](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.51...@talview/talstrap@0.1.52) (2019-10-10)

**Note:** Version bump only for package @talview/talstrap





## [0.1.51](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.50...@talview/talstrap@0.1.51) (2019-10-04)

**Note:** Version bump only for package @talview/talstrap





## [0.1.50](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.49...@talview/talstrap@0.1.50) (2019-10-02)

**Note:** Version bump only for package @talview/talstrap





## [0.1.49](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.48...@talview/talstrap@0.1.49) (2019-10-02)

**Note:** Version bump only for package @talview/talstrap





## [0.1.48](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.47...@talview/talstrap@0.1.48) (2019-10-02)

**Note:** Version bump only for package @talview/talstrap





## [0.1.47](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.46...@talview/talstrap@0.1.47) (2019-10-02)

**Note:** Version bump only for package @talview/talstrap





## [0.1.46](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.45...@talview/talstrap@0.1.46) (2019-10-01)

**Note:** Version bump only for package @talview/talstrap





## [0.1.45](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.44...@talview/talstrap@0.1.45) (2019-09-27)

**Note:** Version bump only for package @talview/talstrap





## [0.1.44](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.43...@talview/talstrap@0.1.44) (2019-09-23)

**Note:** Version bump only for package @talview/talstrap





## [0.1.43](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.42...@talview/talstrap@0.1.43) (2019-09-22)

**Note:** Version bump only for package @talview/talstrap





## [0.1.42](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.41...@talview/talstrap@0.1.42) (2019-09-20)

**Note:** Version bump only for package @talview/talstrap





## [0.1.41](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.40...@talview/talstrap@0.1.41) (2019-09-19)

**Note:** Version bump only for package @talview/talstrap





## [0.1.40](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.39...@talview/talstrap@0.1.40) (2019-09-19)

**Note:** Version bump only for package @talview/talstrap





## [0.1.39](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.38...@talview/talstrap@0.1.39) (2019-09-18)

**Note:** Version bump only for package @talview/talstrap





## [0.1.38](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.37...@talview/talstrap@0.1.38) (2019-09-16)

**Note:** Version bump only for package @talview/talstrap





## [0.1.37](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.36...@talview/talstrap@0.1.37) (2019-09-16)

**Note:** Version bump only for package @talview/talstrap





## [0.1.36](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.35...@talview/talstrap@0.1.36) (2019-09-13)

**Note:** Version bump only for package @talview/talstrap





## [0.1.35](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.34...@talview/talstrap@0.1.35) (2019-09-13)

**Note:** Version bump only for package @talview/talstrap





## [0.1.34](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.33...@talview/talstrap@0.1.34) (2019-09-12)

**Note:** Version bump only for package @talview/talstrap





## [0.1.33](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.32...@talview/talstrap@0.1.33) (2019-09-11)

**Note:** Version bump only for package @talview/talstrap





## [0.1.32](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.31...@talview/talstrap@0.1.32) (2019-09-09)

**Note:** Version bump only for package @talview/talstrap





## [0.1.31](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.30...@talview/talstrap@0.1.31) (2019-09-09)

**Note:** Version bump only for package @talview/talstrap





## [0.1.30](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.29...@talview/talstrap@0.1.30) (2019-09-09)

**Note:** Version bump only for package @talview/talstrap





## [0.1.29](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.28...@talview/talstrap@0.1.29) (2019-09-08)

**Note:** Version bump only for package @talview/talstrap





## [0.1.28](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.27...@talview/talstrap@0.1.28) (2019-09-02)

**Note:** Version bump only for package @talview/talstrap





## [0.1.27](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.26...@talview/talstrap@0.1.27) (2019-08-31)

**Note:** Version bump only for package @talview/talstrap





## [0.1.26](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.25...@talview/talstrap@0.1.26) (2019-08-22)

**Note:** Version bump only for package @talview/talstrap





## [0.1.25](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.24...@talview/talstrap@0.1.25) (2019-08-22)

**Note:** Version bump only for package @talview/talstrap





## [0.1.24](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.23...@talview/talstrap@0.1.24) (2019-08-20)

**Note:** Version bump only for package @talview/talstrap





## [0.1.23](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.22...@talview/talstrap@0.1.23) (2019-08-20)

**Note:** Version bump only for package @talview/talstrap





## [0.1.22](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.21...@talview/talstrap@0.1.22) (2019-08-12)

**Note:** Version bump only for package @talview/talstrap





## [0.1.21](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.20...@talview/talstrap@0.1.21) (2019-08-12)

**Note:** Version bump only for package @talview/talstrap





## [0.1.20](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.19...@talview/talstrap@0.1.20) (2019-08-05)

**Note:** Version bump only for package @talview/talstrap





## [0.1.19](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.18...@talview/talstrap@0.1.19) (2019-08-01)

**Note:** Version bump only for package @talview/talstrap





## [0.1.18](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.17...@talview/talstrap@0.1.18) (2019-07-29)

**Note:** Version bump only for package @talview/talstrap





## [0.1.17](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.16...@talview/talstrap@0.1.17) (2019-07-29)

**Note:** Version bump only for package @talview/talstrap





## [0.1.16](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.15...@talview/talstrap@0.1.16) (2019-07-26)

**Note:** Version bump only for package @talview/talstrap





## [0.1.15](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.14...@talview/talstrap@0.1.15) (2019-07-18)

**Note:** Version bump only for package @talview/talstrap





## [0.1.14](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.13...@talview/talstrap@0.1.14) (2019-07-18)

**Note:** Version bump only for package @talview/talstrap





## [0.1.13](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.12...@talview/talstrap@0.1.13) (2019-07-18)

**Note:** Version bump only for package @talview/talstrap





## [0.1.12](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.11...@talview/talstrap@0.1.12) (2019-07-15)

**Note:** Version bump only for package @talview/talstrap





## [0.1.11](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.10...@talview/talstrap@0.1.11) (2019-07-11)

**Note:** Version bump only for package @talview/talstrap





## [0.1.10](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.9...@talview/talstrap@0.1.10) (2019-07-09)

**Note:** Version bump only for package @talview/talstrap





## [0.1.9](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.8...@talview/talstrap@0.1.9) (2019-07-09)

**Note:** Version bump only for package @talview/talstrap





## [0.1.8](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.7...@talview/talstrap@0.1.8) (2019-07-08)

**Note:** Version bump only for package @talview/talstrap





## [0.1.7](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.6...@talview/talstrap@0.1.7) (2019-07-02)

**Note:** Version bump only for package @talview/talstrap





## [0.1.6](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.5...@talview/talstrap@0.1.6) (2019-07-01)

**Note:** Version bump only for package @talview/talstrap





## [0.1.5](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.4...@talview/talstrap@0.1.5) (2019-06-28)

**Note:** Version bump only for package @talview/talstrap





## [0.1.4](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.3...@talview/talstrap@0.1.4) (2019-06-28)

**Note:** Version bump only for package @talview/talstrap





## [0.1.3](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.2...@talview/talstrap@0.1.3) (2019-06-27)

**Note:** Version bump only for package @talview/talstrap





## [0.1.2](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.1...@talview/talstrap@0.1.2) (2019-06-27)

**Note:** Version bump only for package @talview/talstrap





## [0.1.1](https://github.com/talview/talstrap/compare/@talview/talstrap@0.1.0...@talview/talstrap@0.1.1) (2019-06-27)

**Note:** Version bump only for package @talview/talstrap





# [0.1.0](https://github.com/talview/talstrap/compare/@talview/talstrap@0.0.29...@talview/talstrap@0.1.0) (2019-06-27)


### Features

* add Search component and lint import rules (SDS-18) ([#84](https://github.com/talview/talstrap/issues/84)) ([0f98131](https://github.com/talview/talstrap/commit/0f98131))





## [0.0.29](https://github.com/talview/talstrap/compare/@talview/talstrap@0.0.28...@talview/talstrap@0.0.29) (2019-06-25)

**Note:** Version bump only for package @talview/talstrap





## [0.0.28](https://github.com/talview/talstrap/compare/@talview/talstrap@0.0.27...@talview/talstrap@0.0.28) (2019-06-24)

**Note:** Version bump only for package @talview/talstrap





## [0.0.27](https://github.com/talview/talstrap/compare/@talview/talstrap@0.0.26...@talview/talstrap@0.0.27) (2019-06-24)

**Note:** Version bump only for package @talview/talstrap





## [0.0.26](https://github.com/talview/talstrap/compare/@talview/talstrap@0.0.25...@talview/talstrap@0.0.26) (2019-06-24)

**Note:** Version bump only for package @talview/talstrap





## [0.0.25](https://github.com/talview/talstrap/compare/@talview/talstrap@0.0.24...@talview/talstrap@0.0.25) (2019-06-24)

**Note:** Version bump only for package @talview/talstrap





## [0.0.24](https://github.com/talview/talstrap/compare/@talview/talstrap@0.0.23...@talview/talstrap@0.0.24) (2019-06-24)

**Note:** Version bump only for package @talview/talstrap





## [0.0.23](https://github.com/talview/talstrap/compare/@talview/talstrap@0.0.22...@talview/talstrap@0.0.23) (2019-06-20)

**Note:** Version bump only for package @talview/talstrap





## [0.0.22](https://github.com/talview/talstrap/compare/@talview/talstrap@0.0.21...@talview/talstrap@0.0.22) (2019-06-20)

**Note:** Version bump only for package @talview/talstrap





## [0.0.21](https://github.com/talview/talstrap/compare/@talview/talstrap@0.0.20...@talview/talstrap@0.0.21) (2019-06-19)

**Note:** Version bump only for package @talview/talstrap





## [0.0.20](https://github.com/talview/talstrap/compare/@talview/talstrap@0.0.19...@talview/talstrap@0.0.20) (2019-06-14)

**Note:** Version bump only for package @talview/talstrap





## [0.0.19](https://github.com/talview/talstrap/compare/@talview/talstrap@0.0.18...@talview/talstrap@0.0.19) (2019-06-12)

**Note:** Version bump only for package @talview/talstrap





## [0.0.18](https://github.com/talview/talstrap/compare/@talview/talstrap@0.0.17...@talview/talstrap@0.0.18) (2019-06-05)

**Note:** Version bump only for package @talview/talstrap





## [0.0.17](https://github.com/talview/talstrap/compare/@talview/talstrap@0.0.16...@talview/talstrap@0.0.17) (2019-06-05)

**Note:** Version bump only for package @talview/talstrap





## [0.0.16](https://github.com/talview/talstrap/compare/@talview/talstrap@0.0.15...@talview/talstrap@0.0.16) (2019-06-04)

**Note:** Version bump only for package @talview/talstrap





## [0.0.15](https://github.com/talview/talstrap/compare/@talview/talstrap@0.0.14...@talview/talstrap@0.0.15) (2019-05-27)

**Note:** Version bump only for package @talview/talstrap





## [0.0.14](https://github.com/talview/talstrap/compare/@talview/talstrap@0.0.13...@talview/talstrap@0.0.14) (2019-05-24)

**Note:** Version bump only for package @talview/talstrap





## [0.0.13](https://github.com/talview/talstrap/compare/@talview/talstrap@0.0.12...@talview/talstrap@0.0.13) (2019-05-22)

**Note:** Version bump only for package @talview/talstrap





## [0.0.12](https://github.com/talview/talstrap/compare/@talview/talstrap@0.0.11...@talview/talstrap@0.0.12) (2019-05-17)

**Note:** Version bump only for package @talview/talstrap





## [0.0.11](https://github.com/talview/talstrap/compare/@talview/talstrap@0.0.10...@talview/talstrap@0.0.11) (2019-05-14)

**Note:** Version bump only for package @talview/talstrap





## 0.0.10 (2019-05-14)

**Note:** Version bump only for package @talview/talstrap





## 0.0.3 (2019-05-13)

**Note:** Version bump only for package @talview/talstrap
