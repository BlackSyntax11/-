import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Award, BookOpen, Clock, Star, Trophy, Target, TrendingUp, Home, MessageCircle, User as UserIcon } from "lucide-react";
import { useLocation } from "wouter";

export default function Profile() {
  const [, setLocation] = useLocation();

  const achievements = [
    { icon: "🏆", title: "مبتدئ متميز", description: "أكمل 5 دروس", unlocked: true },
    { icon: "⭐", title: "نجم ساطع", description: "احصل على 100 نقطة", unlocked: true },
    { icon: "🎯", title: "متعلم نشيط", description: "تعلم لمدة 5 ساعات", unlocked: true },
    { icon: "🔥", title: "متواصل", description: "تعلم 7 أيام متتالية", unlocked: false },
    { icon: "💎", title: "خبير", description: "أكمل 20 درس", unlocked: false },
    { icon: "👑", title: "بطل التعلم", description: "احصل على 500 نقطة", unlocked: false }
  ];

  const recentLessons = [
    { title: "جمع الأعداد", subject: "الرياضيات", progress: 65, icon: "🔢" },
    { title: "الحروف الهجائية", subject: "اللغة العربية", progress: 100, icon: "📖" },
    { title: "الحيوانات الأليفة", subject: "العلوم", progress: 30, icon: "🐱" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#D7C2D8]/20 via-white to-[#B3D9E1]/20" dir="rtl">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#D7C2D8] to-[#F2AAAE] text-white shadow-xl">
        <div className="container py-6">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => setLocation("/lessons")}
              className="text-white hover:bg-white/20"
            >
              <ArrowRight className="w-6 h-6 ml-2" />
              رجوع
            </Button>
            <h1 className="text-2xl font-bold">ملفي الشخصي</h1>
            <div className="w-20"></div>
          </div>
        </div>
      </header>

      {/* Profile Info */}
      <section className="py-8">
        <div className="container max-w-4xl">
          <Card className="border-4 border-[#D7C2D8] shadow-2xl">
            <CardContent className="p-8">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-24 h-24 bg-gradient-to-br from-[#D7C2D8] to-[#F2AAAE] rounded-full flex items-center justify-center text-5xl shadow-xl">
                  👦
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-800">أحمد محمد</h2>
                  <p className="text-lg text-gray-600">الصف الثالث الابتدائي</p>
                </div>
                <div className="flex items-center gap-2 bg-gradient-to-r from-[#EFBA93] to-[#F2AAAE] text-white px-6 py-2 rounded-full shadow-lg">
                  <Trophy className="w-5 h-5" />
                  <span className="font-bold">المستوى 3</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8">
        <div className="container max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">إحصائياتي</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <Card className="border-2 border-[#B3D9E1] bg-gradient-to-br from-[#B3D9E1]/10 to-white shadow-lg">
              <CardContent className="p-6 text-center">
                <BookOpen className="w-10 h-10 text-[#B3D9E1] mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-800 mb-1">12</div>
                <div className="text-sm text-gray-600">دروس مكتملة</div>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#EFBA93] bg-gradient-to-br from-[#EFBA93]/10 to-white shadow-lg">
              <CardContent className="p-6 text-center">
                <Star className="w-10 h-10 text-[#EFBA93] mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-800 mb-1">245</div>
                <div className="text-sm text-gray-600">نقاط</div>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#D7C2D8] bg-gradient-to-br from-[#D7C2D8]/10 to-white shadow-lg">
              <CardContent className="p-6 text-center">
                <Clock className="w-10 h-10 text-[#D7C2D8] mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-800 mb-1">3.5</div>
                <div className="text-sm text-gray-600">ساعات تعلم</div>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#B1CFB7] bg-gradient-to-br from-[#B1CFB7]/10 to-white shadow-lg">
              <CardContent className="p-6 text-center">
                <Target className="w-10 h-10 text-[#B1CFB7] mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-800 mb-1">5</div>
                <div className="text-sm text-gray-600">أيام متتالية</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-8">
        <div className="container max-w-4xl">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">إنجازاتي</h2>
            <div className="flex items-center gap-2 text-[#EFBA93]">
              <Award className="w-5 h-5" />
              <span className="font-bold">3 من 6</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className={`border-2 shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                  achievement.unlocked
                    ? "border-[#EFBA93] bg-gradient-to-br from-[#EFBA93]/10 to-white"
                    : "border-gray-300 bg-gray-50 opacity-60"
                }`}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-5xl mb-3">{achievement.icon}</div>
                  <h3 className="font-bold text-lg text-gray-800 mb-2">{achievement.title}</h3>
                  <p className="text-sm text-gray-600">{achievement.description}</p>
                  {achievement.unlocked && (
                    <div className="mt-3 inline-flex items-center gap-1 bg-[#EFBA93] text-white px-3 py-1 rounded-full text-xs font-bold">
                      <Award className="w-3 h-3" />
                      مكتمل
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Lessons */}
      <section className="py-8">
        <div className="container max-w-4xl">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">دروسي الأخيرة</h2>
            <Button
              variant="ghost"
              onClick={() => setLocation("/lessons")}
              className="text-[#B3D9E1] hover:bg-[#B3D9E1]/10"
            >
              عرض الكل
              <ArrowRight className="mr-2 w-4 h-4 rotate-180" />
            </Button>
          </div>
          <div className="space-y-4">
            {recentLessons.map((lesson, index) => (
              <Card key={index} className="border-2 border-[#B3D9E1] shadow-lg hover:shadow-xl transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{lesson.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-gray-800">{lesson.title}</h3>
                      <p className="text-sm text-gray-600">{lesson.subject}</p>
                      <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-[#B3D9E1] to-[#B1CFB7] h-2 rounded-full transition-all"
                          style={{ width: `${lesson.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#B3D9E1]">{lesson.progress}%</div>
                      <div className="text-xs text-gray-600">مكتمل</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Progress Chart */}
      <section className="py-8 pb-24">
        <div className="container max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">تقدمي الأسبوعي</h2>
          <Card className="border-4 border-[#B3D9E1] shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-[#B3D9E1] to-[#B1CFB7] text-white">
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-6 h-6" />
                الأداء هذا الأسبوع
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="flex items-end justify-between gap-2 h-48">
                {[30, 45, 60, 80, 55, 70, 90].map((height, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center gap-2">
                    <div
                      className="w-full bg-gradient-to-t from-[#B3D9E1] to-[#B1CFB7] rounded-t-lg transition-all duration-500 hover:opacity-80"
                      style={{ height: `${height}%` }}
                    ></div>
                    <span className="text-xs text-gray-600 font-semibold">
                      {['السبت', 'الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة'][index]}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <p className="text-lg text-gray-700">
                  <span className="font-bold text-[#B3D9E1]">رائع! 🎉</span> أنت تتحسن كل يوم
                </p>
              </div>
            </CardContent>
          </Card>
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
              onClick={() => setLocation("/lessons")}
              className="flex flex-col items-center gap-1 hover:bg-[#B3D9E1]/10"
            >
              <BookOpen className="w-6 h-6 text-gray-600" />
              <span className="text-xs text-gray-600">دروسي</span>
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
              className="flex flex-col items-center gap-1 bg-[#B3D9E1]/20"
            >
              <UserIcon className="w-6 h-6 text-[#B3D9E1]" />
              <span className="text-xs text-[#B3D9E1] font-bold">حسابي</span>
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
}
