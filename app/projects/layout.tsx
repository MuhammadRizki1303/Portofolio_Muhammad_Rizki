export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="projects-layout w-full min-h-screen">
      {children}
    </div>
  );
}
