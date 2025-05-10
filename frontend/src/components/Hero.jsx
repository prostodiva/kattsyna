import "../../index.css";
import { styles } from "../styles/index"
import laptop from "../assets/3d/laptop.png";
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function LaptopImage() {
    const texture = new THREE.TextureLoader().load(laptop); // If imported
    return (
        <mesh>
            <planeGeometry args={[3, 2]} />
            <meshBasicMaterial map={texture} transparent />
        </mesh>
    )
}

function LaptopImageViewer() {
    return (
        <div style={{ width: '900px', height: '700px' }}>
            <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight intensity={0.7} />
                <LaptopImage />
                <OrbitControls
                    enablePan={false}
                    enableZoom={false}
                    minAzimuthAngle={-0.3927}
                    maxAzimuthAngle={0.3927}
                    minPolarAngle={Math.PI / 2}
                    maxPolarAngle={Math.PI / 2}
                />
            </Canvas>
        </div>
    )
}

const Hero = ({ scrollContainer }) => {
    return (
        <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="w-full h-full animated-gradient"></div>
            </div>

            <div className="relative z-10 flex flex-row items-center w-4/5 mx-auto">
                <div className="flex flex-col items-start mr-12">
                    <h1
                        className={styles.sectionText}
                        style={{
                            fontSize: "94px",
                            lineHeight: "80px",
                        }}
                    >
                        RITA <br /> KATTSYNA
                    </h1>
                    <div
                        className="relative z-20 font-bold text-[14px] sm:text-[18px] md:text-[20px] 2xl:text-[24px] leading-[1.4] streaky-glow text-white"
                        style={{
                            fontFamily: 'sohne-var, "Helvetica Neue", Arial, sans-serif',
                            fontSize: "30px",
                            marginTop: "20px",
                        }}
                    >
                        <p>Crafting efficient code <br /> that solves real-world problems.</p>
                    </div>
                </div>
                <div>
                    <LaptopImageViewer />
                </div>

            </div>
        </section>
    );
};

export default Hero;