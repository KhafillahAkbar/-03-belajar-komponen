import Image from "next/image";

export default function TodoList() {
    return (
    <>
        <h1>Daftar Tugas Putri</h1>
        <img 
          src="https://i.imgur.com/yXOvdOSs.jpg" 
          alt="Putri" 
          className="photo"
         />
        <ul>
          <li>Mengerjakan PR</li>
          <li>Pergi Belanja</li>
          <li>Minum vitamin</li>
        </ul>
      </>
    )
  }