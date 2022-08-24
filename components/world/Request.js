import React, { useEffect, useState, useMemo } from 'react'
import { useEngine, useEth } from 'hyperfy'

export default function Request() {
  const CURATION_CONTRACT = '0xadca0dd4729c8ba3acf3e99f3a9f471ef37b6825'
  
  const engine = useEngine()
  const eth = useEth()
  const contract = useMemo(() => eth.contract(CURATION_CONTRACT), [])
  const [status_mint, setMintStatus] = useState(null)

  const [status, setStatus] = useState('Who are you?')
  const [response, setResponse] = useState(null)
  const [url, setUrl] = useState("https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Very_Black_screen.jpg/1600px-Very_Black_screen.jpg?20200816082819")
  
  async function curate(e) {
    const { address } = e.avatar
    if (!address) return setMintStatus('Not connected!')
    setMintStatus('Please confirm transaction')
    const tx = await contract.write('mintSignal', 29987059870609405165844013873024117115352471183427422838817954902093095766784, 1000000000000000000, 0)
    setMintStatus('Verifying...')
    await tx.wait()
    setMintStatus('Minted!')
  }

  useEffect(() => {
    return engine.onAction(async (action, ...args) => {
      if (action === 'request') {
        const address = args[0]
        if (address != null) {
          setStatus(`Welcome ${address.slice(0, 5)}...`)
        } else{
          setStatus(`I asked who you are, identify yourself!`)
        }
        try {
          await engine
            .http({
              url: 'https://api.thegraph.com/subgraphs/name/graphprotocol/graph-network-mainnet',
              method: 'POST',
              data: {
                query: `
              query MyQuery {
                  subgraphs(first:50, orderBy: createdAt, orderDirection: desc, where:{signalledTokens_gt: 0, currentVersion_not: null}) {
                    id
                    nftID
                    displayName
                    image
                    signalledTokens
                    unsignalledTokens      
                    currentVersion {
                      id
                      subgraphDeployment {
                        id
                      }
                    }
                  }
                }`,
              },
            })
            .then(res => {
              console.log(res)
              setResponse(JSON.stringify(res.data, null, 2))
              console.log(res.data.subgraphs[0].image)
              setUrl(res.data.subgraphs[0].image)
            })
        } catch (e) {
          console.log(e)
          console.log('request failed')
        }
      }
    })
  }, [])

  async function call(e) {
    const { address } = e.avatar
    //if (!address) return setStatus('Please connect your wallet')
    engine.dispatch('request', address)
    console.log('dispatched request')
  }

  return (
    <>
      <image
        src={url}        
        //src=data.subgraphs[0].image
        position={[-4.6, 1, 5]}
        rotation={[0,1.6,0]}
        //onClick={() => console.log(color)}
        onClick={curate}
      />
      <model 
          src="Astronaut.glb" 
          position={[0,0.1,5]}
          allColliders='trimesh'
          onClick={call}
        />
      <text
        value="Click the astronaut to request data from The Graph"
        position={[0, 2.3, 5]}
        color="white"
        bgColor="black"
        padding={0.1}
        bgRadius={0.1}
        />
      <model 
          src="detective_purchased.glb" //https://www.cgtrader.com/3d-models/character/man/realistic-detective-officer-character-rigged-3d-model-low-poly
          //animate={animation} //not currently working - idea is to go from Shoot to idle once user is logged in
          position={[2.5,0.1,6]}
          rotation={[0,-0.7,0]}
          allColliders='trimesh'
          scale={1.15}
          onClick={call}
        />
      <text
        value={status}
        position={[2.5,2.5,6]}
        rotation={[0,-0.7,0]}
        color="white"
        bgColor="black"
        padding={0.1}
        bgRadius={0.1}
      />
      <text
        value={response}
        position={[1, 10, -10]}
        color="white"
        bgColor="black"
        padding={0.1}
        bgRadius={0.1}
      />
    </>
  )
}
