import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Code2, Smartphone, MousePointer2 } from "lucide-react";

export const ServicesGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
      <Card className="bg-white/5 border-white/10">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center">
            <Code2 className="h-6 w-6 text-emerald-500 mb-1" />
          </div>
          <CardTitle className="text-lg">Desarrollo Web</CardTitle>
          <CardDescription className="text-sm">Sitios web modernos y optimizados</CardDescription>
        </CardHeader>
      </Card>

      <Card className="bg-white/5 border-white/10">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center">
            <Smartphone className="h-6 w-6 text-emerald-500 mb-1" />
          </div>
          <CardTitle className="text-lg">Apps Móviles</CardTitle>
          <CardDescription className="text-sm">Aplicaciones nativas y multiplataforma</CardDescription>
        </CardHeader>
      </Card>

      <Card className="bg-white/5 border-white/10">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center">
            <MousePointer2 className="h-6 w-6 text-emerald-500 mb-1" />
          </div>
          <CardTitle className="text-lg">UI/UX Design</CardTitle>
          <CardDescription className="text-sm">Interfaces intuitivas y atractivas</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};