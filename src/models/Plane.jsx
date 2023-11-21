import React from 'react'

import planeScene from '../assets/3d/plane.glb'
import { useGLTF } from '@react-three/drei'

// don't have to name all the destructured props just spread(...)
const Plane = ({isRotating, ...props}) => {
    const {scene, animations} = useGLTF(planeScene)

    return (
    //   accept all props (...)
      <mesh {...props}>
          <primitive object={scene}/>
    </mesh>
  )
}

export default Plane