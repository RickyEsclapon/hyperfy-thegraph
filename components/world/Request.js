import React, { useEffect, useState, useMemo } from 'react';
import { useEngine, useEth } from 'hyperfy';

export default function Request([object Object]) {
  const CURATION_CONTRACT = '0xadca0dd4729c8ba3acf3e99f3a9f471ef37b6825';
  const NUM_SUBGRAPHS = 12;

  const engine = useEngine();
  const eth = useEth();
  const contract = useMemo(
    () =>
      eth.contract(CURATION_CONTRACT, [
        'function mintSignal(uint256 _subgraphID, uint256 _tokensIn, uint256 _nSignalOutMin) external override notPartialPaused',
      ]),
    [eth]
  );

  // Initialize state
  const [status_mint, setMintStatus] = useState(null);
  const [status, setStatus] = useState('Who are you?');
  const [response, setResponse] = useState('');

  const [subgraphIDs, setSubgraphIDs] = useState(Array(NUM_SUBGRAPHS).fill(null));
  const [urls, setUrls] = useState(Array(NUM_SUBGRAPHS).fill('https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Very_Black_screen.jpg/1600px-Very_Black_screen.jpg?20200816082819'));
  const [texts, setTexts] = useState(Array(NUM_SUBGRAPHS).fill(''));
  const [signals, setSignals] = useState(Array(NUM_SUBGRAPHS).fill(''));

  const curate = async (e, index) => {
    const tx = await contract.write('mintSignal', subgraphIDs[index], '1000000000000000000', 0);
    await tx.wait();
  };

  useEffect(() => {
    return engine.onAction(async (action, ...args) => {
      if (action === 'request') {
        const address = args[0];
        if (address != null) {
          setStatus(`Welcome ${address.slice(0, 5)}...`);
        } else {
          setStatus(`I asked who you are, identify yourself!`);
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
            .then((res) => {
              const subgraphs = res.data.subgraphs.slice(0, NUM_SUBGRAPHS);
              setSubgraphIDs(subgraphs.map((sg) => sg.nftID));
              setUrls(subgraphs.map((sg) => sg.image));
              setTexts(subgraphs.map((sg) => sg.displayName));
              setSignals(
                subgraphs.map((sg) => `Current GRT Signal: ${Math.round(parseInt(sg.currentSignalledTokens) / 1000000000000000000)}`)
              );
            });
        } catch (e) {
          console.log(e);
          console.log('request failed');
        }
      }
    });
  }, []);

  async function call(e) {
    const { address } = e.avatar;
    engine.dispatch('request', address);
    console.log('dispatched request');
  }

  return (
    <>
      {Array(NUM_SUBGRAPHS)
        .fill()
        .map((_, i) => (
          <>
            <image
              key={`image_${i}`}
              src={urls[i]}
              position={[-4.4, 2, 5 - 3 * i]}
              rotation={[0, 1.6, 0]}
              height={1.5}
              onClick={(e) => curate(e, i)}
            />
            <text
              key={`text_${i}`}
              value={texts[i]}
              position={[-4.4, 3, 5 - 3 * i]}
              rotation={[0, 1.6, 0]}
              color="white"
              bgColor="black"
              padding={0.1}
              bgRadius={0.1}
            />
            <text
              key={`signal_${i}`}
              value={signals[i]}
              position={[-4.4, 1.2, 5 - 3 * i]}
              rotation={[0, 1.6, 0]}
              color="white"
              bgColor="black"
              padding={0.1}
              bgRadius={0.1}
            />
          </>
        ))}
      <model
        src="Astronaut.glb"
        position={[0, 0.1, 5]}
        allColliders="trimesh"
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
        src="detective_purchased.glb"
        position={[2.5, 0.1, 6]}
        rotation={[0, -0.7, 0]}
        allColliders="trimesh"
        scale={1.15}
        onClick={call}
      />
      <text
        value={status}
        position={[2.5, 2.5, 6]}
        rotation={[0, -0.7, 0]}
        color="white"
        bgColor="black"
        padding={0.1}
        bgRadius={0.1}
      />
      <text
        position={[0, 3, 3]}
        color="white"
        bgColor="black"
        padding={0.01}
        bgRadius={0.01}
        fontSize={0.05}
      />
    </>
  );
}
