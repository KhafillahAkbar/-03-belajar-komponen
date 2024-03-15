import Image from "next/image";
import Profile from "./components/profile";

export default function Home() {
  return(
    <>
    <div style={{ textAlign: 'center' }}>
    <h3>Ilmuwan yang luar biasa</h3>
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <Profile />
    <Profile />
    <Profile />
    </div>
    </>
  )
}
