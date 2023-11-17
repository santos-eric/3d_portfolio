import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'

{/* <div className="absolute top-28 left-0 right-0 z-10 flex items-cener justify-center">
        PopUp
      </div> */}

const Home = () => {
  return (
    // full width and height
    <section className="w-full h-screen relative">
      {/* root component for 3D Scene */}
      <Canvas
      className='w-full h-screen bg-transparent'
      // near 0.1 and further than 1000 won't be rendered
      camera={{near: 0.1, far: 1000}}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight />
          <ambientLight />
          <pointLight />
          <spotLight />
          <hemisphereLight/>
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home