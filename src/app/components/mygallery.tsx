import { getImageUrl } from "@/utils/utils";

function MyProfile({name,imageUrl,profession, awards, discoveries}){
    return (
        <section className="profile">
            <h2>{name}</h2>
            <img
            className="avatar"
            src={getImageUrl(imageUrl)}
            alt ={name}
            width={70}
            height={70}
            />
            <ul>
                <li>
                    <b>Profesi: </b>
                    {profession}
                </li>
                <li>
                    <b>Penghargaan : {awards.length} </b>
                    ({awards.join(', ')})          
                </li>
                <li>
                    <b>Telah menemukan :</b>
                    {discoveries}
                </li>
            </ul>
        </section>
    );
}

export default function MyGallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <MyProfile
      name="Maria Skłodowska-Curie"
      imageUrl="szV5sdG"
      profession="Fisikiawan dan Kimiawan"
      awards={["Penghargaan Nobel Fisika", "Penghargaan Nobel Kimia", "Medali Davy", "Medali Matteucci"]}
      discoveries="polonium (unsur kimia)"
      />
      <MyProfile
      name="Katsuko Saruhasi"
      imageUrl="YfeOqp2"
      profession="Ahli Geokimia"
      awards={["Penghargaan Miyake Geokimia","Penghargaan tanaka"]}
      discoveries="Sebuah metode untuk mengukur karbon dioksida pada air laut"
      />
    </div>
  );
}