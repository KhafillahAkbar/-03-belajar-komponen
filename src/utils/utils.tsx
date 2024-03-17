export function getImageUrl(imageId, size) {
    let imageSize = size > 90 ? 's' : 'b'
    return (
      'https://i.imgur.com/' +
      imageId +
      imageSize +
      '.jpg'
    );
  }

  export function getImageUrlV2(person, size) {
    return (
      'https://i.imgur.com/' +
      person.imageId +
      size +
      '.jpg'
    );
  }