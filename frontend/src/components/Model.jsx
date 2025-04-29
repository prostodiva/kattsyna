import { useAnimations, useGLTF } from '@react-three/drei';
import { useEffect } from 'react';

function Model() {
    const { scene, animations } = useGLTF('/models/twist.glb');
    const { actions } = useAnimations(animations, scene);
    
    useEffect(() => {
        Object.values(actions).forEach(action => {
            action.play();
        });
    }, [actions]);

    return (
        <primitive 
            object={scene} 
            scale={0.02}
        />
    );
}

export default Model; 