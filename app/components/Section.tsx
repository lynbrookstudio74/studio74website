import { ReactNode } from "react";

export default function Section({ children }: { children: ReactNode }) {
  return <section className="mt-16 mx-5">{children}</section>;
}
