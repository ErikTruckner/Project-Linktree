import { useMemo, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

const actionNames = [
  // 'SphereAction',
  'TorusAction1',
  'TorusAction2',
  'TorusAction3',
]

const ReactLogo = () => {
  // Memoize the reactLogo object to avoid unnecessary recalculations and re-renders
  const reactLogo = useMemo(() => useGLTF('./reactLogo/scene.gltf'), [])

  // Animation
  const animations = useAnimations(reactLogo.animations, reactLogo.scene)

  useEffect(() => {
    actionNames.forEach((actionName) => {
      const action = animations.actions[actionName]
      action.play()
    })
  }, [animations])

  return (
    <mesh>
      {/* this is our gltf model */}
      <primitive
        object={reactLogo.scene}
        // This gives a good angle for model on load
        rotation={[0, -5, 0]}
        // Change model size with scale
        scale={0.65}
      />
    </mesh>
  )
}

export default ReactLogo
