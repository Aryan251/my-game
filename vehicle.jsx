// Vehicle Component
import { useSphere, useCylinder, useBox } from '@react-three/rapier';
import { useFrame } from '@react-three/fiber';

const Vehicle = () => {
  const [bodyRef] = useBox(() => ({ mass: 1 }));
  const [frontWheelRef] = useSphere(() => ({ mass: 0.5, args: [0.5] })); // Sphere for front wheel
  const [backWheelRef] = useCylinder(() => ({ mass: 0.5, args: [0.2, 0.2, 1, 32] })); // Cylinders for back wheels
  
  // Use hooks for wheel joints and car movement later

  return (
    <>
      <mesh ref={bodyRef} /* ...body props */>
        <boxGeometry args={[2, 1, 4]} />
        <meshStandardMaterial color="orange" />
      </mesh>
      <mesh ref={frontWheelRef} /* ...front wheel props */ />
      <mesh ref={backWheelRef} /* ...back wheels props */ />
    </>
  );
};
