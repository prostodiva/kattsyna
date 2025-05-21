import { OrbitControls, useAnimations, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import laptopScene from "../assets/3d/laptop.glb";

const Laptop = ({ scale, position, rotation }) => {
    const laptopRef = useRef();
    const { scene, animations } = useGLTF(laptopScene);
    const { actions } = useAnimations(animations, laptopRef);

    useEffect(() => {
        if (actions && actions["Idle"]) {
            actions["Idle"].play();
        }
    }, [actions]);

    useFrame((state, delta) => {
        if (laptopRef.current) {
            laptopRef.current.rotation.y += delta * 0.2;
        }
    });

    return (
        <mesh ref={laptopRef} position={position} scale={scale} rotation={rotation}>
            <primitive object={scene} />
        </mesh>
    );
};

const LaptopCanvas = ({ scrollContainer }) => {
    const [rotationX, setRotationX] = useState(0);
    const [rotationY, setRotationY] = useState(0);
    const [scale, setScale] = useState([2, 2, 2]);
    const [position, setPosition] = useState([0, 0, 0]);
    const scrollTimeout = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (scrollTimeout.current) {
                clearTimeout(scrollTimeout.current);
            }

            scrollTimeout.current = setTimeout(() => {
                const scrollTop = window.scrollY;
                const rotationXValue = scrollTop * -0.0006;
                const rotationYValue = scrollTop * -0.00075;
                setRotationX(rotationXValue);
                setRotationY(rotationYValue);
            }, 16); // roughly one frame at 60fps
        };

        const handleResize = () => {
            if (window.innerWidth < 768) {
                setScale([1,1,1]);
                setPosition([0.2, -0.1, 0]);
            } else if (window.innerWidth < 1024) {
                setScale([1.33,1.33,1.33]);
                setPosition([0.2, -0.3, 0]);
            } else if (window.innerWidth < 1280) {
                setScale([1.5,1.5,1.5]);
                setPosition([0.2, -0.4, 0]);
            } else if (window.innerWidth < 1536) {
                setScale([1.66,1.66,1.66]);
                setPosition([0.2, -0.5, 0]);
            } else {
                setScale([2,2,2]);
                setPosition([0.2,-0.7,0]);
            }
        };

        handleResize();
        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
            if (scrollTimeout.current) {
                clearTimeout(scrollTimeout.current);
            }
        }
    }, []);

    return (
        <div className="w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[700px]">
            <Canvas
                className='w-full h-full bg-transparent z-10'
                camera={{
                    position: [0, 2, 10],
                    fov: 65,
                    near: 0.1,
                    far: 1000
                }}
            >
                <Suspense fallback={null}>
                    <directionalLight position={[1, 1, 1]} intensity={2} />
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 5, 10]} intensity={2} />
                    <spotLight position={[0, 50, 10]} angle={0.15} penumbra={1} intensity={2} />
                    <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />
                    <OrbitControls 
                        enablePan={false} 
                        enableZoom={false}
                        enableRotate={true}
                        autoRotate={false}
                        minPolarAngle={Math.PI / 4}
                        maxPolarAngle={Math.PI / 2}
                        minAzimuthAngle={-Math.PI / 4}
                        maxAzimuthAngle={Math.PI / 4}
                    />
                    <Laptop
                        scale={scale}
                        position={position}
                        rotation={[rotationX, rotationY, 0]}
                    />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default LaptopCanvas;