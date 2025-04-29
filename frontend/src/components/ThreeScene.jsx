import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Model from './Model';

const ThreeScene = () => {
    return (
        <div style={{ width: '100%', height: '500px' }}>
            <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight intensity={1} />
                <pointLight position={[5, 5, 5]} />
                <Model />
                <OrbitControls />
            </Canvas>
        </div>
    );
};

export default ThreeScene; 