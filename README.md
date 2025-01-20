![image](https://miro.medium.com/v2/resize:fit:679/1*qofW14aEXsACy-LnsEC7gA.png)
# Talking AI with reactjs + threejs

```
npm i
npm run dev
```



<h2>Tutorial</h2>

**MAIN**
**STEP**
**1. Import GLB and create file**
```
npx ggozad/gltfjsx#fix-dependencies ./public/models/character.glb -o ./src/components/Avatar.jsx -r public
```
**2. Config nhân vật vị trí đứng, scale, ...**
**3. Background**
**3. Setup background trong Experience**
**4. Animation**
**Animation:** Convert file glb sang fbx bằng Blender IMPORT GLB > EXPORT FBX. ***Lưu ý:*** PHẦN transform khi export là Foward: Y forward, Up: Z up
* Vào maximo add fbx đã conver và chon animation. sau đó tải về animation mong muốn. ***Lưu ý:*** Không chọn without skin
* Add animation vào Avatar và config
**5. Audio**
* Dùng [elevenlabs](https://elevenlabs.io/app/speech-synthesis/text-to-speech)  để làm text > audio. 
***Lưu ý"*** convert mp3 > ogg và ném cùng với mp3
**6. [Audio] Convert Audio to JSON**
* Tải>giải nén> coppy vào thư mục src [rhubarb-lip-sync](https://github.com/DanielSWolf/rhubarb-lip-sync/releases) 
* CD đến thư mục Rhubarb-Lip-Sync-1.13.0
```
.\rhubarb.exe -f json ../public/audios/example.ogg -o example.json  convert ogg sang json, nhó đổi tên file trong command
```
* Có Json rồi cop lên thư mục Audios có file mp3 + ogg nhé
**7. [Audio] Play Audio**
* Cài leva
```
npm i leva
```


