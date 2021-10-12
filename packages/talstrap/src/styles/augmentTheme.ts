import { Palette } from '@material-ui/core/styles/createPalette'

declare module '@material-ui/core/styles/createPalette' {
  interface TypeHeader {
    background: string
  }

  interface TypeTable {
    stripedRows: string
    headerBackground: string
    headerColor: string
  }

  interface TypeMenu {
    default: string
    selected: string
  }

  interface TypeSidebar {
    default: string
    selected: string
  }

  interface TypeStatus {
    info: string
    success: string
    warning: string
    error: string
    highlight: string
    default: string
  }

  interface TypeTag extends TypeStatus {}

  interface Palette {
    table: TypeTable
    header: TypeHeader
    menu: TypeMenu
    sidebar: TypeSidebar
    status: TypeStatus
    tag: TypeTag
  }

  interface PaletteOptions {
    table?: Partial<TypeTable>
    header?: Partial<TypeHeader>
    menu?: Partial<TypeMenu>
    sidebar?: Partial<TypeSidebar>
    status?: Partial<TypeStatus>
    tag?: Partial<TypeTag>
  }
}

export { Palette }
