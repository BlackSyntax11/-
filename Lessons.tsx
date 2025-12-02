import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Play, Star, Clock, Award, Home, User as UserIcon, MessageCircle } from "lucide-react";
import { useLocation } from "wouter";

export default function Lessons() {
  const [, setLocation] = useLocation();

  const lessons = [
    {
      id: 1,
      title: "دورة الماء في الطبيعة",
      subject: "العلوم",
      duration: "15 دقيقة",
      progress: 0,
      color: "from-[#B3D9E1] to-[#B1CFB7]",
      borderColor: "border-[#B3D9E1]",
      icon: "💧"
    },
    {
      id: 2,
      title: "جمع الأعداد",
      subject: "الرياضيات",
      duration: "20 دقيقة",
      progress: 65,
      color: "from-[#EFD9AA] to-[#EFBA93]",
      borderColor: "border-[#EFD9AA]",
      icon: "🔢"
    },
    {
      id: 3,
      title: "الحروف الهجائية",
      subject: "اللغة العربية",
      duration: "25 دقيقة",
      progress: 100,
      color: "from-[#D7C2D8] to-[#F2AAAE]",
      borderColor: "border-[#D7C2D8]",
      icon: "📖"
    },
    {
      id: 4,
      title: "الحيوانات الأليفة",
      subject: "العلوم",
      duration: "18 دقيقة",
      progress: 30,
      color: "from-[#B1CFB7] to-[#EFD9AA]",
      borderColor: "border-[#B1CFB7]",
      icon: "🐱"
    },
    {
      id: 5,
      title: "الألوان بالإنجليزية",
      subject: "اللغة الإنجليزية",
      duration: "12 دقيقة",
      progress: 0,
      color: "from-[#F2AAAE] to-[#EFBA93]",
      borderColor: "border-[#F2AAAE]",
      icon: "🎨"
    },
    {
      id: 6,
      title: "الطرح البسيط",
      subject: "الرياضيات",
      duration: "22 دقيقة",
      progress: 0,
      color: "from-[#B3D9E1] to-[#D7C2D8]",
      borderColor: "border-[#B3D9E1]",
      icon: "➖"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EFD9AA]/20 via-white to-[#B3D9E1]/20" dir="rtl">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#B3D9E1] to-[#B1CFB7] text-white shadow-xl">
        <div className="container py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-[#B3D9E1]" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">مرحباً أحمد! 👋</h1>
                <p className="text-white/90">جاهز للتعلم اليوم؟</p>
              </div>
            </div>
            <Button
              variant="ghost"
              onClick={() => setLocation("/profile")}
              className="text-white hover:bg-white/20"
            >
              <UserIcon className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Stats */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container">
          <div className="grid grid-cols-3 gap-4">
            <Card className="border-2 border-[#B3D9E1] bg-gradient-to-br from-[#B3D9E1]/10 to-white">
              <CardContent className="p-4 text-center">
                <Award className="w-8 h-8 text-[#B3D9E1] mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-800">12</div>
                <div className="text-sm text-gray-600">دروس مكتملة</div>
              </CardContent>
            </Card>
            <Card className="border-2 border-[#EFBA93] bg-gradient-to-br from-[#EFBA93]/10 to-white">
              <CardContent className="p-4 text-center">
                <Star className="w-8 h-8 text-[#EFBA93] mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-800">245</div>
                <div className="text-sm text-gray-600">نقاط</div>
              </CardContent>
            </Card>
            <Card className="border-2 border-[#D7C2D8] bg-gradient-to-br from-[#D7C2D8]/10 to-white">
              <CardContent className="p-4 text-center">
                <Clock className="w-8 h-8 text-[#D7C2D8] mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-800">3.5</div>
                <div className="text-sm text-gray-600">ساعات</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Lessons */}
      <section className="py-8">
        <div className="container">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">دروسك</h2>
            <p className="text-gray-600">اختر الدرس الذي تريد تعلمه</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lessons.map((lesson) => (
              <Card
                key={lesson.id}
                className={`border-4 ${lesson.borderColor} shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer`}
                onClick={() => setLocation(`/lesson/${lesson.id}`)}
              >
                <CardHeader className={`bg-gradient-to-br ${lesson.color} text-white`}>
                  <div className="text-center">
                    <div className="text-5xl mb-3">{lesson.icon}</div>
                    <CardTitle className="text-xl mb-2">{lesson.title}</CardTitle>
                    <CardDescription className="text-white/90 text-base">
                      {lesson.subject}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{lesson.duration}</span>
                    </div>
                    {lesson.progress > 0 && (
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-[#EFBA93]" />
                        <span>{lesson.progress}%</span>
                      </div>
                    )}
                  </div>

                  {/* Progress Bar */}
                  {lesson.progress > 0 && (
                    <div className="space-y-2">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`bg-gradient-to-r ${lesson.color} h-2 rounded-full transition-all duration-500`}
                          style={{ width: `${lesson.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}

                  <Button
                    className={`w-full bg-gradient-to-r ${lesson.color} hover:opacity-90 text-white`}
                    size="lg"
                  >
                    <Play className="ml-2 w-5 h-5" />
                    {lesson.progress === 0 ? "ابدأ الدرس" : lesson.progress === 100 ? "أعد المشاهدة" : "تابع التعلم"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t-4 border-[#B3D9E1] shadow-2xl">
        <div className="container py-4">
          <div className="flex justify-around items-center">
            <Button
              variant="ghost"
              onClick={() => setLocation("/")}
              className="flex flex-col items-center gap-1 hover:bg-[#B3D9E1]/10"
            >
              <Home className="w-6 h-6 text-gray-600" />
              <span className="text-xs text-gray-600">الرئيسية</span>
            </Button>
            <Button
              variant="ghost"
              className="flex flex-col items-center gap-1 bg-[#B3D9E1]/20"
            >
              <BookOpen className="w-6 h-6 text-[#B3D9E1]" />
              <span className="text-xs text-[#B3D9E1] font-bold">دروسي</span>
            </Button>
            <Button
              variant="ghost"
              onClick={() => setLocation("/assistant")}
              className="flex flex-col items-center gap-1 hover:bg-[#B3D9E1]/10"
            >
              <MessageCircle className="w-6 h-6 text-gray-600" />
              <span className="text-xs text-gray-600">المساعد</span>
            </Button>
            <Button
              variant="ghost"
              onClick={() => setLocation("/profile")}
              className="flex flex-col items-center gap-1 hover:bg-[#B3D9E1]/10"
            >
              <UserIcon className="w-6 h-6 text-gray-600" />
              <span className="text-xs text-gray-600">حسابي</span>
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
}
