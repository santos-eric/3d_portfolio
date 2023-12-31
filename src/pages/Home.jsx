import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'

// add assetsInclude: ['**/*.glb'], to vite.config to include glb assets
import Island from '../models/Island'
import Sky from '../models/Sky'
import Bird from '../models/Bird'
import Plane from '../models/Plane'

{/* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        PopUp
      </div> */}

const Home = () => {

  const [isRotating, setIsRotating] = useState(false)
  const [currentStage, setCurrentStage] = useState(1)

   // island sizing
  // set island default position and make it mobile getting the screeSize from window.innerWidth
  const adjustIslandForScreenSize = () => {
    let screenScale = null
    let screenPosition = [0, -6.5, -43]
    let rotation = [0.1,4.7,0]

    if (window.innerWidth < 768) {
      // [x,y,z] scale
      screenScale = [0.9, 0.9, 0.9]
    } else {
      screenScale = [1, 1, 1]
    }

    return [screenScale, screenPosition, rotation]
  }

  // plane sizing
  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      // [x,y,z] scale
      screenScale = [1.5, 1.5, 1.5]

      // sets which way the object is facing
      screenPosition=[0,-1.5, 0]
    } else {
      screenScale = [3, 3, 3]
      screenPosition=[0,-4,-4]
    }

    return [screenScale, screenPosition]
  }

  // destructure the function to use as island component properties
  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize()

  const [planeScale, planePosition] = adjustPlaneForScreenSize()

  return (
    // full width and height
    <section className="w-full h-screen relative">

      {/* root component for 3D Scene */}
      <Canvas
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}

      // near 0.1 and further than 1000 won't be rendered
      camera={{near: 0.1, far: 1000}}
      >
        <Suspense fallback={<Loader />}>
          {/* positions are xyz */}
          <directionalLight position={[1,1,1]} intensity={2}/>
          <ambientLight intensity={0.5} />

          {/* emits light from 1 direction*/}
          {/* <pointLight /> */}

          {/* same but in cone shape */}
          {/* <spotLight /> */}

          <hemisphereLight skyColor='#b1e1ff' groundCOlor='#000000'/>
          <Bird/>
          <Sky isRotating={isRotating}/>
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            planeScale={planeScale}
            planePosition={planePosition}
            rotation = {[0,20,0]}
          />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home