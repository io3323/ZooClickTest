type Endpoints<K extends string> = Record<K, { method: string, url: string }>

interface IType<T extends string> {
  entity: string,
  endpoints: Endpoints<T>
}

const test: IType<string> = {
  entity: 'sddsvsdvs',
  endpoints: {
    getVtemplates: {
      method: 'Post',
      url: 'https/....'
    },
     postVtemplates: {
      method: 'Get',
      url: 'http/.....'
     },
     updateVtemplates: {
      method: 'Update',
      url: 'http/.....'
     }
  }
}