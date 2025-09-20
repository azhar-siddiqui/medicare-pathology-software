export default function PageHeading({
  heading,
  subTitle,
}: Readonly<{ heading: string; subTitle?: string }>) {
  return (
    <div>
      <h2 className="text-2xl font-bold tracking-tight">{heading}</h2>
      {subTitle && <p className="text-muted-foreground">{subTitle}</p>}
    </div>
  );
}
