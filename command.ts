//! MAIN
// npm install -g @react-three/gltfjsx
//! STEP
// 1. Import GLB and create file
// npx ggozad/gltfjsx#fix-dependencies ./public/models/character.glb -o ./src/components/Avatar.jsx -r public
// 2. Config nhân vật vị trí đứng, scale, ...
//! 3. Backgroud
// 3. Setup background trong Experience
//! 4. Animation
// Animation: Convert file glb sang fbx bằng Blender IMPORT GLB > EXPORT FBX. Lưu ý: PHẦN transform khi export là Foward: Y forward, Up: Z up
// - Vào maximo add fbx đã conver và chon animation. sau đó tải về animation mong muốn. Lưu ý: Không chọn without skin
// Add animation vào Avatar và config
//! 5. Audio
// 5. Dùng https://elevenlabs.io/app/speech-synthesis/text-to-speech để làm text > audio. 
// Lưu ý convert mp3 > ogg và ném cùng với mp3
//! 6. [Audio] Convert Audio to JSON
// 6. Tải>giải nén> coppy vào thư mục https://github.com/DanielSWolf/rhubarb-lip-sync/releases
// CD đến thư mục Rhubarb-Lip-Sync-1.13.0
// .\rhubarb.exe -f json ../public/audios/example.ogg -o example.json  convert ogg sang json, nhó đổi tên file trong command
// Có json rồi cop lên thư mục Audios có file mp3 + ogg nhé
//! 7. [Audio] Play Audio
// Cài leva (npm i leva)
//! 8. Config Mõm (Kinh nghiệm: config cái params này từ đầu trước khi cho glb để bỏ qua được step này)
// Đọc docs https://docs.readyplayer.me/ready-player-me/api-reference/rest-api/avatars/get-3d-avatars#examples-7
// Chủ yếu là tải glb với mồm há của readyplayer.me với params của họ morphTargets ?morphTargets=ARKit,Oculus Visemes
// Nếu tự làm glb thì chỗ mõm config chỉn chu hơn 
// Tải glb về xong thì add replace với glb ban đầu
//! 9. Config JsonFile Audio
//! 10. Dùng JSonfile kết hợp với mõm (step 8) để config
