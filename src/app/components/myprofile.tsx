import { getImageUrl } from "@/utils/utils";

function MyAvatar({person, size }) {
  return (
    <div>
        <h2>{person.name}</h2>
    <img
      className="avatar"
      src={getImageUrl(person.imageId, size)}
      alt={person.name}
      width={size}
      height={size}
    />
    </div>
  );
}

export default function MyProfile() {
  return (
    <MyAvatar
      size={110}
      person={{ 
        name: 'Gregorio Y. Zara', 
        imageId: '7vQD0fP'
      }}
    />
  );
}
