import Image from "next/image";
import Profile from "./components/profile";
import { Gallery } from "./components/gallery";
import TodoList from "./components/todolist";
import Bio from "./components/bio";
import MyGallery from "./components/mygallery";
import MyProfile from "./components/myprofile";
import MyProfileV2 from "./components/myprofilev2";

export default function Home() {
  return(
    <section>
      <h1 className="font-semibold text-slate-900 truncate pr-20 text-center">Ilmuwan yang luar biasa</h1>
      <hr />
      <Gallery />
      <hr />
      <TodoList />
      <hr />
      <MyProfileV2 />
    </section>
  )
}
