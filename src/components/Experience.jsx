import { Environment, OrbitControls, useTexture } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Avatar } from "./Avatar";
import { TalkProvider, useTalk } from "../context/TalkContext";
export const Experience = () => {
  // Config background
  const texture = useTexture("textures/background.jpeg");
  const viewport = useThree((state) => state.viewport);

  return (
    <TalkProvider>
      <OrbitControls />
      {/* Custom về postion-vị trí, scale-kích thước đứng của nhân vật */}
      {/* Positon [xoay trái phải, trên dưới, xa gần] */}
      <Avatar position={[0, -3.4, 2]} scale={2.5} />
      {/* Điều chỉnh môi trường */}
      <Environment preset="sunset" />
      {/* Background */}
      <mesh>
      <planeGeometry args={[viewport.width, viewport.height]} />
      <meshBasicMaterial map={texture} />
      </mesh>
      
    </TalkProvider>
  );
};
