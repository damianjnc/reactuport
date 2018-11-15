import { Connect, SimpleSigner } from 'uport-connect'

//export let uport = new Connect('TruffleBox')

export let uport = new Connect('My Supply Chain ReactUport App', {
  clientId: '2oqDqUyXZAmXSQvNDcwJBwBp4B7AeTgeYoA',
  network: 'rinkeby',
  signer: SimpleSigner('605aa4fe35bdbfb50c590b810e4b03e366cc45aaf08392fc7c66f9edcd438196')
})



export const web3 = uport.getWeb3()
