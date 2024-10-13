import Navbar  from "@/components/Navbar"

export default function ServiceLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        <Navbar />
        {children}
      </section>
    )
}