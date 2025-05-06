# Virtual Try-On E-Shop (Demo)
## Description
This project is a web-based demo for an innovative e-commerce experience that allows users to **try on clothes in Virtual Reality** (VR) before purchasing.
It combines a traditional online shopping layout with VR technology to enhance user engagement and shopping confidence.

![Screen](img\Screen_Demo.jpeg)

## Features
- Standard e-commerce interface (homepage, collections, product pages);

- "Try on in VR" button to enter the experience;

- 3D clothing models designed in Blender;

- VR try-on experience powered by A-Frame and WebXR.

## Usage
### Access the Demo
You can access the demo through this link:  
[https://c4mms.github.io/vrProject/](https://c4mms.github.io/vrProject/)


### Accessing the VR Feature
The VR experience is available in two ways:
  1. **Visit the VR page** directly on the website.
  2. **Click the "Try on in VR" button** next to the product that ofefr this option.

> **Note:** While the VR feature works on **PC**, **iPad**, and **smartphones**, it is not as optimal as when using a VR headset.


## Technologies Used
- **HTML**: The website structure was built using HTML.
- **CSS**: Used for styling the website (if applicable).
- **JavaScript**: Used for interactive elements.
- **A-Frame**: A web framework built on top of HTML and JavaScript for creating 3D and VR experiences.
- **WebXR API**: JavaScript API that enables VR and AR device integration for immersive web experiences.
- **Blender**: Used to create the 3D clothing models displayed in the VR try-on feature.
- **Meta Quest 2**: Recommended for the best VR experience. 
- **Supported Browsers**: The VR feature works in WebXR-compatible browsers like **Google Chrome** and **Mozilla Firefox**.
  
## Hosting 3D Models with AWS S3
To host .glb (GLTF binary) files and embed them in your VR scenes:
### Step 1: Upload the .glb model to an AWS S3 Bucket
1. Go to [AWS S3 Console](https://eu-north-1.console.aws.amazon.com/s3/home?region=eu-north-1)

2. Choose (or create) a bucket.

3. Upload your .glb file (e.g., jacket.glb).

4. After uploading, click on the file name.

### Step 2: Set the File’s Metadata
To ensure your model loads properly in A-Frame or similar frameworks:

1. Click “Properties” > Scroll to Metadata.

2. Add a Metadata:
   - Type --> System-Defined
   - Key --> Content-Type
   - Value --> model/gltf-binary

### Set the CORS Policy (Cross-Origin Resource Sharing)
To allow your website to access the file from another origin (especially important for A-Frame/WebXR):

- In the S3 Bucket, go to **Permissions** > **CORS Configuration**.
- Add the following JSON and click **Save**:
```json
[
  {
    "AllowedHeaders": ["*"],
    "AllowedMethods": ["GET"],
    "AllowedOrigins": ["*"],
    "ExposeHeaders": [],
  }
]
 ```
  > **Note:** This allows any domain to load your 3D models. For more security, replace "*" in "AllowedOrigins" with your actual domain.

## Future Improvements (Ideas)

- Full-body avatar customization (e.g., height, body shape).
- Add physics (cloth simulation, realistic collisions).
- Enable collision detection in the VR showroom.
- Backend connection for saving favorites or avatar profiles.

## Motivation

This project was created as an experimental blend of fashion, design, and immersive technology. Our goal was to rethink the online shopping experience by giving users a sense of presence and realism through VR — transforming browsing into something more interactive and engaging.

## Credits

This project was developed by a two-person team:

3D Models: Created in Blender by **Daniele Turkaj**

Web Development & VR Integration: Handled by **Camilla Molinengo**

## License

This project is licensed under **All Rights Reserved**.  
You may not copy, modify, distribute, or use any part of this project without explicit permission.
