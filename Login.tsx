import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sparkles, User, Lock } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

export default function Login() {
  const [, setLocation] = useLocation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    setLocation("/lessons");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#B1CFB7] via-[#EFD9AA] to-[#B3D9E1] flex items-center justify-center p-4" dir="rtl">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-xl mb-4">
            <Sparkles className="w-6 h-6 text-[#B3D9E1]" />
            <span className="text-2xl font-bold text-gray-800">المعلم الذكي</span>
          </div>
          <p className="text-lg text-gray-700">مرحباً بك في رحلة التعلم الممتعة!</p>
        </div>

        {/* Login Card */}
        <Card className="border-4 border-white shadow-2xl">
          <CardHeader className="bg-gradient-to-r from-[#B3D9E1] to-[#B1CFB7] text-white">
            <CardTitle className="text-center text-2xl">تسجيل الدخول</CardTitle>
          </CardHeader>
          <CardContent className="p-8 space-y-6">
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="username" className="text-lg font-semibold text-gray-800">
                  اسم المستخدم
                </Label>
                <div className="relative">
                  <User className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
                  <Input
                    id="username"
                    type="text"
                    placeholder="أدخل اسم المستخدم"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="pr-10 text-lg border-2 border-[#B3D9E1] focus:border-[#B3D9E1] h-12"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-lg font-semibold text-gray-800">
                  كلمة المرور
                </Label>
                <div className="relative">
                  <Lock className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="أدخل كلمة المرور"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pr-10 text-lg border-2 border-[#B3D9E1] focus:border-[#B3D9E1] h-12"
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full text-xl py-6 bg-gradient-to-r from-[#B3D9E1] to-[#B1CFB7] hover:from-[#9AC5CE] hover:to-[#9FBFA5] text-white shadow-xl"
              >
                <Sparkles className="ml-2 w-5 h-5" />
                ابدأ التعلم
              </Button>
            </form>

            <div className="text-center space-y-3">
              <button className="text-[#B3D9E1] hover:underline font-semibold">
                نسيت كلمة المرور؟
              </button>
              <div className="text-gray-600">
                ليس لديك حساب؟{" "}
                <button className="text-[#EFBA93] hover:underline font-semibold">
                  سجل الآن
                </button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Demo Access */}
        <div className="mt-6 text-center">
          <Card className="bg-white/80 backdrop-blur-sm border-2 border-[#D7C2D8]">
            <CardContent className="p-4">
              <p className="text-sm text-gray-700 mb-3">
                تريد تجربة المنصة مباشرة؟
              </p>
              <Button
                variant="outline"
                onClick={() => setLocation("/lessons")}
                className="w-full border-2 border-[#D7C2D8] hover:bg-[#D7C2D8]/20"
              >
                دخول تجريبي
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Back to Home */}
        <div className="mt-6 text-center">
          <Button
            variant="ghost"
            onClick={() => setLocation("/")}
            className="text-white hover:bg-white/20"
          >
            ← العودة للصفحة الرئيسية
          </Button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-[#F2AAAE] rounded-full opacity-50 blur-xl"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-[#D7C2D8] rounded-full opacity-50 blur-xl"></div>
    </div>
  );
}
