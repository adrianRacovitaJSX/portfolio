import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen w-full bg-white dark:bg-black">
      <BackgroundGradientAnimation
        containerClassName="!h-full fixed inset-0"
        className="!h-full"
        firstColor="34, 197, 94"
        secondColor="16, 185, 129"
        thirdColor="4, 120, 87"
        fourthColor="6, 95, 70"
        fifthColor="6, 78, 59"
        pointerColor="52, 211, 153"
        size="100%"
        interactive={false}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}