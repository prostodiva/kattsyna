import { useEffect, useState } from 'react';

// WebGL support detection utility
export const checkWebGLSupport = () => {
    try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        
        if (!gl) {
            return {
                supported: false,
                reason: 'WebGL context not available'
            };
        }

        // Check for basic WebGL capabilities
        const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
        if (debugInfo) {
            const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
            const vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
            
            return {
                supported: true,
                renderer,
                vendor,
                gl
            };
        }

        return {
            supported: true,
            gl
        };
    } catch (e) {
        return {
            supported: false,
            reason: e.message
        };
    }
};

export const isWebGLSupported = () => {
    return checkWebGLSupport().supported;
};

export const getWebGLInfo = () => {
    return checkWebGLSupport();
};

// Fallback component for when WebGL is not available
export const WebGLFallback = ({ children, fallback }) => {
    const [webGLAvailable, setWebGLAvailable] = useState(true);

    useEffect(() => {
        setWebGLAvailable(isWebGLSupported());
    }, []);

    if (!webGLAvailable) {
        return fallback || (
            <div className="flex items-center justify-center p-8 text-center">
                <div>
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <p className="text-gray-500 text-sm">3D content not available</p>
                </div>
            </div>
        );
    }

    return children;
};
