// 3D objects can be consumed and used with useGLTF alone but if it contains multiple objects than use the object like on Island.jsx

import React from 'react'
import { useGLTF } from '@react-three/drei'

import skyScene from '../assets/3d/sky.glb'

const Sky = () => {
    const sky = useGLTF(skyScene)

    return (
        <mesh>
            <primitive object={sky.scene}/>
        </mesh>
  )
}

export default Sky