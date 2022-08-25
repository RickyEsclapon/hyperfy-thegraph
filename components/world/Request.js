import React, { useEffect, useState, useMemo } from 'react'
import { useEngine, useEth } from 'hyperfy'

export default function Request() {
  const CURATION_CONTRACT = '0xadca0dd4729c8ba3acf3e99f3a9f471ef37b6825'
  
  const engine = useEngine()
  const eth = useEth()
  const contract = useMemo(() => eth.contract(CURATION_CONTRACT, [
  'function mintSignal(uint256 _subgraphID, uint256 _tokensIn, uint256 _nSignalOutMin) external override notPartialPaused',
]))
  const [status_mint, setMintStatus] = useState(null)
  const [status, setStatus] = useState('Who are you?')
  const [response, setResponse] = useState("")
  // subgraph ids setup
  const [subgraph_id1, setSubgraphID1] = useState(null)
  const [subgraph_id2, setSubgraphID2] = useState(null)
  const [subgraph_id3, setSubgraphID3] = useState(null)
  const [subgraph_id4, setSubgraphID4] = useState(null)
  const [subgraph_id5, setSubgraphID5] = useState(null)
  const [subgraph_id6, setSubgraphID6] = useState(null)
  const [subgraph_id7, setSubgraphID7] = useState(null)
  const [subgraph_id8, setSubgraphID8] = useState(null)
  const [subgraph_id9, setSubgraphID9] = useState(null)
  const [subgraph_id10, setSubgraphID10] = useState(null)
  const [subgraph_id11, setSubgraphID11] = useState(null)
  const [subgraph_id12, setSubgraphID12] = useState(null)
  // urls setup
  const [url1, setUrl1] = useState("https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Very_Black_screen.jpg/1600px-Very_Black_screen.jpg?20200816082819")
  const [url2, setUrl2] = useState("https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Very_Black_screen.jpg/1600px-Very_Black_screen.jpg?20200816082819")
  const [url3, setUrl3] = useState("https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Very_Black_screen.jpg/1600px-Very_Black_screen.jpg?20200816082819")
  const [url4, setUrl4] = useState("https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Very_Black_screen.jpg/1600px-Very_Black_screen.jpg?20200816082819")
  const [url5, setUrl5] = useState("https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Very_Black_screen.jpg/1600px-Very_Black_screen.jpg?20200816082819")
  const [url6, setUrl6] = useState("https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Very_Black_screen.jpg/1600px-Very_Black_screen.jpg?20200816082819")
  const [url7, setUrl7] = useState("https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Very_Black_screen.jpg/1600px-Very_Black_screen.jpg?20200816082819")
  const [url8, setUrl8] = useState("https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Very_Black_screen.jpg/1600px-Very_Black_screen.jpg?20200816082819")
  const [url9, setUrl9] = useState("https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Very_Black_screen.jpg/1600px-Very_Black_screen.jpg?20200816082819")
  const [url10, setUrl10] = useState("https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Very_Black_screen.jpg/1600px-Very_Black_screen.jpg?20200816082819")
  const [url11, setUrl11] = useState("https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Very_Black_screen.jpg/1600px-Very_Black_screen.jpg?20200816082819")
  const [url12, setUrl12] = useState("https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Very_Black_screen.jpg/1600px-Very_Black_screen.jpg?20200816082819")
  // subgraph names setup
  const [text1, setText1] = useState("")
  const [text2, setText2] = useState("")
  const [text3, setText3] = useState("")
  const [text4, setText4] = useState("")
  const [text5, setText5] = useState("")
  const [text6, setText6] = useState("")
  const [text7, setText7] = useState("")
  const [text8, setText8] = useState("")
  const [text9, setText9] = useState("")
  const [text10, setText10] = useState("")
  const [text11, setText11] = useState("")
  const [text12, setText12] = useState("")
  // subgraph signal setup
  const [signal1, setSignal1] = useState("")
  const [signal2, setSignal2] = useState("")
  const [signal3, setSignal3] = useState("")
  const [signal4, setSignal4] = useState("")
  const [signal5, setSignal5] = useState("")
  const [signal6, setSignal6] = useState("")
  const [signal7, setSignal7] = useState("")
  const [signal8, setSignal8] = useState("")
  const [signal9, setSignal9] = useState("")
  const [signal10, setSignal10] = useState("")
  const [signal11, setSignal11] = useState("")
  const [signal12, setSignal12] = useState("")
  
  //NOTE: need to take user inputs to update the curation amount!
  
    async function curate1(e) {
      //const { address } = e.avatar
      //if (!address) return setMintStatus('Not connected!')
      //setMintStatus('Please confirm transaction')
      const tx = await contract.write('mintSignal', subgraph_id1, "1000000000000000000", 0)
      //setMintStatus('Verifying...')
      await tx.wait()
      //setMintStatus('Minted!')
  }
  
    async function curate2(e) {
      const tx = await contract.write('mintSignal', subgraph_id2, "1000000000000000000", 0)
      await tx.wait()
  }
  async function curate3(e) {
      const tx = await contract.write('mintSignal', subgraph_id3, "1000000000000000000", 0)
      await tx.wait()
  }
  async function curate4(e) {
      const tx = await contract.write('mintSignal', subgraph_id4, "1000000000000000000", 0)
      await tx.wait()
  }
  async function curate5(e) {
      const tx = await contract.write('mintSignal', subgraph_id5, "1000000000000000000", 0)
      await tx.wait()
  }
  async function curate6(e) {
      const tx = await contract.write('mintSignal', subgraph_id6, "1000000000000000000", 0)
      await tx.wait()
  }
  async function curate7(e) {
      const tx = await contract.write('mintSignal', subgraph_id7, "1000000000000000000", 0)
      await tx.wait()
  }
  async function curate8(e) {
      const tx = await contract.write('mintSignal', subgraph_id8, "1000000000000000000", 0)
      await tx.wait()
  }
  async function curate9(e) {
      const tx = await contract.write('mintSignal', subgraph_id9, "1000000000000000000", 0)
      await tx.wait()
  }
  async function curate10(e) {
      const tx = await contract.write('mintSignal', subgraph_id10, "1000000000000000000", 0)
      await tx.wait()
  }
  async function curate11(e) {
      const tx = await contract.write('mintSignal', subgraph_id11, "1000000000000000000", 0)
      await tx.wait()
  }
  async function curate12(e) {
      const tx = await contract.write('mintSignal', subgraph_id12, "1000000000000000000", 0)
      await tx.wait()
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
                  subgraphs(first:30, orderBy: createdAt, orderDirection: desc, where:{signalledTokens_gt: 0, currentVersion_not: null}) {
                    id
                    nftID
                    displayName
                    image
                    currentSignalledTokens     
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
              //console.log(res.data.subgraphs[0].image)
              // update images
              setUrl1(res.data.subgraphs[0].image)
              setUrl2(res.data.subgraphs[1].image)
              setUrl3(res.data.subgraphs[2].image)
              setUrl4(res.data.subgraphs[3].image)
              setUrl5(res.data.subgraphs[4].image)
              setUrl6(res.data.subgraphs[5].image)
              setUrl7(res.data.subgraphs[6].image)
              setUrl8(res.data.subgraphs[7].image)
              setUrl9(res.data.subgraphs[8].image)
              setUrl10(res.data.subgraphs[9].image)
              setUrl11(res.data.subgraphs[10].image)
              setUrl12(res.data.subgraphs[11].image)
              // update display names
              setText1(res.data.subgraphs[0].displayName)
              setText2(res.data.subgraphs[1].displayName)
              setText3(res.data.subgraphs[2].displayName)
              setText4(res.data.subgraphs[3].displayName)
              setText5(res.data.subgraphs[4].displayName)
              setText6(res.data.subgraphs[5].displayName)
              setText7(res.data.subgraphs[6].displayName)
              setText8(res.data.subgraphs[7].displayName)
              setText9(res.data.subgraphs[8].displayName)
              setText10(res.data.subgraphs[9].displayName)
              setText11(res.data.subgraphs[10].displayName)
              setText12(res.data.subgraphs[11].displayName)
              // update signal amounts
              setSignal1("Current GRT Signal: " + Math.round(parseInt(res.data.subgraphs[0].currentSignalledTokens)/1000000000000000000))
              setSignal2("Current GRT Signal: " + Math.round(parseInt(res.data.subgraphs[1].currentSignalledTokens)/1000000000000000000))
              setSignal3("Current GRT Signal: " + Math.round(parseInt(res.data.subgraphs[2].currentSignalledTokens)/1000000000000000000))
              setSignal4("Current GRT Signal: " + Math.round(parseInt(res.data.subgraphs[3].currentSignalledTokens)/1000000000000000000))
              setSignal5("Current GRT Signal: " + Math.round(parseInt(res.data.subgraphs[4].currentSignalledTokens)/1000000000000000000))
              setSignal6("Current GRT Signal: " + Math.round(parseInt(res.data.subgraphs[5].currentSignalledTokens)/1000000000000000000))
              setSignal7("Current GRT Signal: " + Math.round(parseInt(res.data.subgraphs[6].currentSignalledTokens)/1000000000000000000))
              setSignal8("Current GRT Signal: " + Math.round(parseInt(res.data.subgraphs[7].currentSignalledTokens)/1000000000000000000))
              setSignal9("Current GRT Signal: " + Math.round(parseInt(res.data.subgraphs[8].currentSignalledTokens)/1000000000000000000))
              setSignal10("Current GRT Signal: " + Math.round(parseInt(res.data.subgraphs[9].currentSignalledTokens)/1000000000000000000))
              setSignal11("Current GRT Signal: " + Math.round(parseInt(res.data.subgraphs[10].currentSignalledTokens)/1000000000000000000))
              setSignal12("Current GRT Signal: " + Math.round(parseInt(res.data.subgraphs[11].currentSignalledTokens)/1000000000000000000))
              // set subgraphID to mint signal on
              setSubgraphID1(res.data.subgraphs[0].nftID)
              setSubgraphID2(res.data.subgraphs[1].nftID)
              setSubgraphID3(res.data.subgraphs[2].nftID)
              setSubgraphID4(res.data.subgraphs[3].nftID)
              setSubgraphID5(res.data.subgraphs[4].nftID)
              setSubgraphID6(res.data.subgraphs[5].nftID)
              setSubgraphID7(res.data.subgraphs[6].nftID)
              setSubgraphID8(res.data.subgraphs[7].nftID)
              setSubgraphID9(res.data.subgraphs[8].nftID)
              setSubgraphID10(res.data.subgraphs[9].nftID)
              setSubgraphID11(res.data.subgraphs[10].nftID)
              setSubgraphID12(res.data.subgraphs[11].nftID)
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
        src={url1}        
        //src=data.subgraphs[0].image
        position={[-4.4, 2, 5]}
        rotation={[0,1.6,0]}
        height={1.5}
        //onClick={() => console.log(color)}
        onClick={curate1}
      />
      <text
        value={text1}
        position={[-4.4, 3, 5]}
        rotation={[0,1.6,0]}
        color="white"
        bgColor="black"
        padding={0.1}
        bgRadius={0.1}
        />
      <text
        value={signal1}
        position={[-4.4, 1.2, 5]}
        rotation={[0,1.6,0]}
        color="white"
        bgColor="black"
        padding={0.1}
        bgRadius={0.1}
        />
      <image
        src={url2}
        position={[-4.4, 2, 2]}
        rotation={[0,1.6,0]}
        height={1.5}
        onClick={curate2}
      />
      <text
        value={text2}
        position={[-4.4, 3, 2]}
        rotation={[0,1.6,0]}
        color="white"
        bgColor="black"
        padding={0.1}
        bgRadius={0.1}
        />
      <text
        value={signal2}
        position={[-4.4, 1.2, 2]}
        rotation={[0,1.6,0]}
        color="white"
        bgColor="black"
        padding={0.1}
        bgRadius={0.1}
        />
      <image
        src={url3}
        position={[-4.4, 2, -1]}
        rotation={[0,1.6,0]}
        height={1.5}
        onClick={curate3}
      />
      <text
        value={text3}
        position={[-4.4, 3, -1]}
        rotation={[0,1.6,0]}
        color="white"
        bgColor="black"
        padding={0.1}
        bgRadius={0.1}
        />
      <text
        value={signal3}
        position={[-4.4, 1.2, -1]}
        rotation={[0,1.6,0]}
        color="white"
        bgColor="black"
        padding={0.1}
        bgRadius={0.1}
        />
      <image
        src={url4}
        position={[-4.4, 2, -4]}
        rotation={[0,1.6,0]}
        height={1.5}
        onClick={curate4}
      />
      <text
        value={text4}
        position={[-4.4, 3, -4]}
        rotation={[0,1.6,0]}
        color="white"
        bgColor="black"
        padding={0.1}
        bgRadius={0.1}
        />
      <text
        value={signal4}
        position={[-4.4, 1.2, -4]}
        rotation={[0,1.6,0]}
        color="white"
        bgColor="black"
        padding={0.1}
        bgRadius={0.1}
        />
      <image
        src={url5}
        position={[-4.4, 2, -7]}
        rotation={[0,1.6,0]}
        height={1.5}
        onClick={curate4}
      />
      <text
        value={text5}
        position={[-4.4, 3, -7]}
        rotation={[0,1.6,0]}
        color="white"
        bgColor="black"
        padding={0.1}
        bgRadius={0.1}
        />
      <text
        value={signal5}
        position={[-4.4, 1.2, -7]}
        rotation={[0,1.6,0]}
        color="white"
        bgColor="black"
        padding={0.1}
        bgRadius={0.1}
        />
      <image
        src={url6}        
        //src=data.subgraphs[0].image
        position={[-4.4, 2, -10]}
        rotation={[0,1.6,0]}
        height={1.5}
        //onClick={() => console.log(color)}
        onClick={curate1}
      />
      <text
        value={text6}
        position={[-4.4, 3, -10]}
        rotation={[0,1.6,0]}
        color="white"
        bgColor="black"
        padding={0.1}
        bgRadius={0.1}
        />
      <text
        value={signal6}
        position={[-4.4, 1.2, -10]}
        rotation={[0,1.6,0]}
        color="white"
        bgColor="black"
        padding={0.1}
        bgRadius={0.1}
        />
      <image
        src={url7}        
        //src=data.subgraphs[0].image
        position={[-4.4, 2, -13]}
        rotation={[0,1.6,0]}
        height={1.5}
        //onClick={() => console.log(color)}
        onClick={curate1}
      />
      <text
        value={text7}
        position={[-4.4, 3, -13]}
        rotation={[0,1.6,0]}
        color="white"
        bgColor="black"
        padding={0.1}
        bgRadius={0.1}
        />
      <text
        value={signal7}
        position={[-4.4, 1.2, -13]}
        rotation={[0,1.6,0]}
        color="white"
        bgColor="black"
        padding={0.1}
        bgRadius={0.1}
        />
      <image
        src={url8}        
        //src=data.subgraphs[0].image
        position={[-4.4, 2, -16]}
        rotation={[0,1.6,0]}
        height={1.5}
        //onClick={() => console.log(color)}
        onClick={curate1}
      />
      <text
        value={text8}
        position={[-4.4, 3, -16]}
        rotation={[0,1.6,0]}
        color="white"
        bgColor="black"
        padding={0.1}
        bgRadius={0.1}
        />
      <text
        value={signal8}
        position={[-4.4, 1.2, -16]}
        rotation={[0,1.6,0]}
        color="white"
        bgColor="black"
        padding={0.1}
        bgRadius={0.1}
        />
      <image
        src={url9}        
        //src=data.subgraphs[0].image
        position={[-4.4, 2, -19]}
        rotation={[0,1.6,0]}
        height={1.5}
        //onClick={() => console.log(color)}
        onClick={curate1}
      />
      <text
        value={text9}
        position={[-4.4, 3, -19]}
        rotation={[0,1.6,0]}
        color="white"
        bgColor="black"
        padding={0.1}
        bgRadius={0.1}
        />
      <text
        value={signal9}
        position={[-4.4, 1.2, -19]}
        rotation={[0,1.6,0]}
        color="white"
        bgColor="black"
        padding={0.1}
        bgRadius={0.1}
        />
      <image
        src={url10}        
        //src=data.subgraphs[0].image
        position={[-4.4, 2, -22]}
        rotation={[0,1.6,0]}
        height={1.5}
        //onClick={() => console.log(color)}
        onClick={curate1}
      />
      <text
        value={text10}
        position={[-4.4, 3, -22]}
        rotation={[0,1.6,0]}
        color="white"
        bgColor="black"
        padding={0.1}
        bgRadius={0.1}
        />
      <text
        value={signal10}
        position={[-4.4, 1.2, -22]}
        rotation={[0,1.6,0]}
        color="white"
        bgColor="black"
        padding={0.1}
        bgRadius={0.1}
        />
      <image
        src={url11}        
        //src=data.subgraphs[0].image
        position={[-4.4, 2, -25]}
        rotation={[0,1.6,0]}
        height={1.5}
        //onClick={() => console.log(color)}
        onClick={curate1}
      />
      <text
        value={text11}
        position={[-4.4, 3, -25]}
        rotation={[0,1.6,0]}
        color="white"
        bgColor="black"
        padding={0.1}
        bgRadius={0.1}
        />
      <text
        value={signal11}
        position={[-4.4, 1.2, -25]}
        rotation={[0,1.6,0]}
        color="white"
        bgColor="black"
        padding={0.1}
        bgRadius={0.1}
        />
      <image
        src={url12}        
        //src=data.subgraphs[0].image
        position={[-4.4, 2, -28]}
        rotation={[0,1.6,0]}
        height={1.5}
        //onClick={() => console.log(color)}
        onClick={curate1}
      />
      <text
        value={text12}
        position={[-4.4, 3, -28]}
        rotation={[0,1.6,0]}
        color="white"
        bgColor="black"
        padding={0.1}
        bgRadius={0.1}
        />
      <text
        value={signal12}
        position={[-4.4, 1.2, -28]}
        rotation={[0,1.6,0]}
        color="white"
        bgColor="black"
        padding={0.1}
        bgRadius={0.1}
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
        //value={response} //remove comment if want to show the raw response
        position={[0, 3, 3]}
        color="white"
        bgColor="black"
        padding={0.01}
        bgRadius={0.01}
        fontSize={0.05}
      />
    </>
  )
}
