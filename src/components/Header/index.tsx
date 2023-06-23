import Image from "next/image";

import HeaderImage from "../../../public/logo.png";

export function Header() {
  return (
    <main>
      <Image src={HeaderImage} alt="logo image" />
    </main>
  );
}
