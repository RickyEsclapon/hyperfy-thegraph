import React, { useRef } from 'react'
import Request from './Request'

export default function Main() {
  const videoRef = useRef()
  let animation = 'Shoot' //not currently working - idea is to go from Shoot to idle once user is logged in
  return (
    <environment>
      <Request />
      <climbing />
      <gliding />
      <flying />
      <rigidbody>
        <model src="world.glb" />
      </rigidbody>
      <rigidbody>
        <spawn 
          position={[0,0,10.5]}
        />
        <model 
          src="space_shuttle_purchased.glb" 
          position={[3.3,0,12]}
          rotation={[0,3.5,0]}
          scale={0.8}
        />
        <model 
          src="space_hallway_purchased.glb" 
          position={[0,0,-2.3]}
          allColliders='trimesh'
          scale={2}
        />
        <model 
          src="space_hallway_purchased.glb" 
          position={[0,0,-23.5]}
          allColliders='trimesh'
          scale={2}
        />
        <model 
          src="scifi_door_purchased.glb" 
          position={[0,0,-30]}
          allColliders='trimesh'
          scale={1.2}
        />
        <model 
          src="corridor_purchased.glb" 
          position={[0,3.8,14]}
          allColliders='trimesh'
          scale={2.4}
        />
        <box 
          size={[10,10,1]}
          color='black'   
          position={[0,3.8,20]}
        />
        <box 
          size={[7,7,1]}
          color='black'   
          position={[0,8.1,8]}
        />
        <model 
          src="moon.glb" 
          position={[-2,3.8,12]}
          allColliders='trimesh'
          scale={0.3}
        />
        <group position={[0,3.5,19.4]}>
        <video
          height={5}
          ref={videoRef}
          src="video.mp4"
          autoplay={false}
          rotation={[0,3.15,0]}
        />
        <trigger
          size={15}
          onEnter={() => videoRef.current.play()}
          onLeave={() => videoRef.current.pause()}
        />
      </group>
      </rigidbody>
    </environment>
  )
}
