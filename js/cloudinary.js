 // Placeholder function for uploading the image to Cloudinary
async function uploadImageToCloudinary(file) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', "Flavors feast"); // Replace with your actual preset

    const response = await fetch('https://api.cloudinary.com/v1_1/dfksqzury/image/upload', {
        method: 'POST',
        body: formData,
    });

    if (!response.ok) {
        throw new Error('Failed to upload image');
    }

    return await response.json(); // Returns the JSON response
}