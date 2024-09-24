export default function ProjectContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className='bg-inherit min-h-screen max-w-[1100px] mx-auto border-x-2 border-orange-200 flex flex-col'>
        {children}
      </div>
    </>
  );
}
