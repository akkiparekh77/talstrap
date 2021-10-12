export * from './components'
export * from './icons'
export * from './styles'

// We don't use these exports directly, but need to export them for other Typescript types resolution
export {
  BaseProps,
  CommonProps,
  DefaultComponentProps,
  OverridableComponent,
  OverridableTypeMap,
  OverrideProps,
} from '@material-ui/core/OverridableComponent'
