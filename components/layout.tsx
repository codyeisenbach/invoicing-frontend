import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="relative bg-black w-screen h-screen flex justify-start flex-col">
      <div className="absolute top-0 justify-start items-center px-8 h-20 bg-gray-900 flex self-center w-screen">
        <p className="font-sans text-4xl">Invoice App</p>
      </div>
      {children}
    </div>
  );
}
